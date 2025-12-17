import { Text, View, TouchableOpacity } from "react-native";
import { WideSVG, ScanSVG, PullUpDrawer, NotificationSVG, CloseSVG, Notifications } from "@/components";
import { account, banking } from "@/constants/accountInfo";
import { useState } from "react";
import Animated, { FadeIn, FadeOut, Easing } from "react-native-reanimated";
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const { firstname } = account;
const { currentBalance } = banking;

export default function Index() {
  const router = useRouter();
  const [active, setActive] = useState(false);

  return (
    <View className={`bg-[#F3F3F1] h-full flex`}>
      {active && (
        <Animated.View
          entering={FadeIn.duration(500).easing(Easing.out(Easing.cubic))}
          exiting={FadeOut.duration(500)}
          className="z-20 w-full h-full bg-[#105E49] pt-[17%]"
        >
          <View className="flex flex-row justify-end pr-[2rem]">
            <TouchableOpacity onPress={() => setActive(false)}>
              <CloseSVG />
            </TouchableOpacity>
          </View>
          <Notifications/>
        </Animated.View>
      )}

      <View className='bg-white h-full w-full mt-[13%] pt-[4%] rounded-t-[1rem]'>
        <View className="flex flex-row justify-end pr-[2rem]">
          <TouchableOpacity onPress={() => setActive(true)}>
            <NotificationSVG/>
          </TouchableOpacity>
        </View>
        
        <View className="mt- pl-10 flex flex-row">
          <Text className="font-[BASKiT-medium] text-[4rem] text-black">Hi {firstname}</Text>
        </View>

        <View className="w-fit h-[27%] flex flex-col justify-between bg-sun-100 mt-[2rem] mx-[2rem] px-[1.5rem] py-[1rem] rounded-[1rem]">
          <View>
            <Text className="text-2xl text-black">Your Rainy Day Fund</Text>
            <TouchableOpacity 
              onPress={() => router.push('/home/info')}
              className="mt-[1rem] flex flex-row gap-[1rem]">
              <Text className="text-[1rem] font-[BASKiT] w-fit text-[#1E1E1E] border-b-[1px] border-black">View Account Information</Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row justify-end">
            <Text className={`pt-7 ${currentBalance > 99999 ? "text-5xl" : "text-6xl" } text-black font-[BASKiT]`}>${currentBalance.toLocaleString()}</Text>
          </View>
        </View>

        <View className="mt-[1rem] flex align-content gap-[2rem] px-7 ">
          <TouchableOpacity
            className="w-full h-fit px-[1rem] py-[1.3rem] bg-[#F3F3F1] rounded-[1rem] flex-row items-center justify-between">
            <View className="flex-row items-center gap-[0.75rem]">
              <ScanSVG />
              <View className="flex flex-col gap-[0.2rem]">
                <Text className="text-[1.3rem] font-[BASKiT] text-black ">
                  Make a claim
                </Text>
                <Text className="text-[1rem] font-[BASKiT-light] text-black">
                  Got a receipt? Snap a photo to process
                </Text>
              </View>
            </View>
            <WideSVG />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
