import { View, Text, TouchableOpacity } from 'react-native'
import DocSVG from './DocSVG'
import { policyInfo } from '@/constants/accountInfo';

const {
  monthlyTotal, monthlyDeposit, monthlyPolicy, frequency, invoice, payment,
  totalBenefits, remainBenefits, policyName, policyPerson, joined, memberNo
} = policyInfo;

export default function Details() {
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
              <Text className="font-poppins text-[20px] text-[#105E49] font-medium">
                Details
              </Text>
            </View>

            <View className="mt-[2rem] gap-[10px]">
              <View className="flex-row justify-between pb-[1rem]">
                <View>
                  <Text className="font-poppins text-[18px] text-[#105E49] font-light">
                    Policy Holder
                  </Text>
                  <Text className="font-poppins text-[18px] pt-[0.3rem] text-[#1E1E1E]">
                    {policyPerson[0]}
                  </Text>
                </View>
                <View className='w-[10rem]'>
                  <Text className="font-poppins text-[18px] text-[#105E49] font-light">
                    Member Number
                  </Text>
                  <Text className="font-poppins text-[18px] pt-[0.3rem] text-[#1E1E1E]">
                    {memberNo}
                  </Text>
                </View>

              </View>
              <View className="flex-row justify-between pb-[1rem] border-b-[1px] border-b-[#105E49]">
                <View className='w-[10rem]'>
                  <Text className="font-poppins text-[18px] text-[#105E49] font-light">
                    People Insured
                  </Text>
                  <Text className="font-poppins text-[18px] pt-[0.3rem] text-[#1E1E1E]">
                    {policyPerson.length}
                  </Text>
                </View>
                <View className='w-[10rem]'>
                  <Text className="font-poppins text-[18px] text-[#105E49] font-light">
                    Date Joined
                  </Text>
                  <Text className="font-poppins text-[18px] pt-[0.3rem] text-[#1E1E1E]">
                    {joined}
                  </Text>
                </View>

              </View>
              <View className="flex-row justify-between pb-[1rem] pt-[1rem]">
                <View>
                  <Text className="font-poppins text-[18px] text-[#105E49] font-light">
                    Payment
                  </Text>
                  <Text className="font-poppins text-[18px] pt-[0.3rem] text-[#1E1E1E]">
                    {monthlyDeposit}
                  </Text>
                </View>
                <View className='w-[10rem]'>
                  <Text className="font-poppins text-[18px] text-[#105E49] font-light">
                    Frequency
                  </Text>
                  <Text className="font-poppins text-[18px] pt-[0.3rem] text-[#1E1E1E]">
                    {frequency}
                  </Text>
                </View>

              </View>
              <View className="flex-row justify-between pb-[1rem] border-b-[1px] border-b-[#105E49]">
                <View className='w-[10rem]'>
                  <Text className="font-poppins text-[18px] text-[#105E49] font-light">
                    Invoice Date
                  </Text>
                  <Text className="font-poppins text-[18px] pt-[0.3rem] text-[#1E1E1E]">
                    {invoice}
                  </Text>
                </View>
                <View className='w-[10rem]'>
                  <Text className="font-poppins text-[18px] text-[#105E49] font-light">
                    Payment Method
                  </Text>
                  <Text className="font-poppins text-[18px] pt-[0.3rem] text-[#1E1E1E]">
                    {payment}
                  </Text>
                </View>

              </View>
            </View>
            <TouchableOpacity className="mt-[2rem] px-[2rem] w-[85%] h-[4rem] bg-[#E5EF68] rounded-[1rem] flex flex-row  gap-[0.7rem]">
                <View className="self-center">
                  <DocSVG />
                </View>

                <Text className="self-center text-[#1E1E1E] text-[1.5rem]">Your Cover Document</Text>
            </TouchableOpacity>
          </View>
  )
}