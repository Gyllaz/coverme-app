import { Text, View, TextInput, ScrollView, useWindowDimensions } from 'react-native';
import { useMemo, useState } from 'react';
import { formatDate } from '@/constants/accountInfo';
import { BarChart } from 'react-native-gifted-charts';
import { Picker } from '@react-native-picker/picker';
import { transactionsHistory, claimsHistory, getIcon } from '@/constants/accountInfo';
import { Platform } from 'react-native';


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

    const cDeposit = '#105E49';
    const cClaim = '#ECF86E';
    const cExpense = '#8AC3F9';

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

      <ScrollView>
        <View className="w-full px-[2rem] pb-[7rem]">
        {/* Header */}
          <View

            className="pt-[4rem] pb-[1rem]"
          >
            <View className='flex flex-row w-full h-fit justify-between pt-[1rem] pb-[1rem]'>
              <Text className="font-[BASKiT-Medium] text-[#231F20]  text-[1.7rem]">
                Transactions
              </Text>

              {/* Legend */}
              <View className="flex flex-row gap-[10px]  items-center">
                {[
                  { label: 'Deposits', color: '#105E49' },
                  { label: 'Claims', color: '#ECF86E' },
                  { label: 'Expenses', color: '#8AC3F9' },
                ].map((l) => (
                  <View key={l.label} className="flex flex-row items-center gap-[6px]">
                    <View style={{ width: 12, height: 12, borderRadius: 3, backgroundColor: l.color }} />
                    <Text className="text-[#231F20] text-[0.7rem]">{l.label}</Text>
                  </View>
                ))}
              </View>

            </View>

            {/* Month selector */}
            <View className="flex flex-col gap-[1rem] w-full">
              {Platform.OS === 'ios' ? (
                // iOS: Keep your clipping logic to hide the wheel's height
                <View style={{ overflow: 'hidden' }} className="h-[5rem] w-full">
                  <View className="absolute inset-x-0 top-[-5.25rem]">
                    <Picker
                      selectedValue={selectedMonth}
                      onValueChange={(v) => { setSelectedMonth(v); setActiveBar(null); }}
                      dropdownIconColor="#8B8988"
                    >
                      {monthOptions.map((m) => (
                        <Picker.Item key={m} label={m === 'ALL' ? 'All Transactions' : m} value={m} color="#8B8988" />
                      ))}
                    </Picker>
                  </View>
                </View>
              ) : (
                // Android: Render a clean, visible box without the negative offset
                <View className="h-[3.5rem] w-[75%] ml-[3rem] border border-[#8B8988] rounded-xl justify-center">
                  <Picker
                    selectedValue={selectedMonth}
                    onValueChange={(v) => { setSelectedMonth(v); setActiveBar(null); }}
                    dropdownIconColor="#8B8988"
                    mode="dropdown"
                    style={{ color: '#8B8988', backgroundColor: 'transparent' }}
                  >
                    {monthOptions.map((m) => (
                      <Picker.Item 
                        key={m} 
                        label={m === 'ALL' ? 'All Transactions' : m} 
                        value={m} 
                        color="#8B8988" // This color prop works better on Android
                      />
                    ))}
                  </Picker>
                </View>
              )}
            </View>
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
              yAxisTextStyle={{ color: '#1E1E1E', }}
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
              nestedScrollEnabled={true}
              scrollAnimation={true}
              disableScroll={false}
              barStyle={{
                
              }}
              // barBorderRadius={5}
              // selection
              // selectedIndex={activeBar ?? -1}
              // onPress={(item: any, index: number) => setActiveBar(index)}
              isAnimated
              animationDuration={3000}
              // renderTooltip={(item: any, index: number) =>
              //   {return (
              //     <View
              //       style={{
              //         backgroundColor: '#5050C2',
              //         paddingVertical: 6,
              //         paddingHorizontal: 10,
              //         borderRadius: 8,
              //       }}
              //     >
              //       {/* Show the "week" label at the top */}
              //       <Text style={{ color: 'white', fontWeight: '700', marginBottom: 4 }}>
              //         {item.values}
              //       </Text>
              //     </View>
              //   )}
              // }
            />
          </View>
          <View className='pt-[3rem]'>
             <TextInput
                placeholder="Search by title or date…"
                placeholderTextColor="#999"
                value={searchQuery}
                onChangeText={setSearchQuery}
                className="bg-[#F3F3F1] w-full rounded-[10px] px-4 py-2 text-[1.3rem]"
              />
          </View>

          <View className='pt-[2rem]'>
            {groupedTransactions.map(([month, txs]) => (
              <View key={month} className="mb-6">
                <Text className="text-[#231F20] font-[BASKiT] text-[1.4rem] mb-3">{month}</Text>
                {txs.map((tx, index) => {
                  
                  const Icon = getIcon(tx.label);
                  interface ColourScheme {
                    [key: string]: string[]; 
                  }

                  const colourScreen: ColourScheme = {
                    'Deposit': ['#105E49', '#ECF86E'],
                    'CLAIM': ['#ECF86E', '#105E49'],
                    'Expense': ['#8AC3F9', '#FFFFFF']
                  };

                

                  return (
                    <View key={index} className="py-[1rem] border-t-[1px] border-t-[#F3F3F1] bg-white">
                      <View className='flex flex-row gap-[1rem]'>
                        <View>
                          <Icon colour1={colourScreen[tx.type][0]} colour2={colourScreen[tx.type][1]}/>
                        </View>
                        <View className='flex w-[80%]'>
                          <View className="flex flex-row justify-between items-center">
                            <Text className="text-[1.3rem] text-[1E1E1E] font-[BASKiT-Medium]">
                              {tx.label}
                            </Text>
                            <View className=''>
                              <Text
                                className={`text-[1.3rem] font-[BASKiT-Medium] text-[#231F20]`}
                              >
                                {tx.type === 'Deposit' ? '+' : tx.type === 'Expense' ? '-' : '+'}${tx.amount}
                              </Text>
                            
                            </View>
                          </View>
                          <View className="pt-[0.3rem] flex flex-row justify-between items-center">
                            <Text className="text-[1rem] font-[BASKiT] text-[#8B8988]">{formatDate(tx.date)}</Text>
                            <Text className="text-[0.9rem] font-[BASKiT] text-[#8B8988]">{tx.type}</Text>
                          </View>
                        
                        </View>

                      </View>
                    </View>

                  )
                })}
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
