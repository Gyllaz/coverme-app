import { View, Text, Animated, Easing, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useRef } from 'react';
import { Logo, PayWave, MastercardSVG } from '@/components';
import { banking } from '@/constants/accountInfo';

const { cardNo } = banking;
const secureNo = cardNo.slice(-4)

export default function BankCard() {
  return (
    <View>
        <Animated.View
        className='w-full h-[18rem] bg-white rounded-l-[10px] rounded-br-[10px] rounded-tr-[70px] shadow-xl overflow-hidden'>
          <LinearGradient 
            colors={['#8AC3F9', '#E5EF68']}
            locations={[0, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{height: '100%'}}
          >
            <View className='flex flex-row gap-[0.7rem] w-full h-[9rem] pl-[2rem] pr-[1.5rem]'>
              <View className='flex justify-end'>
                <Text className='text-[2rem] text-white font-medium tracking-[0.2rem]'>•••• {secureNo}</Text>
              </View>
              <View className='flex flex-row gap-[1.3rem]'>
                <View className='w-[50%] flex flex-row justify-end '>
                  <MastercardSVG />
                </View>
                <View className='flex flex-row justify-start'>
                  <PayWave colour='white' />
                </View>

              </View>

            </View>
            <View className='flex gap-[0.5rem] w-full h-[8.5rem] pr-[2rem] justify-end '>
              <View className='flex flex-row justify-end'>
                {/* <Logo /> */}

              </View>
            </View>

          </LinearGradient>

       </Animated.View>
    </View>
  )
}