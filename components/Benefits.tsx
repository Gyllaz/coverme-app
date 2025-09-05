import { View, Text } from 'react-native'
import { policyInfo } from '@/constants/accountInfo';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const {
  monthlyTotal, monthlyDeposit, monthlyPolicy, frequency,
  totalBenefits, remainBenefits, policyName, policyPerson, joined, memberNo
} = policyInfo;

const percentProgress = Math.round((remainBenefits / totalBenefits) * 100);


export default function Benefits() {
  return (
          <View
            className="w-full rounded-[16px] bg-white px-[2rem] py-[1.5rem]"
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 8 },
              shadowOpacity: 0.38,
              shadowRadius: 16,
              elevation: 10,
            }}
          >
            <View className="gap-[6px]">
              <Text className="font-poppins text-[22px] tracking-[0.1rem] text-[#5050C2] font-medium">
                Benefits
              </Text>
              <Text className="font-poppins text-[18px] text-[#5050C2] font-light">
                {policyName}
              </Text>
            </View>

            <View className="w-full">
              <View className="items-center pt-[16px]">
                <AnimatedCircularProgress
                  size={320}
                  width={15}
                  backgroundWidth={15}
                  fill={percentProgress}
                  rotation={0}
                  lineCap="round"
                  tintColor="#55C47C"
                  backgroundColor="#C9F8D9"
                  duration={1800}
                />
              </View>
              <View className="absolute w-full h-full items-center justify-center">
                <Text className="font-poppins text-[44px] tracking-[0.1rem] text-[#5050C2] font-medium">
                  ${remainBenefits}
                </Text>
                <Text className="font-poppins text-[20px] tracking-[0.1rem] text-[#5050C2] font-medium">
                  Remaining
                </Text>
              </View>
            </View>

            <Text className="pt-[12px] font-poppins text-[14px] text-[#5050C2] font-light">
              Your benefits including dental, optical, physio and more share a combined limit.
            </Text>
          </View>
  )
}