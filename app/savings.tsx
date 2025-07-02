import { Text, View, ScrollView } from "react-native";
import { useState, useRef, useEffect } from "react";
import { BackArrow } from '../components';
import { savingsGoals } from '@/constants/accountInfo';

const { target, current, reward } = savingsGoals;
const difference = target - current;
const percentage = Math.min(Math.round((current / target) * 100), 100);



export default function savings() {
  return (
   <View
      className="bg-white h-full flex gap-[0.1rem]"
    >
      <BackArrow />
      
      <View className="flex flex-row pt-[2.5rem] pb-[1rem] gap-[1.5rem] w-full pl-[2rem]">
        <Text className="text-[#5050c2] font-poppins text-[2.5rem] font-medium">Level Up</Text>
      </View>
      <ScrollView>
        <View className="flex gap-[2rem] pt-[1.5rem] pb-[4rem]">

          <View className="w-full flex justify-center items-center">
            <View className=" bg-[#5050c2] w-[90%] border-[3px] border-[#5050c2] flex gap-[1rem] py-[2rem] px-[2rem] rounded-[15px]">
              <View className="flex gap-[0.7rem]">
                <Text className="font-poppins text-[1.7rem] tracking-[0.1rem] text-white font-medium">
                  Savings Goals
                </Text>
                <Text className="font-poppins text-[1.3rem] text-white font-light">Reach your savings goals to level up your cover</Text>
              </View>

              <View className="justify-center items-center pt-[1.5rem]">
                <View className="w-[23rem] h-[20rem] rounded-[7px] overflow-hidden bg-white border-[3px] border-[#5050c2] relative border-[5px] border-white">
                            
                  <View className="absolute w-full h-full justify-center items-center z-10">
                    <Text className="text-[6rem] text-[#5050c2] font-bold">${difference}</Text>
                  </View>
              

                  <View
                   className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden items-center"
                   style={{ height: `${percentage}%`, backgroundColor: '#5050c2' }}
                  >
                    <View className="absolute bottom-[5.9rem] w-full h-[8rem] justify-center items-center">
                      <Text className="text-[6rem] text-white font-bold">${difference}</Text>
                    </View>
                  </View>
                 </View>
              </View>
            </View>
          </View>
          <View className="w-full flex justify-center items-center">
            <View className=" bg-[#5050c2] w-[90%] border-[3px] border-[#5050c2] flex gap-[1rem] py-[2rem] px-[2rem] rounded-[15px]">
              <View className="flex gap-[0.7rem]">
                <Text className="font-poppins text-[1.7rem] tracking-[0.1rem] text-white font-medium">
                  Rewards
                </Text>
                <Text className="font-poppins text-[1.3rem] text-white font-light">{ reward }</Text>
              </View>
            </View>
          </View>
        </View>
        
      </ScrollView>
  </View>
  )
}