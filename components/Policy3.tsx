// app/(tabs)/Policy2.tsx
import { receipts } from '@/constants/accountInfo';
import { BlurView } from 'expo-blur';
import React, { useMemo, useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ScanSVG from './SVG/ScanSVG';
import WideSVG from './SVG/WideSVG';
import { cleanDate } from '@/constants/accountInfo';

const HEADER_H = 96;

const currency = (n: number) =>
  `$${n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

export default function Policy3() {
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

      {/* Content scrolls UNDER the glass header */}
      <ScrollView>
        <View className="w-full px-[2rem] pb-[7rem] flex flex-col gap-[1.5rem]">
          <View>
            <View className="pt-[4rem]">
              <View className='flex flex-row w-full h-fit pt-[1rem]'>
                <Text className="font-[BASKiT-Medium] text-[#231F20]  text-[1.7rem]">
                  My claims
                </Text>

              </View>
            </View>
          </View>

          <View className="flex flex-row gap-[1.5rem] w-full">
            <TextInput
              placeholder="Search claims"
              placeholderTextColor="#999"
              value={query}
              onChangeText={setQuery}
              className="bg-[#F3F3F1] w-full rounded-[10px] px-4 py-2 text-[1.3rem]"
            />
          </View>

          <View className=" flex align-content gap-[2rem]">
            <TouchableOpacity
              className="w-full h-fit px-[1rem] py-[1.3rem] bg-[#ECF86E] rounded-[1rem] flex-row items-center justify-between">
              <View className="flex-row items-center gap-[0.75rem]">
                <ScanSVG />
                <View className="flex flex-col gap-[0.2rem]">
                  <Text className="text-[1.3rem] font-[BASKiT] text-black ">
                    Make a claim
                  </Text>
                  <Text className="text-[1rem] font-[BASKiT-light] text-black">
                    Got a receipt? Snap a photo to process
                  </Text>
                </View>
              </View>
              <WideSVG />
            </TouchableOpacity>
          </View>

          <View className="gap-[24px]">
            {filtered.map((r, idx) => {
              const isClaimed = r.status.toLowerCase() === 'claimed';
              const statusBg = isClaimed ? '#ECF86E' : '#8AC3F9';
              const statusColor = isClaimed ? '#231F20' : '#FFFFFF';

              return (
                <View
                  key={`${r.type}-${r.date}-${idx}`}
                  className="w-full rounded-[16px] bg-[#F3F3F1] px-[1.5rem] py-[1.25rem]"
                >
                  {/* Header row: type + status pill */}
                  <View className="flex-row items-center justify-between">
                    <Text className="font-[BASKiT-Medium] text-[1.35rem] ">
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
                      <Text style={{ color: statusColor, fontWeight: '600' }}
                        className='font-[BASKiT] '
                      >
                        {r.status}
                      </Text>
                    </View>
                  </View>

                  {/* Meta */}
                  <View className="mt-[10px] gap-[6px] flex flex-row justify-between">
                    <Text className="font-[BASKiT] text-[#1E1E1E]">
                      {cleanDate(r.date)}
                    </Text>
                    <Text className="font-[BASKiT] text-[#1E1E1E]">
                     {r.members}
                    </Text>
                  </View>

                  {/* Financials */}
                  <View className="mt-[12px] pt-[10px] border-t border-[#5050C2]/25 gap-[8px]">
                    <View className="flex-row justify-between">
                      <Text className="text-[#1E1E1E] font-[BASKiT]">Charge</Text>
                      <Text className="text-[#1E1E1E] font-[BASKiT]">{currency(r.charge)}</Text>
                    </View>
                    <View className="flex-row justify-between">
                      <Text className="text-[#1E1E1E] font-[BASKiT]">Benefits Paid</Text>
                      <Text className="text-[#1E1E1E] font-[BASKiT]">{currency(r.benefits)}</Text>
                    </View>
                    <View className="flex-row justify-between pt-[1rem] border-t border-[#5050C2]/15 ">
                      <TouchableOpacity className=" px-[1rem]  w-fit h-[3rem] bg-[#105E49] rounded-[1rem] flex flex-row  gap-[0.7rem]">
                        <Text className="self-center text-white font-[BASKiT-Medium] text-[1.1rem]">View Receipt</Text>
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
        </View>
      </ScrollView>
    </View>
  );
}
