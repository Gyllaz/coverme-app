// policy.tsx
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { MonthlyPay, Benefits, DocSVG, Details } from '@/components';


// Height of your glass header (adjust as needed)
const HEADER_H = 96;

export default function Policy() {
  return (
    <View className="bg-white h-full">
      {/* Glass header OVERLAY */}
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: HEADER_H,
          zIndex: 10,
          // Android elevation for overlay ordering
          elevation: 10,
        }}
        pointerEvents="box-none"
        className='h-[10rem]'
      >
        <BlurView
          intensity={30}            // 0–100 (higher = stronger blur)
          tint="light"              // 'light' | 'dark' | 'default'
          style={{
            backgroundColor: 'rgba(255,255,255,0.15)',
            borderBottomWidth: 1,
            borderColor: 'rgba(255,255,255,0.35)',
          }}
          className='pt-[3rem] pb-[1rem]'
        >
          <Text className='text-[#5050c2] pb-[3rem] pt-[1.5rem] pl-[2rem] text-[2.5rem]'>Your Policy</Text>

        </BlurView>
      </View>

      {/* Content scrolls UNDER the glass header */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 32 }}
        // Push content down so it doesn't render under the header initially
        className='py-[35%] '
      >
        {/* Cards */}
        <View className="gap-[24px] px-[16px] pt-[16px]">
          {/* Monthly Payments */}
          <MonthlyPay />

          {/* Benefits */}
          <Benefits/>


          <Details />

        </View>
      </ScrollView>
    </View>
  );
}
