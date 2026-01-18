import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { account } from '@/constants/accountInfo';
import {
  SettingsSVG,
  PaymentSVG,
  StatementSVG,
  SecuritySVG,
  LegalSVG,
  SupportSVG,
  WideSVG,
  ClaimSVG
} from '@/components';
import { useRouter } from 'expo-router';


type Option = {
  svg: React.ComponentType<{ colour?: string; size?: number }>;
  title: string;
  onPress?: () => void;
};

const options: Option[] = [
  { svg: ClaimSVG, title: 'Change my cover' },
  { svg: PaymentSVG, title: 'Payment details' },
  { svg: StatementSVG, title: 'Statements' },
  { svg: SettingsSVG, title: 'Members' },
  { svg: SecuritySVG, title: 'Security' },
  { svg: LegalSVG, title: 'Legal' },
  { svg: SupportSVG, title: 'Support' },
];

export default function index() {
  const router = useRouter();

  return (
    <View className={`bg-[#F3F3F1] h-full flex`}>

      <View className='bg-white flex flex-col gap-[1rem] h-full w-full mt-[15%] px-[2rem] pt-[4%] pb-[5rem] rounded-t-[1rem]'>
        <ScrollView>
          <View className='pb-[15%] flex flex-col gap-[1rem]'>
            <View className='flex flex-row w-full h-fit pt-[1rem] pb-[1rem]'>
              <Text className="font-[BASKiT-Medium] text-[#231F20]  text-[1.7rem]">
                Settings
              </Text>
            </View>

            {/* Body */}
            <View className="w-fit h-[15rem] flex flex-col justify-between bg-sun-100 px-[1.5rem] pt-[1rem] pb-[2rem] rounded-[1rem]">
              <View className="w-full flex flex-col gap-[0.5rem] pt-[1rem]">
                <Text className="font-[BASKiT-Medium] text-[1.8rem]">
                  {account.firstname} {account.lastname}
                </Text>
                <TouchableOpacity
                  onPress={() => router.push('/pin')}
                >
                  <Text className='font-[BASKiT] underline underline-offset-8'>View Profile</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Options */}
            <View className="flex gap-[0.75rem]">
              {options.map((item, index) => {
                const Icon = item.svg; // <-- pull component, then render <Icon />
                return (
                  <View 
                  key={item.title + index}
                  className='w-full h-fit rounded-[12px]'>
                    <TouchableOpacity
                      className="w-full h-[60px] px-[1rem] bg-[#F3F3F1] rounded-[12px] flex-row items-center justify-between"
                      onPress={item.onPress}
                      activeOpacity={0.8}
                    >
                      <View className="flex-row items-center gap-[0.75rem]">
                        <Icon colour='#8B8988'/>
                        <Text className="font-[BASKiT] text-[1.3rem] text-[#1E1E1E] ">
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
          
        </ScrollView>

      </View>

    </View>
  );
}
