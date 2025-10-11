import { Text, View, TextInput, ScrollView, Dimensions, useWindowDimensions } from 'react-native';
import { useMemo, useState } from 'react';
import { BlurView } from 'expo-blur';
import { BarChart } from 'react-native-gifted-charts';
import { Picker } from '@react-native-picker/picker';
import { transactionsHistory, claimsHistory, getEmoji } from '@/constants/accountInfo';


// ---- helpers ----
function parseDate(d: string) {
  const [day, month, year] = d.split('/').map(Number);
  return new Date(2000 + year, month - 1, day);
}
function getMonthYearKey(dateString: string) {
  const date = parseDate(dateString);
  return date.toLocaleString('default', { month: 'short', year: 'numeric' }).toUpperCase();
}
// start of ISO week (Mon)
function startOfWeek(d: Date) {
  const date = new Date(d);
  const day = (date.getDay() + 6) % 7; // Monday=0
  date.setDate(date.getDate() - day);
  date.setHours(0, 0, 0, 0);
  return date;
}
function labelWeek(i: number) {
  return `Week ${i + 1}`;
}

export default function Transactions1() {
  const { width } = useWindowDimensions();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('ALL');
  const [activeBar, setActiveBar] = useState<number | null>(null);

  // Merge and sort (desc) for list
  const allTransactions = useMemo(() => {
    return [...transactionsHistory, ...claimsHistory].sort(
      (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()
    );
  }, []);

  // Dropdown options
  const monthOptions = useMemo(() => {
    const months = new Set(allTransactions.map((t) => getMonthYearKey(t.date)));
    return ['ALL', ...Array.from(months)];
  }, [allTransactions]);

  // Filtered for chart
  const filteredTx = useMemo(() => {
    if (selectedMonth === 'ALL') return allTransactions;
    return allTransactions.filter((tx) => getMonthYearKey(tx.date) === selectedMonth);
  }, [allTransactions, selectedMonth]);

  // Weekly stacked data for Gifted Charts
  const stackData = useMemo(() => {
    const byWeek = new Map<string, { weekStart: Date; dep: number; clm: number; exp: number }>();
    filteredTx.forEach((tx) => {
      const d = parseDate(tx.date);
      const wk = startOfWeek(d);
      const key = wk.toISOString().slice(0, 10);
      if (!byWeek.has(key)) byWeek.set(key, { weekStart: wk, dep: 0, clm: 0, exp: 0 });
      const bucket = byWeek.get(key)!;
      if (tx.type === 'Deposit') bucket.dep += tx.amount;
      else if (tx.type === 'CLAIM') bucket.clm += tx.amount;
      else if (tx.type === 'Expense') bucket.exp += tx.amount;
    });

    const weeks = Array.from(byWeek.values()).sort(
      (a, b) => a.weekStart.getTime() - b.weekStart.getTime()
    );

    const cDeposit = '#55C47C';
    const cClaim = '#4F7BFF';
    const cExpense = '#E24C4B';

    return weeks.map((w, i) => ({
      label: labelWeek(i),
      // Keep small metadata (k, amount) so tooltip can label nicely
      stacks: [
        ...(w.dep ? [{ value: w.dep, color: cDeposit, k: 'dep', amount: w.dep }] : []),
        ...(w.clm ? [{ value: w.clm, color: cClaim, k: 'clm', amount: w.clm }] : []),
        ...(w.exp ? [{ value: -w.exp, color: cExpense, k: 'exp', amount: w.exp }] : []), // negative below axis
      ],
    }));
  }, [filteredTx]);

  // y-range (for headroom)
  const { minY, maxY } = useMemo(() => {

    return { minY: -400, maxY: 400 };
  }, [stackData]);

  // — Fill the chart width dynamically —
  const { barWidth, spacing } = useMemo(() => {
    const container = width - 102; // matches wrapper style
    const n = Math.max(1, stackData.length);
    // Take ~20% of a bar unit for spacing, then solve barWidth to fill container
    const s = Math.max(8, Math.floor((container / n) * 0.2));
    const bw = Math.max(22, Math.floor((container - s * (n - 1)) / n));
    return { barWidth: bw, spacing: s };
  }, [stackData.length, width]);

  // List search — now scoped to the selected month/ALL
  const filteredTransactions = useMemo(() => {
    const base =
      selectedMonth === 'ALL'
        ? allTransactions
        : allTransactions.filter((tx) => getMonthYearKey(tx.date) === selectedMonth);

    const q = searchQuery.toLowerCase();
    return base.filter(
      (tx) => tx.label.toLowerCase().includes(q) || tx.date.includes(q)
    );
  }, [searchQuery, allTransactions, selectedMonth]);

  // Group list by month (uses the already-scoped filteredTransactions)
  const groupedTransactions = useMemo(() => {
    const groups: Record<string, typeof filteredTransactions> = {};
    filteredTransactions.forEach((tx) => {
      const key = getMonthYearKey(tx.date);
      if (!groups[key]) groups[key] = [];
      groups[key].push(tx);
    });
    return Object.entries(groups).sort(
      ([a], [b]) =>
        parseDate(groups[b][0].date).getTime() -
        parseDate(groups[a][0].date).getTime()
    );
  }, [filteredTransactions]);

  return (
    <View className="bg-white h-full">
      {/* Header */}
      <View
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: 170, zIndex: 10, elevation: 10,
        }}
        pointerEvents="box-none"
      >
        <BlurView
          intensity={50}
          tint="light"
          style={{
            backgroundColor: 'rgba(255,255,255,0.15)',
            borderBottomWidth: 1,
            borderColor: 'rgba(255,255,255,0.35)',
          }}
          className="pt-[3rem] pb-[1rem]"
        >
          <Text className="text-[#5050c2] pb-[1rem] pt-[1.5rem] pl-[2rem] text-[2.5rem]">
            Transactions
          </Text>

          {/* Search + Month selector */}
          <View className="flex flex-col gap-[1rem] w-full px-[2rem]">
            <TextInput
              placeholder="Search by title or date…"
              placeholderTextColor="#999"
              value={searchQuery}
              onChangeText={setSearchQuery}
              className="border border-[#5050c2] w-full rounded-[10px] px-4 py-2 text-[1.1rem]"
            />
            <View
              style={{
                borderWidth: 1,
                borderColor: '#5050C2',
                borderRadius: 10,
                overflow: 'hidden',
              }}
              className='h-[5rem] py-[0rem]'
            >
              <View className='absolute inset-x-0 top-[-5.25rem]'>
                <Picker
                  selectedValue={selectedMonth}
                  onValueChange={(v) => { setSelectedMonth(v); setActiveBar(null); }}
                  dropdownIconColor="#5050C2"
                >
                  {monthOptions.map((m) => (
                    <Picker.Item
                      key={m}
                      label={m === 'ALL' ? 'All Transactions' : m}
                      value={m}
                      color="#5050C2"
                    />
                  ))}
                </Picker>
              </View>
            </View>
          </View>
        </BlurView>
      </View>

      <ScrollView>
        <View className="w-full px-[2rem] pt-[19rem] pb-[7rem]">
          {/* Legend */}
          <View className="flex flex-row gap-[16px] mb-3 items-center">
            {[
              { label: 'Deposits', color: '#55C47C' },
              { label: 'Claims', color: '#4F7BFF' },
              { label: 'Expenses', color: '#E24C4B' },
            ].map((l) => (
              <View key={l.label} className="flex flex-row items-center gap-[6px]">
                <View style={{ width: 12, height: 12, borderRadius: 3, backgroundColor: l.color }} />
                <Text className="text-[#5050C2]">{l.label}</Text>
              </View>
            ))}
          </View>

          {/* Stacked weekly bar chart */}
          <View style={{ width: width - 32, alignSelf: 'center' }}
          className='pt-[2rem]'>
            <BarChart
              stackData={stackData}
              // fill width
              barWidth={barWidth}
              spacing={spacing}
              initialSpacing={20}
              // axes & labels
              hideRules
              // hideXAxisText={true}
              hideYAxisText={false}
              yAxisLabelPrefix="$"
              yAxisTextStyle={{ color: '#8A8AC9', }}
              xAxisThickness={1}
              barMarginBottom={0}
              yAxisExtraHeight={0}
              yAxisLabelWidth={50}
              xAxisLabelTextStyle={{display: 'none',}}
              yAxisThickness={1}
              yAxisColor="#E4E4F7"
              // range
              noOfSections={4}
              noOfSectionsBelowXAxis={minY < 0 ? 2 : 0}
              maxValue={maxY}
              // zero baseline
              // referenceLine1Position={0}
              // showReferenceLine1
              // referenceLine1Config={{ color: '#D6D6F0', thickness: 1 }}
              // visuals
              roundedTop
              roundedBottom
              barStyle={{
                
              }}
              // barBorderRadius={5}
              // selection
              // selectedIndex={activeBar ?? -1}
              // onPress={(item: any, index: number) => setActiveBar(index)}
              isAnimated
              animationDuration={3000}
              renderTooltip={(item: any, index: number) =>
                {return (
                  <View
                    style={{
                      backgroundColor: '#5050C2',
                      paddingVertical: 6,
                      paddingHorizontal: 10,
                      borderRadius: 8,
                    }}
                  >
                    {/* Show the "week" label at the top */}
                    <Text style={{ color: 'white', fontWeight: '700', marginBottom: 4 }}>
                      {item.values}
                    </Text>
                  </View>
                )}
              }
            />
          </View>

          <View className='pt-[4rem]'>
            {groupedTransactions.map(([month, txs]) => (
              <View key={month} className="mb-6">
                <Text className="text-[#5050c2] text-[1.4rem] font-bold mb-3">{month}</Text>
                {txs.map((tx, index) => (
                  <View key={index} className="mb-3 p-4 border border-[#ddd] rounded-[10px] bg-[#f9f9ff]">
                    <View className="flex flex-row justify-between items-center">
                      <Text className="text-[1.2rem] text-[#5050c2] font-semibold">
                        {getEmoji(tx.label)} {tx.label}
                      </Text>
                      <Text
                        className={`text-[1.1rem] font-bold ${
                          tx.type === 'Deposit'
                            ? 'text-green-600'
                            : tx.type === 'Expense'
                            ? 'text-red-600'
                            : 'text-blue-600'
                        }`}
                      >
                        {tx.type === 'Deposit' ? '+' : tx.type === 'Expense' ? '-' : '+'}${tx.amount}
                      </Text>
                    </View>
                    <View className="pt-[0.3rem]">
                      <Text className="text-[1rem] text-[#666]">{tx.date}</Text>
                      <Text className="text-[0.9rem] text-[#999]">{tx.type}</Text>
                    </View>
                  </View>
                ))}
              </View>
            ))}

          </View>
          {/* Transaction list */}

          {filteredTransactions.length === 0 && (
            <Text className="text-center text-[#999] mt-6">No transactions found.</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
