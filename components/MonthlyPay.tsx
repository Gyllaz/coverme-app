import { View, Text } from 'react-native'
import { policyInfo } from '@/constants/accountInfo';

const {
  monthlyTotal, monthlyDeposit, monthlyPolicy,
  totalBenefits, remainBenefits, policyName, policyPerson, joined, memberNo
} = policyInfo;

export default function MonthlyPay() {
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
            <View className="flex-row justify-between">
              <Text className="font-poppins text-[20px] text-[#5050C2] font-medium">
                Monthly Payments
              </Text>
            </View>

            <View className="mt-[12px] gap-[10px]">
              <View className="flex-row justify-between">
                <Text className="font-poppins text-[18px] text-[#5050C2] font-light">
                  Wallet Deposit
                </Text>
                <Text className="font-poppins text-[18px] text-[#5050C2]">
                  {monthlyDeposit}
                </Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="font-poppins text-[18px] text-[#5050C2] font-light">
                  Policy Financing
                </Text>
                <Text className="font-poppins text-[18px] text-[#5050C2]">
                  {monthlyPolicy}
                </Text>
              </View>
              <View className="pt-[12px] mt-[8px] border-t border-[#5050C2]/40 flex-row justify-between">
                <Text className="font-poppins text-[18px] text-[#5050C2] font-light">
                  Total
                </Text>
                <Text className="font-poppins text-[18px] text-[#5050C2]">
                  {monthlyTotal}
                </Text>
              </View>
            </View>
          </View>
  )
}