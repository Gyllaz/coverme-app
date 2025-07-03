import { investment } from '@/constants/accountInfo';
import { Text, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import UpArrow from './UpArrow';
import DownArrow from './DownArrow';


const { growth } = investment;

export default function Growth() {

  const router = useRouter();

  if (growth !== 0) {
    return (
      <TouchableOpacity onPress={() => router.push('/investments')}>
        <View className='shadow-md bg-[#5050C2] rounded-[7px]'>
          <View className="min-w-44 h-[9rem] pt-[0.2rem] pl-[1rem] rounded-[7px] border-[3px] border-[#5050c2] justify-center flex overflow-hidden">
            
            <View>
              <View>
                <View className='absolute left-[1.8rem]'>
                  {growth > 0 ? 
                    <UpArrow/>
                  :
                    <DownArrow/>

                  }
                </View>

                <Text className={`text-white font-semibold ${Math.abs(growth) > 999 ? 'text-[2.5rem]' : 'text-[2.5rem] tracking-[0.3rem]'} z-20`}>
                  ${Math.abs(growth).toLocaleString()}
                </Text>
              </View>
              <Text className="text-2xl text-white font-medium">Investment</Text>
              <Text className="text-2xl text-white font-medium">{growth >= 0 ? 'Growth' : 'Losses'}</Text>
            </View>
          </View>

        </View>

      </TouchableOpacity>
    );
  }
}
