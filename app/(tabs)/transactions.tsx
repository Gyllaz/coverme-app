import { Text, View, TextInput, ScrollView } from "react-native";
import { useState, useMemo } from "react";
import { BackArrow } from '@/components';
import { transactionsHistory, claimsHistory, getEmoji } from "@/constants/accountInfo";

function parseDate(dateString: string) {
  const [day, month, year] = dateString.split("/").map(Number);
  return new Date(2000 + year, month - 1, day); // '25' becomes 2025
}

function getMonthYearKey(dateString: string) {
  const date = parseDate(dateString);
  return date.toLocaleString("default", { month: "short", year: "numeric" }).toUpperCase(); // e.g. MAY 2025
}

export default function Transactions() {
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
    <View className="bg-white h-full flex gap-[0.1rem] pt-[10%]">
      <BackArrow />

      <View className="flex flex-row pt-[2.5rem] pb-[1rem] gap-[1.5rem] w-full pl-[2rem]">
        <Text className="text-[#5050c2] font-poppins text-[2.5rem] font-medium">
          Transactions
        </Text>
      </View>

      <View className="flex flex-row pt-[1rem] pb-[1rem] gap-[1.5rem] w-full px-[2rem]">
        <TextInput
          placeholder="Search by title or date..."
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
          className="border border-[#ccc] w-full rounded-[10px] px-4 py-2 text-[1.1rem] mb-4"
        />
      </View>

      <ScrollView>
        <View className="flex-1 w-full px-[2rem] pb-[7rem]">

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
