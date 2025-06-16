import { Text, View, Image } from "react-native";
import { Link } from 'expo-router';
import { Svg, Path, Rect } from 'react-native-svg';
import { ClaimButton, TopUp, ThisMonth, Benefits, LevelUp, Growth } from "../components";
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

      <View className="mt-[3rem] pl-10">
        <Text className="text-3xl text-[#1E1E1E]">Your Health Savings</Text>
        <Text className={`pt-7 ${currentBalance > 99999 ? "text-7xl" : "text-8xl" } text-[#55C47C]`}>${currentBalance.toLocaleString()}</Text>
      </View>

      <View className="mt-[4rem] flex flex-row align-content justify-between px-14 ">
        <View className="flex gap-4">

          <ClaimButton/>

          <ThisMonth />

          <LevelUp />

        </View>
        <View className="flex gap-4">

          
          <TopUp/>
          
          <Benefits/>
          
          <Growth/>

        </View>

      </View>


    </View>
  );
}
