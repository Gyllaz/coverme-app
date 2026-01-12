import { BackArrow, GoogleWalletSVG } from '@/components'
import React from 'react'
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { cardPoints } from '@/constants/accountInfo'
import { useRouter } from "expo-router";
import { useAppContext } from "@/context/AppContext";
import { InteractionManager, Platform } from 'react-native'


export default function card() {

  const {isCard, setIsCard} = useAppContext();
  const router = useRouter();
  const handlePress = () => {
    router.replace("/brighterDays");
    InteractionManager.runAfterInteractions(() => {
      setIsCard(true);
    });
  };

  type ItemProps = {Stamp: React.ComponentType<any>, header: string, body: string}

  const Item = ({Stamp, header, body}: ItemProps) => (
    <View className='w-[full] h-fit flex flex-row gap-[1rem]'>
      <View className='w-[4rem] h-[4rem] rounded-[1rem] bg-white flex justify-center items-center'>
        <Stamp />
      </View>
      <View className='w-[75%] flex justify-center gap-[0.3rem]'>
        <Text className='font-[BASKiT-Medium] text-[1.2rem]'>{ header }</Text>
        <Text className='font-[BASKiT-Light]'>{ body }</Text>
      </View>
    </View>
  )

  return (
    <View className='w-full h-full flex justify-center items-center'>
      <LinearGradient
        colors={['#FFFFFF', '#8AC3F9']}
        start={{ x: 0, y: 0.3 }}
        end={{ x: 0, y: 0.5 }}
        style={{height: '100%',
          width: '100%'
        }}
      >
        <View className='w-full pt-[17%]'>
          <BackArrow />
        </View>
        <View className='w-full pt-[3rem] flex flex-col justify-center items-center gap-[1rem]'>
          <View className='overflow-hidden rounded-[1rem]'>
            <Image source={require('@/assets/images/card4.png')} className='w-[26rem] h-[16rem]'/>
          </View>
        </View>
        <View className='w-full mt-[10%] flex flex-col justify-center items-center px-[2rem]'>
          <FlatList
            data={cardPoints}
            renderItem={({ item }) => <Item Stamp={item.Stamp} header={item.header} body={item.body} />}
            keyExtractor={(item) => item.id}
            contentContainerClassName='gap-[1.3rem] '
          />
        </View>
        <View className='w-full h-fit flex justify-center items-center'>
          { Platform.OS === 'ios' ? 
          
            <TouchableOpacity className='w-[85%] h-[3.5rem] bg-[#212121] mt-[10%] rounded-[1rem] flex justify-center items-center'
            onPress={handlePress}
            >
              <Image source={require('@/assets/images/applepay.png')} className='h-[2rem] w-[13rem]'/>
            </TouchableOpacity>
            :
            <View className='w-[85%] h-[3.5rem] bg-[#1F1F1F] mt-[10%] rounded-[1rem]'>
              <TouchableOpacity className='w-full h-full bg-[#1F1F1F] rounded-[1rem] flex justify-center items-center'
              onPress={handlePress}
              >
                <GoogleWalletSVG/>
              </TouchableOpacity>
              
            </View> 
        }

        </View>
      </LinearGradient>
    </View>
  )
}