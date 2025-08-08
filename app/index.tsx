import { Text, View, Image, TouchableOpacity } from "react-native";
import { Link } from 'expo-router';
import { Svg, Path, Rect } from 'react-native-svg';
import { MiniArrow, EnterArrow } from "../components";
import { account, banking } from "@/constants/accountInfo";

const { firstname } = account;
const { currentBalance } = banking;



export default function Index() {
  return (
    <View
      className="bg-white h-full flex"
    >
      <View className="mt-12 pl-10 flex flex-row">
        <Text className="font-poppins font-semibold text-4xl text-[#5050c2]">Hi {firstname}</Text>
        <Image source={require('../assets/images/CoverMe.png')} className="w-9 h-9 ml-3"></Image>
      </View>

      <View className="mt-[2rem] pl-10">
        <Text className="text-3xl text-[#1E1E1E]">Your Health Savings</Text>
        <Text className={`pt-7 ${currentBalance > 99999 ? "text-7xl" : "text-8xl" } text-[#55C47C]`}>${currentBalance.toLocaleString()}</Text>
        <TouchableOpacity className="mt-[0.7rem] ml-[0.7rem] max-w-[50%] flex flex-row gap-[1rem] border-b-[2px] border-[#5050c2]">
          <Text className="text-xl font-medium w-fit">Account Information</Text>
          <View className="h-[30px] w-fit pb-[0.4rem] flex justify-center align-content">
            <MiniArrow/>

          </View>
        </TouchableOpacity>
      </View>

      <View className="mt-[4rem] flex align-content justify-between px-7 ">
        <TouchableOpacity>
          <View className="w-full rounded-full h-[5rem] bg-[#A5A5E5]  flex flex-row justify-end">
            <View className="w-[4.6rem] h-[90%] flex flex-row justify-center rounded-full bg-white self-center mr-[0.3rem]">
              <View className="">
                <EnterArrow/>

              </View>
            </View>
          </View>

        </TouchableOpacity>
      </View>


    </View>
  );
}
