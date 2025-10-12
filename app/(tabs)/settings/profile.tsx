import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { NarrowSVG, NewBackArrow } from '@/components'
import { account } from '@/constants/accountInfo'

const { userId, firstname, lastname, email, phone, address } = account;

export default function profile() {

  const router = useRouter();

  return (
    <View className="bg-white h-full flex gap-[0.1rem] pt-[10%]">
      <TouchableOpacity onPress={() => router.push('/(tabs)/settings')}>
        <NewBackArrow />    
      </TouchableOpacity>
      
      <View className="flex flex-row pt-[2.5rem] gap-[1.5rem] w-full pl-[15%]">
        <Text className="text-[#105E49] font-poppins text-[2rem] font-medium">Profile</Text>
      </View>

      <View className="flex gap-[1.5rem] pt-[2.5rem]">
        <View className=" w-full flex justify-center items-center">
          <View className="bg-white w-[90%] border-[3px] border-white flex gap-[1rem] py-[2rem] px-[2rem] rounded-[15px]"
              style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.38,
                shadowRadius: 16,
                elevation: 10, // Android
              }}
          >
            <View className="flex flex-row">
              <TouchableOpacity className='flex flex-col  items-center mr-[2.5rem]'>
                <View className='w-[5rem] h-[5rem] rounded-full bg-[#4B91A1] flex fex-row justify-center items-center mb-[1rem]'>
                  <Text className='text-[2.3rem] text-white'>{firstname[0]}</Text>
                </View>
                <Text className='text-[1.3rem] text-[#1E1E1E]'>Profile</Text>
                <Text className='text-[1.3rem] text-[#1E1E1E]'>Photo</Text>
              </TouchableOpacity>

              <View className='flex flex-col gap-[2rem] pr-[4rem]'>
                <View className='flex flex-col gap-[0.5rem]'>
                  <Text className='text-[1.2rem] font-light text-[#105E49]'>Name</Text>
                  <TouchableOpacity className='flex flex-row gap-[1.5rem]'>
                    <Text className='text-[1.2rem] text-[#1E1E1E] font-semibold'>{firstname} {lastname}</Text>
                    <View className='pt-[0.2rem]'>
                      <NarrowSVG/>
                    </View>
                  </TouchableOpacity>
                </View>
                <View className='flex flex-col gap-[0.5rem]'>
                  <Text className='text-[1.2rem] font-light text-[#105E49]'>Username</Text>
                  <TouchableOpacity className='flex flex-row gap-[1.5rem]'>
                    <Text className='text-[1.2rem] text-[#1E1E1E] font-semibold'>{userId}</Text>
                  </TouchableOpacity>
                </View>
                <View className='flex flex-col gap-[0.5rem]'>
                  <Text className='text-[1.2rem] font-light text-[#105E49]'>Email</Text>
                  <TouchableOpacity className='flex flex-row gap-[1.5rem]'>
                    <Text className='text-[1.2rem] text-[#1E1E1E] font-semibold'>{email}</Text>
                    <View className='pt-[0.2rem]'>
                      <NarrowSVG/>
                    </View>
                  </TouchableOpacity>
                </View>
                <View className='flex flex-col gap-[0.5rem]'>
                  <Text className='text-[1.2rem] font-light text-[#105E49]'>Phone</Text>
                  <TouchableOpacity className='flex flex-row gap-[1.5rem]'>
                    <Text className='text-[1.2rem] text-[#1E1E1E] font-semibold'>{phone}</Text>
                    <View className='pt-[0.2rem]'>
                      <NarrowSVG/>
                    </View>
                  </TouchableOpacity>
                </View>
                <View className='flex flex-col gap-[0.5rem]'>
                  <Text className='text-[1.2rem] font-light text-[#105E49]'>Address</Text>
                  <TouchableOpacity className='flex flex-row gap-[1.5rem]'>
                    <Text className='text-[1.2rem] text-[#1E1E1E] font-semibold'>{address}</Text>
                    <View className='pt-[0.2rem]'>
                      <NarrowSVG/>
                    </View>
                  </TouchableOpacity>
                </View>

              </View>

            </View>
          </View>
        </View>


      </View>
    </View>
  )
}