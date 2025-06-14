import { View, Text } from 'react-native'
import { Link } from 'expo-router';
import { Svg, Path, Rect } from 'react-native-svg';

export default function TopUp() {
  return (
          <View>
              <Link href={'/info'}>
                <View className="min-w-44 h-[5rem] rounded-[7px] border-[3px] border-[#5050c2] flex flex-row justify-center items-center px-[0.7rem] gap-3" >
                  <Svg width="35" height="136" viewBox="0 0 136 136" fill="none">
                      <Rect x="4.5" y="4.5" width="127" height="127" rx="63.5" stroke="#5050C2" fill="#5050C2" strokeWidth="9"/>
                      <Path d="M82.639 43.2112L78.7125 39.4564C73.5875 34.5557 65.6947 33.8098 59.6735 37.5551V37.5551C55.4407 40.188 52.7066 44.7743 52.4709 49.7536V49.7536C52.1885 55.7212 55.4367 61.2983 60.7666 63.9971L68.2688 67.7958L75.9477 71.4075C81.1593 73.8587 84.3803 79.2088 84.108 84.9616V84.9616C83.8811 89.7561 81.2533 94.1133 77.1185 96.551L76.0022 97.2092C70.3011 100.57 63.1499 100.232 57.7917 96.3472L50.5153 91.0719" stroke="white"  strokeWidth="9"/>
                      <Path d="M68.0922 23L68.4723 112.019" stroke="white" fill="white" strokeWidth="7"/>
                  </Svg>
                  <Text className="text-3xl text-[#5050c2] font-medium">Top Up</Text>

                </View>
              
              </Link>
            
          </View>
  )
}