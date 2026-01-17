// Policy1.tsx
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { policyInfo, cleanDate } from '@/constants/accountInfo';
import WideSVG from './SVG/WideSVG';
import ClaimSVG from './SVG/ClaimSVG';


export default function Policy1() {

  const percent = (policyInfo.remainBenefits / policyInfo.totalBenefits)*100;
  const widthPercent = String(percent) + '%';

  return (
    <View className="bg-white h-full">

      <ScrollView>
        <View className="w-full px-[2rem] pb-[7rem]">
          <View className="pt-[4rem] pb-[1rem]">
            <View className='flex flex-row w-full h-fit pt-[1rem] pb-[1rem]'>
              <Text className="font-[BASKiT-Medium] text-[#231F20]  text-[1.7rem]">
                My policy
              </Text>

            </View>
          </View>
          {/* Body */}
          <View className="w-fit h-[21rem] flex flex-col justify-between bg-sun-100 px-[1.5rem] pt-[1rem] pb-[2rem] rounded-[1rem]">
            <View className="w-full flex flex-col gap-[0.5rem]">
              <Text className="font-[BASKiT-Medium] text-[1.7rem]">
                Benefits
              </Text>
              <Text className="font-[BASKiT] text-[1rem]">{policyInfo.policyName}</Text>
            </View>

            <View>
              <Text className="font-[BASKiT] text-[1.2rem]">${policyInfo.remainBenefits} remaining of ${policyInfo.totalBenefits}</Text>
              <View className="w-full h-[1.5rem] bg-white rounded-full flex flex-row overflow-hidden mt-[1rem] mb-[1rem]">
                <View className={`bg-[#105E49] h-full rounded-full`}
                  style={{
                    width: `${widthPercent}`,
                  }}
                >

                </View>

              </View>
              <Text className="font-[BASKiT-Medium] text-[1rem]">Your benefits include:</Text>
              <Text className="font-[BASKiT] text-[1rem]">Dental, optical, physio and more</Text>
            </View>
          </View>
          <View className='w-full mt-[2rem] flex flex-col gap-[2rem]'>
            <View>
              <Text className='font-[BASKiT-Medium] text-[1.3rem] border-b-[1px] border-b-[#F3F3F1] pb-[1rem]'>Details</Text>
              <View className='w-full flex flex-col gap-[0.5rem] pt-[1rem] px-[0.5rem]'>
                <View className='w-full flex flex-row justify-between '>
                  <Text className='font-[BASKiT] text-[1.1rem]'>Policy Holder</Text>
                  <Text className='font-[BASKiT-Light] text-[1.1rem] text-[#231F20]'>{policyInfo.policyPerson[0]}</Text>
                </View>
                <View className='w-full flex flex-row justify-between '>
                  <Text className='font-[BASKiT] text-[1.1rem]'>Member Number</Text>
                  <Text className='font-[BASKiT-Light] text-[1.1rem] text-[#231F20]'>{policyInfo.memberNo}</Text>
                </View>
                <View className='w-full flex flex-row justify-between '>
                  <Text className='font-[BASKiT] text-[1.1rem]'>People Insured</Text>
                  <Text className='font-[BASKiT-Light] text-[1.1rem] text-[#231F20]'>{policyInfo.policyPerson.length}</Text>
                </View>
                <View className='w-full flex flex-row justify-between '>
                  <Text className='font-[BASKiT] text-[1.1rem]'>Date Joined</Text>
                  <Text className='font-[BASKiT-Light] text-[1.1rem] text-[#231F20]'>{cleanDate(policyInfo.joined)}</Text>
                </View>
              </View>
            </View>
            <View>
              <Text className='font-[BASKiT-Medium] text-[1.3rem] border-b-[1px] border-b-[#F3F3F1] pb-[1rem]'>Payments</Text>
              <View className='w-full flex flex-col gap-[0.5rem] pt-[1rem] px-[0.5rem]'>
                <View className='w-full flex flex-row justify-between '>
                  <Text className='font-[BASKiT] text-[1.1rem]'>Wallet Deposits</Text>
                  <Text className='font-[BASKiT-Light] text-[1.1rem] text-[#231F20]'>{policyInfo.monthlyDeposit}</Text>
                </View>
                <View className='w-full flex flex-row justify-between '>
                  <Text className='font-[BASKiT] text-[1.1rem]'>Policy Financing</Text>
                  <Text className='font-[BASKiT-Light] text-[1.1rem] text-[#231F20]'>{policyInfo.monthlyPolicy}</Text>
                </View>
                <View className='w-full flex flex-row justify-between '>
                  <Text className='font-[BASKiT] text-[1.1rem]'>Frequency</Text>
                  <Text className='font-[BASKiT-Light] text-[1.1rem] text-[#231F20]'>{policyInfo.frequency}</Text>
                </View>
                <View className='w-full flex flex-row justify-between '>
                  <Text className='font-[BASKiT] text-[1.1rem]'>Payment Method</Text>
                  <Text className='font-[BASKiT-Light] text-[1.1rem] text-[#231F20]'>{policyInfo.payment}</Text>
                </View>
                <View className='w-full flex flex-row justify-between '>
                  <Text className='font-[BASKiT] text-[1.1rem]'>Invoice Date</Text>
                  <Text className='font-[BASKiT-Light] text-[1.1rem] text-[#231F20]'>{policyInfo.invoice}</Text>
                </View>
              </View>
              
            </View>
          </View>
          <View className='w-full mt-[1rem] pt-[1rem] border-t-[1px] border-t-[#F3F3F1] flex flex-col gap-[2rem]'>
            <TouchableOpacity className='mt-[0.5rem]'>
              <Text className='font-[BASKiT] text-[1.1rem] underline underline-offset-3'>Update information</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="w-full h-fit px-[1rem] py-[1.3rem] bg-[#F3F3F1] rounded-[1rem] flex-row items-center justify-between">
              <View className="flex-row items-center gap-[0.75rem]">
                <ClaimSVG colour='#8B8988' />
                <View className="flex flex-col gap-[0.2rem]">
                  <Text className="text-[1.2rem] font-[BASKiT] text-black ">
                    Need to charge your policy?
                  </Text>
                  <Text className="text-[1rem] font-[BASKiT-light] text-black">
                    Take a look at your options
                  </Text>
                </View>
              </View>
              <WideSVG />
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </View>
  );
}
