import { Text, View, TouchableOpacity, Image, ScrollView, FlatList } from "react-native";
import { WideSVG, ScanSVG, NotificationSVG } from "@/components";
import { account, banking, offers } from "@/constants/accountInfo";
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { useAppContext } from "@/context/AppContext";

const { firstname } = account;
const { currentBalance } = banking;

export default function Index() {


  const {isCard, setIsCard} = useAppContext();
  const router = useRouter();
  type ItemProps = {isNew: boolean, img: string, title: string}


  const Item = ({isNew, img, title}: ItemProps ) => (
    <TouchableOpacity  className="w-[12rem] h-[18rem] flex rounded-[1rem] overflow-hidden">
      <LinearGradient
        colors={ isNew ? ['#8AC3F9', '#E5EF68'] : ['#FFFFFF', '#F3F3F1']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{height: '100%',
          width: '100%'}}
      >
        <View className="flex flex-col justify-center gap-[1rem] items-center pt-[2rem] px-[1rem]">
          <View className={`w-full hit-fit absolute top-3 ${isNew ? '' : 'invisible'}`}>
            <View className=" w-fit p-[0.5rem] bg-white rounded-[1rem] absolute">
              <Text className="font-[BASKiT-Light]">New</Text>

            </View>
          </View>
          {/* This isnt a real error, the build still works fine */}
          <Image source={img} className="w-[9rem] h-[9rem]"/>
          <View>
            <Text className="font-[BASKiT] text-center text-[1.2rem]">{title}</Text>
            <Text className="font-[BASKiT-Light] text-center pt-[0.5rem]">See T&Cs</Text>

          </View>

        </View>
      </LinearGradient>

    </TouchableOpacity>
  );

  return (
    <View className={`bg-[#F3F3F1] h-full flex`}>

      <ScrollView className='bg-white h-full w-full mt-[13%] pt-[4%] pb-[5rem] rounded-t-[1rem]'>
        <View className="flex flex-row justify-end pr-[2rem]">
          <TouchableOpacity onPress={() => router.push('/notifications')}>
            <NotificationSVG/>
          </TouchableOpacity>
        </View>
        
        <View className="mt- pl-10 flex flex-row">
          <Text className="font-[BASKiT-Medium] text-[4rem] text-black">Hi {firstname}</Text>
        </View>

        <View className="w-fit h-[15rem] flex flex-col justify-between bg-sun-100 mt-[2rem] mx-[2rem] px-[1.5rem] py-[1rem] rounded-[1rem]">
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
        <View className={`mt-[2rem] ${isCard ? 'hidden' : ''} flex align-content gap-[1rem] px-7 `}>
          <Text className="text-[1.5rem] font-[BASKiT]">Current tasks</Text>
          <View className="w-fit h-[13rem] rounded-[1rem] overflow-hidden">
            <LinearGradient
              colors={["#E5EF68", "#8AC3F9"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={{height: '100%'}}
            >
            <View className="w-full h-full px-[1.5rem] py-[1.5rem] flex flex-row">
              <View className="flex gap-[0.5rem] w-[50%]">
                <Text className="text-[1.5rem] font-[BASKiT-Medium]">Add CoverMe To Apply Wallet</Text>
                <Text className="font-[BASKiT-Light]">Get access to your cover anywhere, anytime</Text>
                <TouchableOpacity 
                  onPress={() => router.push('/card')}
                  className="h-[2.5rem] w-[7rem] bg-white mt-[1rem] rounded-[1rem] flex justify-center items-center"
                >
                  <Text className="text-[1.1rem]">Lets do it</Text>
                </TouchableOpacity>
              </View>
              <Image source={require("@/assets/images/Card1.png")} className="w-[55%] h-[10.5rem]"/>
            </View>
            </LinearGradient>

          </View>

        </View>

        <View className="mt-[2rem] mb-[5rem] flex align-content gap-[1rem] px-7 ">
          <Text className="text-[1.5rem] font-[BASKiT]">Current offers</Text>
          <View className="w-fit h-fit flex flex-row gap-[1rem]">
            <FlatList 
              data={offers}
              renderItem={({ item }) => <Item isNew={item.isNew} img={item.img} title={item.title} />}
              keyExtractor={(item) => item.id}
              horizontal={true}
              contentContainerClassName="gap-[1rem] rounded-[1rem]"
            />

          </View>

        </View>

      </ScrollView>
    </View>
  );
}
