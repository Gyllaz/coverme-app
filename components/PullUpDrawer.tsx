// PullUpDrawer.tsx
import React, { useMemo, useRef, useState, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LayoutChangeEvent } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import InsuranceCard from '@/components/InsuranceCard';
import BankCard from '@/components/BankCard';
import type { ReactNode } from 'react';

// Reanimated
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';

type ActiveCard = 'insurance' | 'bank' | null;

export default function PullUpDrawer({children} : {children: ReactNode;}) {
  const bottomSheetRef = useRef<BottomSheet>(null);

  // Bottom sheet snaps
  const snapPoints = useMemo(() => ['4%', '60%', '100%'], []);

  // React state (non-animated)
  const [cardsAreaHeight, setCardsAreaHeight] = useState(0);
  const [activeCard, setActiveCard] = useState<ActiveCard>(null);

  // Animated (UI thread)
  const sheetIndex = useSharedValue(0);
  const insY = useSharedValue(0);
  const bankY = useSharedValue(0);

  // Tunables
  const CARD_HEIGHT = 100;
  const GAP = 24;
  const TOP_Y = 0;

  const onCardsAreaLayout = (e: LayoutChangeEvent) => {
    const h = Math.max(1, Math.floor(e.nativeEvent.layout.height));
    if (h !== cardsAreaHeight) setCardsAreaHeight(h);
  };

  // Bottom position keeps “other” card partially visible (40% of its height visible)
  const getPartialBottomY = () => {
    const target = 600;
    return target;
  };

  

  // Sync when sheet index changes
  const handleSheetChanges = useCallback((index: number) => {
    // Store to Reanimated shared value (UI-thread)
    sheetIndex.value = index;

    // When sheet closes or is mid, reset to stacked positions
    if (index !== 2) {
      insY.value = withSpring(0, { stiffness: 100, damping: 50 });
      bankY.value = withSpring(CARD_HEIGHT + GAP, { stiffness: 100, damping: 50 });
      if (activeCard) runOnJS(setActiveCard)(null);
    } else {
      // At top: if we have an active card, place it on top and the other to partial bottom
      const bottom = getPartialBottomY();
      if (activeCard === 'insurance') {
        insY.value = withSpring(TOP_Y, { stiffness: 50, damping: 50 });
        bankY.value = withSpring(bottom, { stiffness: 50, damping: 50 });
      } else if (activeCard === 'bank') {
        bankY.value = withSpring(TOP_Y, { stiffness: 50, damping: 50 });
        insY.value = withSpring(bottom, { stiffness: 50, damping: 50 });
      } else {
        // No active selection yet, keep stacked
        insY.value = withSpring(0, { stiffness: 50, damping: 50 });
        bankY.value = withSpring(CARD_HEIGHT + GAP, { stiffness: 50, damping: 50 });
      }
    }
  }, [activeCard, cardsAreaHeight]);

  const animateActiveAtTop = useCallback((card: ActiveCard) => {
    const bottom = getPartialBottomY(); // your current function (600)
    const cfg = { stiffness: 100, damping: 50 };

    if (card === 'insurance') {
      insY.value = withSpring(TOP_Y, cfg);
      bankY.value = withSpring(bottom, cfg);
    } else if (card === 'bank') {
      bankY.value = withSpring(TOP_Y, cfg);
      insY.value = withSpring(bottom, cfg);
    }
  }, [insY, bankY, /* if you prefer dynamic bottom: */ cardsAreaHeight]);

  // 2) update press handlers to handle "already open" case
  const onPressInsurance = useCallback(() => {
    if (activeCard !== 'insurance') setActiveCard('insurance');
    if (sheetIndex.value === 2) {
      // already at top, run the animation now
      animateActiveAtTop('insurance');
    } else {
      bottomSheetRef.current?.snapToIndex(2);
    }
  }, [activeCard, animateActiveAtTop]);

  const onPressBank = useCallback(() => {
    if (activeCard !== 'bank') setActiveCard('bank');
    if (sheetIndex.value === 2) {
      // already at top, run the animation now
      animateActiveAtTop('bank');
    } else {
      bottomSheetRef.current?.snapToIndex(2);
    }
  }, [activeCard, animateActiveAtTop]);

  // Animated styles
  const insStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: insY.value }],
  }));

  const bankStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: bankY.value }],
  }));

  // Initialize stacked positions instantly (no rubber-banding on first mount)
  React.useEffect(() => {
    insY.value = withTiming(0, { duration: 0 });
    bankY.value = withTiming(CARD_HEIGHT + GAP, { duration: 0 });
  }, []);

  return (
    <GestureHandlerRootView style={styles.root}>
      {children}
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backgroundStyle={{ backgroundColor: '#5050c2' }}
        handleIndicatorStyle={{ backgroundColor: 'white' }}
      >
        <BottomSheetView style={styles.sheetContent} onLayout={onCardsAreaLayout}>
          <Text style={styles.title} className='font-semibold'>Cards</Text>

          <View style={{ height: Math.max(CARD_HEIGHT * 2 + GAP + 24, cardsAreaHeight || 1) }}>
            {/* Insurance card */}
            <Animated.View
              style={[
                styles.cardShadow,
                {
                  position: 'absolute',
                  left: 16,
                  right: 16,
                  height: CARD_HEIGHT,
                  zIndex: activeCard === 'insurance' ? 2 : 1,
                },
                insStyle,
              ]}
            >
              <TouchableOpacity activeOpacity={0.9} onPress={onPressInsurance}>
                <InsuranceCard />
              </TouchableOpacity>
            </Animated.View>
            
            <View className='flex flex-row justify-center align-items pt-[23rem]'>
              <Text className='font-poppins text-white text-[1.5rem]'>Hold Near Reader</Text>
            </View>

            {/* Bank card */}
            <Animated.View
              style={[
                styles.cardShadow,
                {
                  position: 'absolute',
                  left: 16,
                  right: 16,
                  height: CARD_HEIGHT,
                  zIndex: activeCard === 'bank' ? 2 : 1,
                },
                bankStyle,
              ]}
            >
              <TouchableOpacity activeOpacity={0.9} onPress={onPressBank}>
                <BankCard />
              </TouchableOpacity>
            </Animated.View>
          </View>
          <View className='flex flex-row justify-center align-items'>
            <Text className='font-poppins '>Hold Near Reader</Text>

          </View>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: 'white' },
  sheetContent: { flex: 1, paddingTop: 24 },
  title: { color: 'white', fontSize: 28, fontWeight: '300', paddingLeft: 24, marginBottom: 40, marginTop: 0, },
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.38,
    shadowRadius: 38,
    elevation: 15,
  },
});
