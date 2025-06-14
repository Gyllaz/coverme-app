import { Text, View, Image } from "react-native";
import { Link } from 'expo-router';
import { Svg, Path, Rect } from 'react-native-svg';
import { ClaimButton, TopUp, ThisMonth, Benefits, LevelUp } from "../components";

const name = "Poluk"
const ammount = 12345
const latestTransaction: ['Deposit' | 'Expense', number] = ['Expense', 135];
const [type, transaction]= latestTransaction;

export default function Index() {
  return (
    <View
      className="bg-white h-full flex"
    >
      <View className="mt-12 pl-10 flex flex-row">
        <Text className="font-poppins font-semibold text-4xl text-[#5050c2]">Hi {name}</Text>
        <Image source={require('../assets/images/CoverMe.png')} className="w-9 h-9 ml-3"></Image>
      </View>

      <View className="mt-[3rem] pl-10">
        <Text className="text-3xl text-[#1E1E1E]">Your Health Savings</Text>
        <Text className={`pt-7 ${ammount > 99999 ? "text-7xl" : "text-8xl" } text-[#55C47C]`}>${ammount.toLocaleString()}</Text>
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
          <View className="min-w-44 h-[8rem] rounded-[7px] border-[3px] border-[#5050c2]"></View>

        </View>

      </View>


    </View>
  );
}
