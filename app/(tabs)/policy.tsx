// app/(tabs)/policy.tsx
import { Policy1, Policy2, Policy3 } from '@/components';
import { BlurView } from 'expo-blur';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Dimensions, FlatList, NativeScrollEvent, NativeSyntheticEvent, Pressable, View, Text, Platform } from 'react-native';


const { width } = Dimensions.get('window');

// A tiny wrapper so each page gets the full screen width
function PageContainer({ children }: { children: React.ReactNode }) {
  return <View style={{ width, height: '100%' }}>{children}</View>;
}

export default function Policy() {
  const listRef = useRef<FlatList<number>>(null);
  const title = ['My Polcy', 'My Extras', 'My Claims'];

  // 0 => Policy1, 1 => Policy2
  const [index, setIndex] = useState(0);

  // Only two pages for now
  const pages = useMemo(() => [0, 1, 2], []);

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
    let page: React.ReactNode = null;
    if (item === 0) page = <Policy1 />;
    else if (item === 1) page = <Policy2 />;
    else page = <Policy3 />;


    return (
      <PageContainer>
        {page}
      </PageContainer>
    );
  }, []);

  return (
    <View className={`bg-[#F3F3F1] h-full flex`}>
      <View className='bg-white h-full w-full mt-[15%] pt-[4%] pb-[5rem] rounded-t-[1rem]'>
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
          <View className="w-full h-fit flex flex-row justify-center absolute top-[1.5rem]">
            {/* 1. Wrap in a View with overflow: 'hidden' and the Radius */}
            <View 
              style={{ borderRadius: 40, overflow: 'hidden' }} 
              className="w-[72%] h-fit flex flex-row justify-center"
            >
              <BlurView
                intensity={Platform.OS === 'ios' ? 80 : 0} // Lower or 0 intensity for Android
                tint="light"
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  // 2. Add a semi-transparent background specifically for Android
                  backgroundColor: Platform.OS === 'android' ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
                }}
                className="w-full h-fit px-[0.5rem] py-[0.3rem]"
              >
                {[0, 1, 2].map((i) => (
                  <View
                    key={i}
                    style={{
                      borderRadius: 20,
                      overflow: 'hidden',
                      backgroundColor: index === i ? '#ECF86E' : 'transparent',
                      justifyContent: 'center',
                    }}
                    className="px-[0.3rem]"
                  >
                    <Text
                      style={{
                        fontFamily: 'BASKiT',
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        fontSize: 15,
                        color: index === i ? '#231F20' : '#8B8988',
                      }}
                    >
                      {title[i]}
                    </Text>
                  </View>
                ))}
              </BlurView>
            </View>
          </View>

      </View>
    </View>
  );
}
