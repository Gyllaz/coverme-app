import { Text, View, TouchableOpacity, Image, ScrollView, FlatList } from "react-native";
import { useState, useMemo } from "react";
import { Platform } from "react-native";
import { levelUp } from "@/constants/accountInfo";
import { LinearGradient } from 'expo-linear-gradient';
import { offers } from "@/constants/accountInfo";


export default function Transactions2() {

  const percentage = (levelUp.current / levelUp.target)*100
  const widthPercent = String(percentage) + '%'
  
  type ItemProps = {isNew: boolean, img: string, title: string}


  const Item = ({isNew, img, title}: ItemProps ) => (
    <TouchableOpacity  className="w-[12rem] h-[18rem] mr-[1rem] flex rounded-[1rem] overflow-hidden"
      delayPressIn={50}
    >
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
    <View className="bg-white h-full">
      <ScrollView className="h-fit">
        <View className="w-full px-[2rem] pb-[7rem] flex flex-col gap-[1rem]">
          <View className="pt-[4rem]">
            {/* Header */}
            <View className='flex flex-row w-full h-fit pt-[1rem]'>
              <Text className="font-[BASKiT-Medium] text-[#231F20]  text-[1.7rem]">
                Level Up
              </Text>

            </View>

          </View>


          {/* Body */}
          <View className="w-fit h-[20rem] flex flex-col justify-between bg-sun-100 px-[1.5rem] pt-[1rem] pb-[2rem] rounded-[1rem]">
            <View className="w-full flex flex-col gap-[0.5rem]">
              <Text className="font-[BASKiT] text-[1.2rem]">
                {levelUp.level}
              </Text>
              <Text className="font-[BASKiT-Medium] text-[1.7rem]">
                You're {percentage}% away {'\n'}from levelling up
              </Text>
              <Text className="font-[BASKiT] text-[1rem]">Save ${levelUp.target} to unlock add-ons to your cover</Text>
            </View>

            <View className="w-full h-[1.5rem] bg-white rounded-full flex flex-row overflow-hidden">
              <View className={`bg-[#105E49] h-full rounded-full]`}
                style={{
                  width: widthPercent,
                }}
              >

              </View>

            </View>
          </View>
          <View className="w-full h-[14rem] bg-[#105E49] rounded-[1rem] overflow-hidden">
            <View className="w-full h-full px-[1.5rem] py-[1rem] flex flex-row">
              <View className={`flex gap-[0.5rem] ${Platform.OS === 'ios' ? 'pt-[0.5rem]' : ''} w-[50%]`}>
                <Text className="text-[1.5rem] font-[BASKiT-Medium] text-white">Level Up Faster</Text>
                <Text className="font-[BASKiT-Light] text-white">Commit to saving an extra
                  $10 every week and unlock
                  pharmacy cover for free
                </Text>
                <TouchableOpacity 
                  className="h-[2.5rem] w-[7rem] bg-[#ECF86E] mt-[1rem] rounded-[1rem] flex justify-center items-center"
                >
                  <Text className="text-[1.1rem]">Lets do it</Text>
                </TouchableOpacity>
              </View>
              <Image source={require("@/assets/images/Rabbit.png")} className="w-[55%] h-[11.5rem]"/>
            </View>
          </View>
          <View className="flex w-full align-content gap-[1rem] pt-[1rem]">
            <Text className="text-[1.5rem] font-[BASKiT]">Current offers</Text>
            <ScrollView 
              horizontal={true} 
              nestedScrollEnabled={true}
              className="">
              <FlatList 
                data={offers}
                renderItem={({ item }) => <Item isNew={item.isNew} img={item.img} title={item.title} />}
                keyExtractor={(item) => item.id}
                horizontal={false}
                nestedScrollEnabled={true}
                showsHorizontalScrollIndicator={false}
                removeClippedSubviews={false}
                shouldRasterizeIOS={true}
                numColumns={3}
                onStartShouldSetResponder={() => true}
                contentContainerClassName="flex flex-row gap-[1rem] rounded-[1rem] pr-[1rem]"
              />

            </ScrollView>
          </View>

        </View>
      </ScrollView>
    </View>
  );
}
