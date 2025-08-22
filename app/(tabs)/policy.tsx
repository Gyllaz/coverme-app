import { Text, View, ScrollView } from "react-native";
import { useState, useRef, useEffect } from "react";
import { BackArrow } from '@/components';
import { policyInfo } from "@/constants/accountInfo";
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const { 
  monthlyTotal, 
  monthlyDeposit, 
  monthlyPolicy, 
  totalBenefits, 
  remainBenefits,
  policyName } = policyInfo;

const percentProgress = Math.round((remainBenefits/totalBenefits)*100)


export default function policy() {
  return (
   <View
      className="bg-white h-full flex gap-[0.1rem]"
    >
      <BackArrow />
      
      <View className="flex flex-row pt-[2.5rem] pb-[1rem] gap-[1.5rem] w-full pl-[2rem]">
        <Text className="text-[#5050c2] font-poppins text-[2.5rem] font-medium">Your Policy</Text>
      </View>
      <ScrollView>
        <View className="flex gap-[2rem] pt-[1.5rem] pb-[4rem]">
          <View className=" w-full flex justify-center items-center">
            <View className="bg-[#5050C2] w-[90%] border-[3px] border-[#5050c2] flex gap-[1rem] py-[2rem] px-[2rem] rounded-[15px]">
              <View className="flex flex-row justify-between">
                <Text className="font-poppins text-[1.7rem] tracking-[0.1rem] text-white font-medium">
                  Monthly Payments
                </Text>

                <View className="pt-[0.1rem]">

                </View>

              </View>
              <View>
              <View className="flex gap-[1rem]">
                <View className="pt-[0.1rem] w-full flex flex-row justify-between">
                  <Text className="font-poppins text-[1.3rem] text-white font-light">Wallet Deposit</Text>
                  <Text className="font-poppins text-[1.3rem] text-white">{ monthlyDeposit }</Text>
                </View>
                <View className="pt-[0.1rem] w-full flex flex-row justify-between">
                  <Text className="pt-[0.1rem] font-poppins text-[1.3rem] text-white font-light">Policy Financing</Text>
                  <Text className="font-poppins text-[1.3rem] text-white">{ monthlyPolicy }</Text>
                </View>
                <View className="pt-[0.7rem] w-full flex flex-row justify-between border-t-[1px] border-white">
                  <Text className="font-poppins text-[1.3rem] text-white font-light">Total</Text>
                  <Text className="font-poppins text-[1.3rem] text-white">{ monthlyTotal }</Text>
                </View>
              </View>

              </View>

              </View>
          </View>

          <View className="w-full flex justify-center items-center">
            <View className=" bg-[#5050c2] w-[90%] border-[3px] border-[#5050c2] flex gap-[1rem] py-[2rem] px-[2rem] rounded-[15px]">
              <View className="flex gap-[0.7rem]">
                <Text className="font-poppins text-[1.7rem] tracking-[0.1rem] text-white font-medium">
                  Benefits
                </Text>
                <Text className="font-poppins text-[1.3rem] text-white font-light">{ policyName }</Text>
              </View>

              <View className="w-full h-fit">
                <View className="w-full flex flex justify-center items-center pt-[1.5rem] ">
                  <AnimatedCircularProgress 
                    size={320}
                    width={15}
                    backgroundWidth={15}
                    fill={percentProgress}
                    rotation={0}
                    lineCap="round"
                    tintColor="#55C47C"
                    backgroundColor="#C9F8D9"
                    duration={3000}/>
                </View>
                <View className="absolute w-full h-full justify-center items-center">
                  <Text className="font-poppins text-[3.7rem] tracking-[0.1rem] text-white font-medium">${remainBenefits}</Text>
                  <Text className="font-poppins text-[1.7rem] tracking-[0.1rem] text-white font-medium">Remaining</Text>
                </View>

              </View>
              <Text className="pt-[1rem] font-poppins text-[1rem] text-white font-me font-light">Your benefits including; dental, optical, physio and more, have a shared limit</Text>
            </View>
          </View>

        </View>
        
      </ScrollView>
  </View>
  )
}