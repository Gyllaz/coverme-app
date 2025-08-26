import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { InsuranceCard, BankCard } from '@/components';
import type { ReactNode } from 'react';

function PullUpDrawer ({children} : {children: ReactNode;}) {

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['3.5%', '60%', '100%'], []);

  const handleOpenPress = () => bottomSheetRef.current?.expand();

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      {children}
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        backgroundStyle={{backgroundColor: '#5050c2'}}
        handleIndicatorStyle={{backgroundColor: 'white'}}
      >
        <BottomSheetView style={styles.contentContainer}>
          <View className='pt-[10%] px-[5%]'>
            <Text className='text-white text-[2.3rem] font-light pl-[1rem]'>Cards</Text>

            <View className='flex pt-[5%]'>
              <Animated.View className='bg-white rounded-l-[10px] rounded-br-[10px] rounded-tr-[70px] mt-[2rem] z-[1]'
                style={{
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 8 },
                  shadowOpacity: 0.50,
                  shadowRadius: 30,
                  elevation: 10, // Android
                }}>
                <TouchableOpacity 
                className='pt-[]'
                onPress={handleOpenPress}
                >
                  <InsuranceCard/>
                </TouchableOpacity>

              </Animated.View>
              <Animated.View 
                className='bg-white rounded-l-[10px] rounded-br-[10px] rounded-tr-[70px] mt-[2rem] z-[3] relative top-[-15rem]'
                style={{
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 8 },
                  shadowOpacity: 0.50,
                  shadowRadius: 30,
                  elevation: 10, // Android
                }}
              >
                <TouchableOpacity
                className=''
                onPress={handleOpenPress}
                >
                  <BankCard />
                </TouchableOpacity>

              </Animated.View>

            </View>

          </View>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
    padding: 1,
  
    backgroundColor: '',
  },

});

export default PullUpDrawer;