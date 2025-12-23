// BackArrow.tsx
import { View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Svg, Path, Ellipse } from 'react-native-svg';

export default function BackArrow() {
  const router = useRouter();

  return (
    <View className="w-full h-[2rem] flex flex-row pl-[1.5rem]">
      <TouchableOpacity onPress={() => router.push('/home')}>
        <Svg width="14" height="32" viewBox="0 0 24 42" fill="none">
          <Path d="M22.3284 1.41431L2.82837 20.9143L22.3284 40.4143" stroke="#231F20" strokeWidth="4"/>
        </Svg>
      </TouchableOpacity>
    </View>
  );
}
