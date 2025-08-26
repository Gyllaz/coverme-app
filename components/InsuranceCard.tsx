import { View, Text, Animated, Easing, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useRef } from 'react';
import { Logo, PayWave } from '@/components';
import { policyInfo } from '@/constants/accountInfo';


const { policyPerson, memberNo, startYear } = policyInfo;


function InsuranceCard () {
  return (
    <View>
      <Animated.View
        className='w-full h-[18rem] bg-white rounded-l-[10px] rounded-br-[10px] rounded-tr-[70px] shadow-xl overflow-hidden'>
          <LinearGradient 
            colors={['#F50000', '#FF7A00', '#E4E4F7']}
            locations={[0, 0.5, 1]}
            start={{ x: 0.2, y: 0.7 }}
            end={{ x: 1, y: 0 }}
            style={{height: '100%'}}
          >
            <View className='flex flex-row gap-[3rem] w-full h-[7rem] pl-[2rem] pr-[1.5rem]'>
              <View className='flex justify-end'>
                {policyPerson.map((item) => (
                  <Text key={item} className='text-[1rem] text-white'>0{policyPerson.indexOf(item)} {item}</Text>
                ))}
              </View>
              <View className='flex flex-row gap-[1rem]'>
                <View className='w-[50%] flex flex-row justify-end pt-[2.4rem]'>
                  <Image source={require('@/assets/images/medibank.png')} className="w-full h-9"></Image>
                </View>
                <View className='flex flex-row justify-start'>
                  <PayWave colour = 'white' />
                </View>

              </View>

            </View>
            <View className='flex gap-[0.5rem] w-full h-[8.5rem] pl-[2rem] justify-end '>
                <Text className='text-[1rem] text-white'>Membership Number:</Text>
                <Text className='text-[2rem] text-white font-medium tracking-[0.3rem]'>{memberNo}</Text>
                <Text className='text-[1rem] text-white'>Member Since: {startYear}</Text>
            </View>

          </LinearGradient>

       </Animated.View>
    </View>
  )
};


export default InsuranceCard