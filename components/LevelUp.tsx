import { savingsGoals } from '@/constants/accountInfo';
import { Text, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';


const { target, current } = savingsGoals;
const difference = target - current;
const percentage = Math.min(Math.round((current / target) * 100), 100);

export default function LevelUp() {

  const router = useRouter();

  return (
    <TouchableOpacity>
      <View className='shadow-md bg-[#5050C2] rounded-[7px]'>

        <View className="min-w-44 h-[14rem] rounded-[7px] border-[3px] border-[#5050c2] justify-center flex gap-3">
          
          {/* Box */}
          <View className="justify-center items-center ">
            <View className="w-[8.7rem] h-[6rem] rounded-[7px] overflow-hidden bg-white border-[3px] border-[#5050c2] relative border-[2px] border-white">
              
              {/* 1. Base purple text (always visible) */}
              <View className="absolute w-full h-full justify-center items-center z-10">
                <Text className="text-[2rem] text-[#5050c2] font-bold">${difference}</Text>
              </View>

              {/* 2. Purple fill growing up */}
              <View
                className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden items-center"
                style={{ height: `${percentage}%`, backgroundColor: '#5050c2' }}
              >
                {/* White text clipped inside purple fill */}
                <View className="absolute bottom-[-0.21rem] w-full h-[6rem] justify-center items-center">
                  <Text className="text-[2rem] text-white font-bold">${difference}</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Labels */}
          <View className="justify-center pl-[0.8rem]">
            <Text className="text-[1.9rem] text-white font-medium">Until You</Text>
            <Text className="text-[1.9rem] text-white font-medium">Level Up</Text>
          </View>
        </View>
      </View>

    </TouchableOpacity>
  );
}
