import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { account } from '@/constants/accountInfo';
import {
  MiniArrow,
  ChangeSVG,
  PaymentSVG,
  StatementSVG,
  MemberSVG,
  SecuritySVG,
  LegalSVG,
  SupportSVG,
  WideSVG,
} from '@/components';
import { useRouter } from 'expo-router';

const { userId, firstname } = account;

type Option = {
  svg: React.ComponentType<{ color?: string; size?: number }>;
  title: string;
  onPress?: () => void;
};

const options: Option[] = [
  { svg: ChangeSVG, title: 'Change my cover' },
  { svg: PaymentSVG, title: 'Payment Details' },
  { svg: StatementSVG, title: 'Statements' },
  { svg: MemberSVG, title: 'Members' },
  { svg: SecuritySVG, title: 'Security' },
  { svg: LegalSVG, title: 'Legal' },
  { svg: SupportSVG, title: 'Support' },
];

export default function index() {
  const router = useRouter();

  return (
    <View className="pt-[17%] bg-white w-full h-full pl-[1rem] pr-[3rem]">

      <View className="pb-[3rem] pl-[1rem]">
        <Text className="text-[2.5rem] text-[#5050C2] ">Settings</Text>
      </View>

      <View className="flex flex-row gap-[0.75rem] mb-[3.25rem] justify-center items-center">
        <View className="w-[5rem] h-[5rem] rounded-full bg-[#E4E4F7] items-center justify-center">
          <Text className="text-[2.3rem] text-[#5050C2]">
            {firstname[0]}
          </Text>
        </View>

        <View className="flex">
          <View className="flex-col gap-[0.5rem]">
            <Text className="text-[1.5rem] text-[#5050C2] ">{userId}</Text>
            <TouchableOpacity className="border-b-[2px] border-[#5050c2]"
            onPress={() => router.push('/pin')}
            >
              <View className="flex-row items-center gap-[0.5rem]">
                <Text className="text-xl font-medium text-[#1E1E1E]">View Profile</Text>
                <MiniArrow />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Options */}
      <View className="flex gap-[0.75rem]">
        {options.map((item, index) => {
          const Icon = item.svg; // <-- pull component, then render <Icon />
          return (
            <View 
            key={item.title + index}
            className='w-full h-fit mx-[1rem] rounded-[12px] bg-[#5050C2]'>
              <TouchableOpacity
                className="w-full h-[60px] px-[1rem] bg-[#E5E5E5] rounded-[12px] flex-row items-center justify-between"
                onPress={item.onPress}
                activeOpacity={0.8}
              >
                <View className="flex-row items-center gap-[0.75rem]">
                  <Icon />
                  <Text className="text-[1.5rem] text-[#5050C2] ">
                    {item.title}
                  </Text>
                </View>
                <WideSVG />
              </TouchableOpacity>

            </View>
          );
        })}
      </View>
    </View>
  );
}
