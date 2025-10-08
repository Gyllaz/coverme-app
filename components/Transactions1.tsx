import { Text, View, TextInput, ScrollView } from "react-native";
import { useState, useMemo } from "react";
import { BackArrow } from '@/components';
import { transactionsHistory, claimsHistory, getEmoji } from "@/constants/accountInfo";
import { BlurView } from 'expo-blur';

function parseDate(dateString: string) {
  const [day, month, year] = dateString.split("/").map(Number);
  return new Date(2000 + year, month - 1, day); // '25' becomes 2025
}

function getMonthYearKey(dateString: string) {
  const date = parseDate(dateString);
  return date.toLocaleString("default", { month: "short", year: "numeric" }).toUpperCase(); // e.g. MAY 2025
}

export default function Transactions1() {
  const [searchQuery, setSearchQuery] = useState("");

  const allTransactions = useMemo(() => {
    return [...transactionsHistory, ...claimsHistory].sort((a, b) =>
      parseDate(b.date).getTime() - parseDate(a.date).getTime()
    );
  }, []);

  const filteredTransactions = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return allTransactions.filter(
      (tx) =>
        tx.label.toLowerCase().includes(query) ||
        tx.date.includes(query)
    );
  }, [searchQuery, allTransactions]);

  // Group by month-year
  const groupedTransactions = useMemo(() => {
    const groups: { [key: string]: typeof filteredTransactions } = {};
    filteredTransactions.forEach((tx) => {
      const key = getMonthYearKey(tx.date);
      if (!groups[key]) groups[key] = [];
      groups[key].push(tx);
    });

    // Preserve order: newest month first
    return Object.entries(groups).sort(
      ([a], [b]) =>
        parseDate(groups[b][0].date).getTime() -
        parseDate(groups[a][0].date).getTime()
    );
  }, [filteredTransactions]);

  return (
    <View className="bg-white h-full">
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 96,
          zIndex: 10,
          // Android elevation for overlay ordering
          elevation: 10,
        }}
        pointerEvents="box-none"
        className='h-[10rem]'
      >
        <BlurView
          intensity={30}            // 0–100 (higher = stronger blur)
          tint="light"              // 'light' | 'dark' | 'default'
          style={{
            backgroundColor: 'rgba(255,255,255,0.15)',
            borderBottomWidth: 1,
            borderColor: 'rgba(255,255,255,0.35)',
          }}
          className='pt-[3rem] pb-[2rem]'
        >
          <Text className='text-[#5050c2] pb-[1rem] pt-[1.5rem] pl-[2rem] text-[2.5rem]'>Transactions</Text>
          <View className="flex flex-row pb-[2rem] gap-[1.5rem] w-full px-[2rem]">
            <TextInput
              placeholder="Search by title or date..."
              placeholderTextColor="#999"
              value={searchQuery}
              onChangeText={setSearchQuery}
              className="border border-[#5050c2] w-full rounded-[10px] px-4 py-2 text-[1.1rem] mb-4"
            />
          </View>

        </BlurView>
      </View>


      <ScrollView>
        <View className="flex-1 w-full pt-[10rem] px-[2rem] pb-[7rem]">

          {groupedTransactions.map(([month, txs]) => (
            <View key={month} className="mb-6">
              <Text className="text-[#5050c2] text-[1.4rem] font-bold mb-3">
                {month}
              </Text>

              {txs.map((tx, index) => (
                <View
                  key={index}
                  className="mb-3 p-4 border border-[#ddd] rounded-[10px] bg-[#f9f9ff]"
                >
                  <View className="flex flex-row justify-between items-center">
                    <Text className="text-[1.2rem] text-[#5050c2] font-semibold">
                      {getEmoji(tx.label)} {tx.label}
                    </Text>
                    <Text
                      className={`text-[1.1rem] font-bold ${
                        tx.type === "Deposit" ? "text-green-600" :
                        tx.type === "Expense" ? "text-red-600" :
                        "text-blue-600"
                      }`}
                    >
                      {tx.type === "Deposit" ? "+" : "-"}${tx.amount}
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

          {filteredTransactions.length === 0 && (
            <Text className="text-center text-[#999] mt-6">
              No transactions found.
            </Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
