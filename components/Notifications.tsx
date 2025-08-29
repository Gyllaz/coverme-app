import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { notificationAlerts } from '@/constants/accountInfo'
import { LinearGradient } from 'expo-linear-gradient';

export default function Notifications() {
  return (
    <View className='w-full h-fit flex items-center pt-[5%]'>
      {notificationAlerts.map((notif, index) => (
        <TouchableOpacity key={index} className='w-[90%] h-fit p-[1rem] mt-[1rem] bg-white rounded-[20px] flex flex-row gap-[1rem]'>
          <View className='flex justify-center items-center pl-[0.3rem]'>
            <Text className='text-[2.3rem]'>{notif.emoji}</Text>
          </View>

          <View>
            <Text className='text-[1.3rem] font-semibold pb-[0.3rem]'>{notif.header}</Text>
            <View className='flex w-[22.5rem] p-[0]'>
              <View className='z-10 w-[90%]'> 
                <LinearGradient
                  colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  locations={[0, 0.9]}
                  style={{ height: 17}}
                >
                </LinearGradient>

              </View>

              <View className='absolute w-full z-0'> 
                <Text className='w-[90%]'>{notif.subheading}</Text>
              
              </View>
            </View>
          </ View>
        </ TouchableOpacity>
      ))}
    </View>
  )
}