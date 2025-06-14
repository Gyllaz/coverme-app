import { View, Text } from 'react-native';
import { savingsGoals } from '@/constants/accountInfo';

const { target, current } = savingsGoals;
const difference = target - current;
const percentage = Math.min(Math.round((current / target) * 100), 100); // Cap at 100%

export default function LevelUp() {
  return (
    <View className="min-w-44 h-[14rem] rounded-[7px] border-[3px] border-[#5050c2] justify-center flex gap-3">
      
      {/* Progress box with overlay logic */}
      <View className="justify-center items-center">
        <View className="w-[8.7rem] h-[6rem] rounded-[7px] overflow-hidden bg-white border-[3px] border-[#5050c2] relative">
          
          {/* Bottom layer (purple text always visible) */}
          <View className="absolute w-full h-full justify-center items-center z-0">
            <Text className="text-[1.5rem] text-[#5050c2] font-medium">${difference}</Text>
          </View>

          {/* Purple overlay with white text over it */}
          <View
            className="absolute bottom-0 left-0 right-0 bg-[#5050c2] items-center"
            style={{ height: `${percentage}%` }}
          >
            <Text className="text-[1.5rem] text-white font-medium absolute top-[-1.57rem]">${difference}</Text>
          </View>

        </View>
      </View>

      {/* Label */}
      <View className="justify-center pl-[0.8rem]">
        <Text className="text-[1.9rem] text-[#5050c2] font-medium">Until You</Text>
        <Text className="text-[1.9rem] text-[#5050c2] font-medium">Level Up</Text>
      </View>
    </View>
  );
}
