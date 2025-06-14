import { View, Text } from 'react-native';
import { transactions } from '../constants/accountInfo';

export default function ThisMonth() {
  if (transactions.length === 0) {
    return (
      <View className="min-w-44 h-[8rem] pt-[0.5rem] rounded-[7px] border-[3px] border-[#5050c2] flex justify-center items-center gap-1">
        <Text className="text-4xl text-[#5050c2] font-semibold tracking-[0.2rem]">No Data</Text>
        <Text className="text-2xl text-[#5050c2] font-medium">This Month</Text>
      </View>
    );
  }

  // Helper to parse 'dd/mm/yy' into a Date object
  const parseDate = (str: string) => {
    const [day, month, year] = str.split('/').map(Number);
    return new Date(2000 + year, month - 1, day); // Assume 20yy format
  };

  // Step 1: Find the most recent transaction by date
  const sorted = [...transactions].sort(
    (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()
  );
  const latestDate = parseDate(sorted[0].date);
  const latestMonth = latestDate.getMonth();
  const latestYear = latestDate.getFullYear();

  // Step 2: Filter all transactions from that month
  const thisMonthTx = transactions.filter((tx) => {
    const d = parseDate(tx.date);
    return d.getMonth() === latestMonth && d.getFullYear() === latestYear;
  });

  // Step 3: Compute net total (Deposits +, Expenses -)
  const net = thisMonthTx.reduce((sum, tx) => {
    return tx.type === 'Deposit' ? sum + tx.amount : sum - tx.amount;
  }, 0);

  return (
    <View className="min-w-44 h-[8rem] rounded-[7px] border-[3px] border-[#5050c2] flex justify-center items-center gap-1">
      <Text className={`text-[#5050c2] font-semibold ${net > 99 || net < -99 ? 'text-[2.5rem]' : ' text-5xl tracking-[0.1rem]'}`}>
        {net >= 0 ? '+' : '-'} ${Math.abs(net).toLocaleString()}
      </Text>
      <Text className="text-2xl text-[#5050c2] font-medium">This Month</Text>
    </View>
  );
}
