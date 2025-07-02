import { Text, View, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
import { Svg, Path } from 'react-native-svg';

export default function ClaimButton() {

    const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.push('/claim')}>
      <View className="shadow-md bg-[#5050C2] rounded-[7px]">
        <View className="min-w-44 h-[5rem] rounded-[7px] border-[3px] border-[#5050c2] flex flex-row justify-center items-center gap-3" >
          <Svg width="40" height="111" viewBox="0 0 171 111" fill="none">
            <Path d="M0 12C0 5.37258 5.37258 0 12 0H154C160.627 0 166 5.37258 166 12V31H0V12Z" fill="white"/>
            <Path d="M0 45H166V96C166 103.18 160.18 109 153 109H13C5.82029 109 0 103.18 0 96V45Z" fill="white"/>
            <Path d="M75 71C76.6569 71 78 72.3431 78 74V80C78 81.6569 76.6569 83 75 83H17C15.3431 83 14 81.6569 14 80V74C14 72.3431 15.3431 71 17 71H75Z" fill="#5050C2"/>
          </Svg>
          <Text className="text-3xl text-white font-medium">Claim</Text>
        </View>

      </View>

    </TouchableOpacity>
  );
}