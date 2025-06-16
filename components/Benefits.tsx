import { Text, View } from 'react-native';
import { policy } from '../constants/accountInfo';

const { remainBenefits, totalBenefits } = policy;
const percentage = totalBenefits > 0 ? Math.round((remainBenefits/totalBenefits)*100) : 0


export default function Benefits() {
  return (
    <View className="min-w-44 h-[13rem] rounded-[7px] border-[3px] border-[#5050c2] flex gap-[1rem] justify-center pl-[0.8rem]">
      <Text className={`text-[#5050c2] font-semibold ${percentage > 99 ? 'text-[3.5rem]' : ' text-[4.3rem]'}`}>{percentage}%</Text>
      <Text className="text-[1.9rem] text-[#5050c2] font-medium">Benefits</Text>
      <Text className="text-[1.9rem] text-[#5050c2] font-medium">Remaining</Text>
    </View>
  )
}