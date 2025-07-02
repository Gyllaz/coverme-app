import { View, Text, TouchableOpacity } from 'react-native';
import { transactionsHistory } from '../constants/accountInfo';
import { useRouter } from 'expo-router';


export default function ThisMonth() {

    const router = useRouter();

  if (transactionsHistory.length === 0) {
    return (
 
        <TouchableOpacity onPress={() => router.push('/transactions')}>
          <View className='shadow-md bg-[#5050C2] rounded-[7px]'>
            <View className="min-w-44 h-[8rem] pt-[0.5rem] rounded-[7px] border-[3px] border-[#5050c2] flex justify-center items-center gap-1">
              <View>
                <Text className="text-2xl text-white font-medium">No Data</Text>
                <Text className="text-2xl text-white font-medium">This Month</Text>

              </View>
            </View>

          </View>

        </TouchableOpacity>

    );
  }

  // Helper to parse 'dd/mm/yy' into a Date object
  const parseDate = (str: string) => {
    const [day, month, year] = str.split('/').map(Number);
    return new Date(2000 + year, month - 1, day); // Assume 20yy format
  };

  // Step 1: Find the most recent transaction by date
  const sorted = [...transactionsHistory].sort(
    (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()
  );
  const latestDate = parseDate(sorted[0].date);
  const latestMonth = latestDate.getMonth();
  const latestYear = latestDate.getFullYear();

  // Step 2: Filter all transactions from that month
  const thisMonthTx = transactionsHistory.filter((tx) => {
    const d = parseDate(tx.date);
    return d.getMonth() === latestMonth && d.getFullYear() === latestYear;
  });

  // Step 3: Compute net total (Deposits +, Expenses -)
  const net = thisMonthTx.reduce((sum, tx) => {
    return tx.type === 'Deposit' ? sum + tx.amount : sum - tx.amount;
  }, 0);

  return (

      <TouchableOpacity onPress={() => router.push('/transactions')}>
        <View className='shadow-md bg-[#5050C2] rounded-[7px]'>
          <View className="min-w-44 h-[8rem] rounded-[7px] border-[3px] border-[#5050c2] flex justify-center items-center gap-1">
            <Text className={`text-white font-semibold ${net > 99 || net < -99 ? 'text-[2.5rem]' : ' text-5xl tracking-[0.1rem]'}`}>
              {net >= 0 ? '+' : '-'} ${Math.abs(net).toLocaleString()}
            </Text>
            <Text className="text-2xl text-white font-medium">This Month</Text>
          </View>

        </View>

      </TouchableOpacity>

  );
}
