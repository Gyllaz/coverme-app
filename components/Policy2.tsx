// app/(tabs)/Policy2.tsx
import { receipts } from '@/constants/accountInfo';
import { BlurView } from 'expo-blur';
import React, { useMemo, useState } from 'react';
import { ScrollView, Text, TextInput, View, TouchableOpacity } from 'react-native';
import ReceiptSVG from './ReceiptSVG';

const HEADER_H = 96;

const currency = (n: number) =>
  `$${n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

export default function Policy2() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return receipts;
    return receipts.filter(r =>
      [r.type, r.status, r.date, r.members]
        .join(' ')
        .toLowerCase()
        .includes(q)
    );
  }, [query]);

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
          elevation: 10,
        }}
        pointerEvents="box-none"
        className="h-[10rem]"
      >
        <BlurView
          intensity={30}
          tint="light"
          style={{
            backgroundColor: 'rgba(255,255,255,0.15)',
            borderBottomWidth: 1,
            borderColor: 'rgba(255,255,255,0.35)',
            paddingBottom: 10,
          }}
          className="pt-[3rem] pb-[1rem]"
        >
          <Text className="text-[#105E49] pt-[1.5rem] pl-[2rem] text-[2.5rem]">
            Your Receipts
          </Text>

          <View className="flex flex-row gap-[1.5rem] w-full px-[2rem] pt-[1rem] mb-[3rem]">
            <TextInput
              placeholder="Search by type, member, status or date…"
              placeholderTextColor="#999"
              value={query}
              onChangeText={setQuery}
              className="border border-[#105E49] w-full rounded-[10px] px-4 py-2 text-[#5050c2] text-[1.1rem]"
            />
          </View>
        </BlurView>
      </View>

      {/* Content scrolls UNDER the glass header */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 32 }}
        className="pb-[45%] pt-[45%]"
      >
        <View className="gap-[24px] px-[16px] pt-[16px]">
          {filtered.map((r, idx) => {
            const isClaimed = r.status.toLowerCase() === 'claimed';
            const statusBg = isClaimed ? '#EFF7FF' : '#FFF5D9';
            const statusColor = isClaimed ? '#8AC3F9' : '#8A6A00';

            return (
              <View
                key={`${r.type}-${r.date}-${idx}`}
                className="w-full rounded-[16px] bg-white px-[1.5rem] py-[1.25rem]"
                style={{
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 8 },
                  shadowOpacity: 0.38,
                  shadowRadius: 16,
                  elevation: 10,
                }}
              >
                {/* Header row: type + status pill */}
                <View className="flex-row items-center justify-between">
                  <Text className="font-poppins text-[1.35rem] text-[#105E49] font-medium">
                    {r.type}
                  </Text>
                  <View
                    style={{
                      backgroundColor: statusBg,
                      paddingVertical: 6,
                      paddingHorizontal: 12,
                      borderRadius: 999,
                    }}
                  >
                    <Text style={{ color: statusColor, fontWeight: '600' }}>
                      {r.status}
                    </Text>
                  </View>
                </View>

                {/* Meta */}
                <View className="mt-[10px] gap-[6px]">
                  <Text className="text-[#1E1E1E] opacity-80">
                    Date: <Text className=" font-semibold opacity-100">{r.date}</Text>
                  </Text>
                  <Text className="text-[#1E1E1E] opacity-80">
                    Member: <Text className="font-semibold opacity-100">{r.members}</Text>
                  </Text>
                </View>

                {/* Financials */}
                <View className="mt-[12px] pt-[10px] border-t border-[#5050C2]/25 gap-[8px]">
                  <View className="flex-row justify-between">
                    <Text className="text-[#1E1E1E] opacity-80">Charge</Text>
                    <Text className="text-[#1E1E1E] font-semibold">{currency(r.charge)}</Text>
                  </View>
                  <View className="flex-row justify-between">
                    <Text className="text-[#1E1E1E] opacity-80">Benefits Paid</Text>
                    <Text className="text-[#1E1E1E] font-semibold">{currency(r.benefits)}</Text>
                  </View>
                  <View className="flex-row justify-between pt-[1rem] border-t border-[#5050C2]/15 ">
                    <TouchableOpacity className=" px-[1rem] py-[0.5rem] w-[45%] h-[3rem] bg-[#E5EF68] rounded-[1rem] flex flex-row  gap-[0.7rem]">
                      <View className="self-center">
                        <ReceiptSVG />
                      </View>
                      <Text className="self-center text-[#1E1E1E] text-[1.3rem]">View Receipt</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          })}

          {filtered.length === 0 && (
            <View className="items-center py-8">
              <Text className="text-[#8A8AC9]">No receipts found.</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
