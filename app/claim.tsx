import { View, Text, Animated, Easing } from 'react-native';
import { useEffect, useRef } from 'react';
import { BackArrow, Logo } from '@/components'
import { policyInfo } from '@/constants/accountInfo'

const { policyPerson, memberNo, startYear } = policyInfo;

export default function claim() {

  const floatAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(floatAnim, {
            toValue: -50,
            duration: 1000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(floatAnim, {
            toValue: 0,
            duration: 1000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ])
      ).start();
    }, []);


  return (
    <View className="bg-white h-full flex gap-[0.1rem]">
      <BackArrow />
      <View id='insurance-card' className='flex pt-[7rem] justify-center items-center'>
        <Animated.View
        className='w-[90%] h-[17rem] bg-[#E4E4F7] rounded-[10px]'
        style={{
          transform: [{ translateY: floatAnim }],
        }}>
          <View className='flex flex-row gap-[4rem] w-full h-[7rem] pl-[2rem] pr-[1.5rem]'>
            <View className='flex justify-end'>
              {policyPerson.map((item) => (
                <Text key={item} className='text-[1rem] text-[#5050C2]'>0{policyPerson.indexOf(item)} {item}</Text>
              ))}
            </View>
            <Logo />
          </View>
          <View className='flex gap-[0.5rem] w-full h-[8.5rem] pl-[2rem] justify-end '>
              <Text className='text-[1rem] text-[#5050C2]'>Membership Number:</Text>
              <Text className='text-[2rem] text-[#5050C2] font-medium tracking-[0.3rem]'>{memberNo}</Text>
              <Text className='text-[1rem] text-[#5050C2]'>Member Since: {startYear}</Text>
          </View>

        </Animated.View>
        <View className='pt-[5rem]'>
          <Text className='text-[1.5rem]'>Hold Near Reader</Text>
        </View>
      </View>
    </View>
  )
}