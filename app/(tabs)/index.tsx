import { Text, View, Image, TouchableOpacity } from "react-native";
import { MiniArrow, EnterArrow, ScanSVG } from "@/components";
import { account, banking } from "@/constants/accountInfo";
import AiAnimation from "@/scripts/TypeAnimation"

const { firstname } = account;
const { currentBalance } = banking;



export default function Index() {
  return (
    <View
      className="bg-white h-full flex pt-[17%]"
    >
      <View className="mt-12 pl-10 flex flex-row">
        <Text className="font-poppins font-semibold text-4xl text-[#5050c2]">Hi {firstname}</Text>
        <Image source={require('@/assets/images/CoverMe.png')} className="w-9 h-9 ml-3"></Image>
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

      <View className="mt-[4rem] flex align-content gap-[2rem] px-7 ">
        <TouchableOpacity>
          <View className="w-full rounded-full h-[5rem] bg-[#A5A5E5] flex flex-row justify-between">
            <View className="flex flex-row justify-center self-center ml-[1.5rem]">
              <AiAnimation />
            </View>
            <View className="w-[4.6rem] h-[90%] flex flex-row justify-center rounded-full bg-white self-center mr-[0.3rem]">
              <View className="">
                <EnterArrow/>

              </View>
            </View>
          </View>

        </TouchableOpacity>

        <View className="w-full h-fit rounded-[1.5rem] bg-white flex gap-[1.3rem] px-[1rem] py-[1rem]"
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.38,
            shadowRadius: 16,
            elevation: 10, // Android
          }}
        >
          <Text className="text-[1.7rem] px-[1rem] font-light text-[#5050c2]">Need to claim a receipt? take a photo and we’ll process it.</Text>

          <TouchableOpacity className="w-full h-[4rem] bg-[#5050c2] rounded-[1rem] flex flex-row justify-center gap-[0.7rem]">
            <View className="self-center">
              <ScanSVG/>
            </View>

            <Text className="self-center text-white text-[1.3rem]">Claim a receipt</Text>
          </TouchableOpacity>
        </View>


      </View>



    </View>
  );
}
