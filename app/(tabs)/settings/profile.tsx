import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { NarrowSVG, NewBackArrow, CloseSVG } from '@/components'
import { account } from '@/constants/accountInfo'

const { userId, firstname, lastname, email, phone, address } = account;

export default function profile() {

  const router = useRouter();

  return (
    <View className={`bg-[#F3F3F1] h-full flex`}>
      <View className='bg-white flex flex-col gap-[1rem] h-full w-full mt-[15%] px-[2rem] pt-[4%] pb-[5rem] rounded-t-[1rem]'>
        <TouchableOpacity className='w-full flex flex-row justify-end'
          onPress={() => router.push('/(tabs)/settings')}
        >
          <CloseSVG  colour='black'/>
        </TouchableOpacity>
        <View className='flex flex-row w-full h-fit pt-[1rem] pb-[1rem]'>
          <Text className="font-[BASKiT-Medium] text-[#231F20]  text-[1.7rem]">
            My profile
          </Text>
        </View>

        <View className="w-fit h-[15rem] flex flex-col justify-between bg-sun-100 px-[1.5rem] pt-[1rem] pb-[2rem] rounded-[1rem]">
          <View className="w-full flex flex-col gap-[0.5rem] pt-[1rem]">
            <Text className="font-[BASKiT-Medium] text-[1.8rem]">
              {firstname} {lastname}
            </Text>
             <TouchableOpacity>
              <Text className='font-[BASKiT] underline underline-offset-8'>View Profile</Text>
              </TouchableOpacity>
          </View>
        </View>
        <View className='w-full mt-[2rem] flex flex-col gap-[2rem] border-b-[1px] border-b-[#F3F3F1] pb-[1rem]'>
          <View>
            <Text className='font-[BASKiT-Medium] text-[1.3rem] border-b-[1px] border-b-[#F3F3F1] pb-[1rem]'>Details</Text>
            <View className='w-full flex flex-col gap-[0.5rem] pt-[1rem] px-[0.5rem]'>
              <View className='w-full flex flex-row justify-between '>
                <Text className='font-[BASKiT] text-[1.1rem]'>Name</Text>
                <Text className='font-[BASKiT-Light] text-[1.1rem] text-[#231F20]'>{firstname} {lastname}</Text>
              </View>
              <View className='w-full flex flex-row justify-between '>
                 <Text className='font-[BASKiT] text-[1.1rem]'>Username</Text>
                 <Text className='font-[BASKiT-Light] text-[1.1rem] text-[#231F20]'>{userId}</Text>
              </View>
              <View className='w-full flex flex-row justify-between '>
                <Text className='font-[BASKiT] text-[1.1rem]'>Email</Text>
                <Text className='font-[BASKiT-Light] text-[1.1rem] text-[#231F20]'>{email}</Text>
              </View>
              <View className='w-full flex flex-row justify-between '>
                <Text className='font-[BASKiT] text-[1.1rem]'>Phone</Text>
                <Text className='font-[BASKiT-Light] text-[1.1rem] text-[#231F20]'>{phone}</Text>
              </View>
              <View className='w-full flex flex-row justify-between '>
                <Text className='font-[BASKiT] text-[1.1rem]'>Address</Text>
                <Text className='font-[BASKiT-Light] text-[1.1rem] text-[#231F20]'>{address}</Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity>
          <Text className='font-[BASKiT] text-[1.1rem] underline underline-offset-8'>Update information</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}