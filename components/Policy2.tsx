import { View, Text, ScrollView, Image, FlatList, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { myExtras } from '@/constants/accountInfo';

export default function Policy2() {

  function percentage (num1: number, num2: number) {
    const p = Math.round((num1/num2)*100);
    const stringP = String(p) + '%';
    return stringP;
  };

  type ItemProps = {title: string, total: number, remain: number, img: string};

  const Item = ({title, total, remain, img}: ItemProps) => (
    <View className='w-full h-[9rem] bg-[#F3F3F1] rounded-[1rem] py-[1.5rem] px-[1.5rem] flex flex-row justify-between items-center '>
      <View className='w-[60%] h-full flex flex-col justify-between'>
        <Text className='font-[BASKiT] text-[1.3rem]'>{title}</Text>
        <View className='flex flex-col gap-[0.5rem]'>
          <Text className='text-[1rem] font-[BASKiT-Light] '>{percentage(remain, total)} remaining
            <Text className='text-[1rem] font-[BASKiT-Light] text-[#918A8C]'> / ${remain} of ${total}</Text>
          </Text>
          <View className='w-full h-[1rem] rounded-full bg-white overflow-hidden'>
            <LinearGradient 
              colors={['#8AC3F9', '#E5EF68']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{height: '100%',
              width: percentage(remain, total)}}
            />

          </View>
        </View>
      </View>
      <View className='h-[full] w-[30%] flex flex-row justify-center items-center'>
        <Image source={img} className='w-[7rem] h-[7rem]' />
      </View>

    </View>
  );

  return (
    <View className="bg-white h-full">
      <ScrollView>
        <View className="w-full px-[2rem] pb-[7rem] flex flex-col gap-[1.5rem]">
          <View>
            <View className="pt-[4rem] pb-[1rem]">
              <View className='flex flex-row w-full h-fit pt-[1rem] pb-[1rem]'>
                <Text className="font-[BASKiT-Medium] text-[#231F20]  text-[1.7rem]">
                  My extras
                </Text>

              </View>
            </View>
            <View>
                <FlatList 
                  data={myExtras}
                  renderItem={({ item }) => <Item title={item.title} img={item.img} total={item.total} remain={item.remain} />}
                  keyExtractor={(item) => item.id}
                  contentContainerClassName="flex gap-[1rem]"
                />
            </View>

          </View>
          <View className="w-full h-[12rem] bg-[#105E49] rounded-[1rem] overflow-hidden">
            <View className="w-full h-full px-[1.5rem] py-[1rem] flex flex-row justify-between">
              <View className={`flex gap-[1rem] ${Platform.OS === 'ios' ? 'pt-[0.5rem]' : ''} w-[60%]`}>
                <Text className="text-[1.5rem] font-[BASKiT-Medium] text-white">Want more extras?</Text>
                <Text className="font-[BASKiT-Light] text-white">
                  View all our optional extras and
                  find the best fit for you.
                </Text>
                <TouchableOpacity 
                  className="h-[2.5rem] w-[7rem] bg-[#ECF86E] rounded-[1rem] flex justify-center items-center"
                >
                  <Text className="text-[1.1rem]">Take a look</Text>
                </TouchableOpacity>
              </View>
              <Image source={require("@/assets/images/Bone.png")} className="w-[35%] h-[9rem]"/>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}