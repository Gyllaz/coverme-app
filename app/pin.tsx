// app/(tabs)/settings/pin.tsx
import React, { useMemo, useRef, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import { account } from '@/constants/accountInfo';
import { CloseSVG, BackSpaceSVG } from '@/components';

const { authentication } = account; // e.g. 1234 in your data
const REQUIRED_LEN = 4;

export default function Pin() {
  const router = useRouter();
  const correctPin = String(authentication);

  const [pin, setPin] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  // quick shake anim on error
  const shake = useRef(new Animated.Value(0)).current;
  const doShake = useCallback(() => {
    shake.setValue(0);
    Animated.sequence([
      Animated.timing(shake, { toValue: 1, duration: 60, easing: Easing.linear, useNativeDriver: true }),
      Animated.timing(shake, { toValue: -1, duration: 60, easing: Easing.linear, useNativeDriver: true }),
      Animated.timing(shake, { toValue: 1, duration: 60, easing: Easing.linear, useNativeDriver: true }),
      Animated.timing(shake, { toValue: 0, duration: 60, easing: Easing.linear, useNativeDriver: true }),
    ]).start();
  }, [shake]);

  const translateX = shake.interpolate({
    inputRange: [-1, 1],
    outputRange: [-8, 8],
  });

  const onClose = () => router.replace('/(tabs)/settings');

  const onDigit = (d: string) => {
    if (pin.length >= REQUIRED_LEN) return;
    const next = pin + d;
    setPin(next);

    if (next.length === REQUIRED_LEN) {
      // Check after last digit
      if (next === correctPin) {
        // success
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        router.push('/(tabs)/settings/profile');
      } else {
        // error: haptic + visual
        setError(true);
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        doShake();
        // do NOT auto-clear (as requested); user must backspace
      }
    } else if (error) {
      // if user continues typing after mistake, clear error flag
      setError(false);
    }
  };

  const onBackspace = () => {
    if (pin.length === 0) return;
    const next = pin.slice(0, -1);
    setPin(next);
    if (error && next.length < REQUIRED_LEN) setError(false);
  };

  const keypad = useMemo(
    () => [
      ['1', '2', '3'],
      ['4', '5', '6'],
      ['7', '8', '9'],
      ['x', '0', 'back'], // 'x' = spacer
    ],
    []
  );

  return (
    <View className="bg-[#5050C2] h-full w-full pt-[12%]">
      {/* Top bar */}
      <View className="flex-row justify-end pr-[1.5rem]">
        <TouchableOpacity onPress={onClose} accessibilityLabel="Close">
          <CloseSVG />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <View className="px-[2rem] pt-[1.5rem]">
        <Text className="text-white text-[2.3rem] font-light">Enter your PIN</Text>
        <Text className="text-white/80 text-[1.1rem] mt-[0.3rem]">We just want to make sure it’s you</Text>
      </View>

      {/* PIN display */}
      <Animated.View
        style={{ transform: [{ translateX }] }}
        className="mt-[2.5rem] w-full px-[2rem] h-[10%] items-center"
      >
        <View
          className="flex-row justify-center gap-[1.5rem] px-[1rem] py-[0.9rem] rounded-[14px] bg-white/10"
          style={{
            borderWidth: 2,
            borderColor: error ? '#FF6B6B' : 'rgba(255,255,255,0.35)',
          }}
        >
          {Array.from({ length: REQUIRED_LEN }).map((_, i) => {
            const filled = i < pin.length;
            return (
              <View
                key={i}
                className="w-[3.5rem] h-[3.6rem] rounded-[10px] bg-[#E4E4F7] justify-center items-center"
                style={{
                  borderWidth: 2,
                  borderColor: error ? '#FF6B6B' : '#5050C2',
                }}
              >
                <Text className="text-[2.5rem] text-[#5050C2] ">
                  {filled ? '•' : ' '}
                </Text>
              </View>
            );
          })}
        </View>

        {error && (
          <Text className="text-[#FFDFDF] mt-[0.8rem]">Incorrect PIN. Try again.</Text>
        )}
      </Animated.View>

      {/* Keypad */}
      <View className="mt-[3rem] px-[2rem]">
        {keypad.map((row, rIdx) => (
          <View key={rIdx} className="flex-row justify-between mb-[1.5rem]">
            {row.map((key, cIdx) => {
              if (key === 'x') {
                return <View key={cIdx} className="w-[30%]" />; // spacer
              }

              const isBack = key === 'back';
              const onPress = isBack ? onBackspace : () => onDigit(key);

              return (
                <TouchableOpacity
                  key={cIdx}
                  onPress={onPress}
                  activeOpacity={0.85}
                  className="w-[30%] h-[5.2rem] rounded-[14px] items-center justify-center bg-black"
                  style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 8 },
                    shadowOpacity: 0.25,
                    shadowRadius: 14,
                    elevation: 8,
                  }}
                >
                  <View className='w-full h-[5.2rem] rounded-[14px] items-center justify-center bg-white'>
                    {isBack ? (
                      <BackSpaceSVG />
                    ) : (
                      <Text className="text-[1.9rem] text-[#5050C2] font-semibold">{key}</Text>
                    )}

                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>

      {/* Hint / Footer */}
      <View className="mt-auto pb-[6%] items-center">
        <Text className="text-white/70">
          Secure entry • CoverMe
        </Text>
      </View>
    </View>
  );
}
