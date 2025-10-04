// app/(tabs)/policy.tsx
import { Policy1, Policy2 } from '@/components';
import { BlurView } from 'expo-blur';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Dimensions, FlatList, NativeScrollEvent, NativeSyntheticEvent, Pressable, View, } from 'react-native';


const { width } = Dimensions.get('window');

// A tiny wrapper so each page gets the full screen width
function PageContainer({ children }: { children: React.ReactNode }) {
  return <View style={{ width, height: '100%' }}>{children}</View>;
}

export default function Policy() {
  const listRef = useRef<FlatList<number>>(null);

  // 0 => Policy1, 1 => Policy2
  const [index, setIndex] = useState(0);

  // Only two pages for now
  const pages = useMemo(() => [0, 1], []);

  const scrollTo = useCallback((i: number) => {
    if (!listRef.current) return;
    const clamped = Math.max(0, Math.min(i, pages.length - 1));
    listRef.current.scrollToIndex({ index: clamped, animated: true });
    setIndex(clamped);
  }, [pages.length]);

  const onNext = useCallback(() => scrollTo(index + 1), [index, scrollTo]);
  const onPrev = useCallback(() => scrollTo(index - 1), [index, scrollTo]);

  // Keep index in sync when user swipes
  const onMomentumEnd = useCallback((e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const newIndex = Math.round(e.nativeEvent.contentOffset.x / width);
    if (newIndex !== index) setIndex(newIndex);
  }, [index]);

  const getItemLayout = useCallback(
    (_: any, i: number) => ({ length: width, offset: width * i, index: i }),
    []
  );

  const renderItem = useCallback(({ item }: { item: number }) => {
    return (
      <PageContainer>
        {item === 0 ? <Policy1 /> : <Policy2 />}
      </PageContainer>
    );
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Horizontal stories-like pager */}
      <FlatList
        ref={listRef}
        data={pages}
        keyExtractor={(i) => String(i)}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        getItemLayout={getItemLayout}
        onMomentumScrollEnd={onMomentumEnd}
        // Helps nested vertical ScrollViews inside each page
        // (RN handles it pretty well without extra props, but this avoids glitches)
        removeClippedSubviews
        initialNumToRender={2}
        windowSize={2}
      />

      {/* Left / right tap zones (like IG stories) */}
      <Pressable
        onPress={onPrev}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '15%',
        }}
        android_ripple={{ color: 'rgba(0,0,0,0.05)' }}
      />
      <Pressable
        onPress={onNext}
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '15%',
        }}
        android_ripple={{ color: 'rgba(0,0,0,0.05)' }}
      />

      {/* Page indicator */}
      <View className='w-full h-fit flex flex-row justify-center absolute bottom-[1.5rem]'>
        <View 
        className='rounded-[1rem] overflow-hidden flex flex-row justify-center'>

          <BlurView
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              borderRadius: 30,
              gap: 8,
            }}
            className='w-[7rem] h-fit px-[0.5rem] py-[0.5rem] justify-self-center rounded-[10px]'
          >
            {[0, 1].map((i) => (
              <View
                key={i}
                style={{
                  width: 30,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: index === i ? '#5050C2' : '#D6D6F0',
                }}
              />
            ))}
          </BlurView>
        </View>

      </View>
    </View>
  );
}
