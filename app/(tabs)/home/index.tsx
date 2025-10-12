import { Text, View, TouchableOpacity } from "react-native";
import { MiniArrow, ScanSVG, PullUpDrawer, NotificationSVG, CloseSVG, Notifications } from "@/components";
import { account, banking } from "@/constants/accountInfo";
import { useState } from "react";
import Animated, { FadeIn, FadeOut, Easing } from "react-native-reanimated";
import { useRouter } from 'expo-router';

const { firstname } = account;
const { currentBalance } = banking;





export default function Index() {

  const router = useRouter();

  const [active, setActive] = useState(false);

  return (
    <View
      className={`bg-white h-full flex`}
    >
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


      <View className='bg-white h-full w-full pt-[17%]'>
        <PullUpDrawer>
          <View className="flex flex-row justify-end pr-[2rem]">
            <TouchableOpacity onPress={() => setActive(true)}>
              <NotificationSVG/>
            </TouchableOpacity>
          </View>
          <View className="mt- pl-10 flex flex-row">
            <Text className="font-poppins font-semibold text-[3rem] text-[#105E49]">Hi {firstname}</Text>
          </View>

          <View className="mt-[2rem] pl-10">
            <Text className="text-3xl text-[#1E1E1E]">Your Rainy Day Fund</Text>
            <Text className={`pt-7 ${currentBalance > 99999 ? "text-7xl" : "text-8xl" } text-[#8AC3F9]`}>${currentBalance.toLocaleString()}</Text>
            <TouchableOpacity 
            onPress={() => router.push('/home/info')}
            className="mt-[0.7rem] ml-[0.7rem] max-w-[50%] flex flex-row gap-[1rem] border-b-[2px] border-[#105E49]">
              <Text className="text-xl font-medium w-fit text-[#1E1E1E]">Account Information</Text>
              <View className="h-[30px] w-fit pb-[0.4rem] flex justify-center align-content">
                <MiniArrow/>

              </View>
            </TouchableOpacity>
          </View>

          <View className="mt-[3rem] flex align-content gap-[2rem] px-7 ">

            <View className="w-full h-fit rounded-[1.5rem] bg-white flex gap-[1.3rem] px-[1rem] py-[1rem]"
              style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.38,
                shadowRadius: 16,
                elevation: 10, // Android
              }}
            >
              <Text className="text-[1.7rem] px-[1rem] font-light text-[#1E1E1E]">Need to claim a receipt? take a photo and we’ll process it.</Text>

              <TouchableOpacity className="w-full h-[4rem] bg-[#E5EF68] rounded-[1rem] flex flex-row justify-center gap-[0.7rem]">
                <View className="self-center">
                  <ScanSVG/>
                </View>

                <Text className="self-center text-[#1E1E1E] text-[1.3rem]">Claim a receipt</Text>
              </TouchableOpacity>
            </View>


          </View>

        </PullUpDrawer>
      </View>

    </View>
  );
}
