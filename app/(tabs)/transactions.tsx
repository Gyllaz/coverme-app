// app/(tabs)/transactions.tsx
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Dimensions, FlatList, NativeScrollEvent, NativeSyntheticEvent, Pressable, View } from 'react-native';
import { BlurView } from 'expo-blur';
import { Transactions1, Transactions3 } from '@/components';

const { width } = Dimensions.get('window');

function PageContainer({ children }: { children: React.ReactNode }) {
  return <View style={{ width, height: '100%' }}>{children}</View>;
}

export default function Transactions() {
  const listRef = useRef<FlatList<number>>(null);

  // 0 => Transactions1, 1 => Transactions3
  const [index, setIndex] = useState(0);

  // Only two pages now
  const pages = useMemo(() => [0, 1], []);

  const scrollTo = useCallback(
    (i: number) => {
      if (!listRef.current) return;
      const clamped = Math.max(0, Math.min(i, pages.length - 1));
      listRef.current.scrollToIndex({ index: clamped, animated: true });
      setIndex(clamped);
    },
    [pages.length]
  );

  const onNext = useCallback(() => scrollTo(index + 1), [index, scrollTo]);
  const onPrev = useCallback(() => scrollTo(index - 1), [index, scrollTo]);

  const onMomentumEnd = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      const newIndex = Math.round(e.nativeEvent.contentOffset.x / width);
      if (newIndex !== index) setIndex(newIndex);
    },
    [index]
  );

  const getItemLayout = useCallback(
    (_: unknown, i: number) => ({ length: width, offset: width * i, index: i }),
    []
  );

  const renderItem = useCallback(({ item }: { item: number }) => {
    let page: React.ReactNode = null;
    if (item === 0) page = <Transactions1 />;
    else page = <Transactions3 />;

    return <PageContainer>{page}</PageContainer>;
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Horizontal pager */}
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
        removeClippedSubviews
        initialNumToRender={2}
        windowSize={2}
      />

      {/* Left / right tap zones */}
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

      {/* Page indicator — only two dots now */}
      <View className="w-full h-fit flex flex-row justify-center absolute bottom-[1.5rem]">
        <View className="rounded-[1rem] overflow-hidden flex flex-row justify-center">
          <BlurView
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              borderRadius: 30,
              gap: 8,
            }}
            className="w-[7rem] h-fit px-[0.5rem] py-[0.5rem] justify-self-center rounded-[10px]"
          >
            {[0, 1].map((i) => (
              <View
                key={i}
                style={{
                  width: 30,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: index === i ? '#105E49' : '#D6D6F0',
                }}
              />
            ))}
          </BlurView>
        </View>
      </View>
    </View>
  );
}
