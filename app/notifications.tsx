import { View, Text, TouchableOpacity } from 'react-native'
import { CloseSVG, Notifications } from '@/components'
import Animated, { FadeIn, FadeOut, Easing } from "react-native-reanimated";
import { useRouter } from 'expo-router';


export default function notifications() {

  const router = useRouter();

  return (
        <Animated.View
          entering={FadeIn.duration(500).easing(Easing.out(Easing.cubic))}
          exiting={FadeOut.duration(500)}
          className="z-20 w-full h-full bg-[#105E49] pt-[17%]"
        >
          <View className="flex flex-row justify-between pr-[2rem]">
            <Text className='text-[2rem] text-white font-[BASKiT-Medium] mt-[0.7rem] ml-[2rem]'>
              Notifications
            </Text>
            <TouchableOpacity
              onPress={() => router.push('/home')}
            >
              <CloseSVG />
            </TouchableOpacity>
          </View>
          <Notifications/>
        </Animated.View>
  )
}