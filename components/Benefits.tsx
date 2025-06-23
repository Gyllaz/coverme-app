import { Text, View, TouchableOpacity } from 'react-native';
import { policy } from '../constants/accountInfo';
import { useRouter } from 'expo-router';

const { remainBenefits, totalBenefits } = policy;
const percentage = totalBenefits > 0 ? Math.round((remainBenefits/totalBenefits)*100) : 0


export default function Benefits() {

  const router = useRouter();

  return (
    <TouchableOpacity>
      <View className='shadow-md bg-[#5050C2] rounded-[7px]'>
        <View className="min-w-44 h-[13rem] rounded-[7px] border-[3px] border-[#5050c2] flex gap-[1rem] justify-center pl-[0.8rem]">
          <Text className={`text-white font-semibold ${percentage > 99 ? 'text-[3.5rem]' : ' text-[4.3rem]'}`}>{percentage}%</Text>
          <Text className="text-[1.9rem] text-white font-medium">Benefits</Text>
          <Text className="text-[1.9rem] text-white font-medium">Remaining</Text>
        </View>

      </View>

    </TouchableOpacity>
  )
}