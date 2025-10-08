import { Text, View, TextInput, ScrollView } from "react-native";
import { useState, useMemo } from "react";
import { BlurView } from "expo-blur";


export default function Transactions2() {
  

  return (
    <View className="bg-white h-full">
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 96,
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
          className='pt-[3rem] h-fit pb-[1rem]'
        >
          <Text className='text-[#5050c2] pb-[3rem] pt-[1.5rem] pl-[2rem] text-[2.5rem]'>Level Up</Text>

        </BlurView>
      </View>

      <View>

      </View>
    </View>
  );
}
