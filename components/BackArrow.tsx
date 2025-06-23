// BackArrow.tsx
import { View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Svg, Path, Ellipse } from 'react-native-svg';

export default function BackArrow() {
  const router = useRouter();

  return (
    <View className="w-full h-[2rem] flex flex-row pl-[1.5rem]">
      <TouchableOpacity onPress={() => router.push('/')}>
        <Svg width="35" height="56" viewBox="0 0 96 56" fill="none">
          <Path d="M95.7661 27.873C33.0152 27.873 9.33743 27.873 5.04783 27.873M5.04783 27.873L28.388 4.84C28.7039 4.52823 29.2392 4.75203 29.2392 5.19589V50.5503C29.2392 50.9942 28.7039 51.218 28.388 50.9062L5.04783 27.873ZM5.04783 27.873C3.76205 27.873 3.98517 27.873 5.04783 27.873Z" stroke="#5050C2" strokeWidth="8"/>
          <Ellipse cx="14" cy="28" rx="14" ry="6" fill="#5050C2"/>
          <Path d="M33 19.5C33 24.1042 28.2496 27.8367 22.3897 27.8367C16.5298 27.8367 11.7794 24.1042 11.7794 19.5C11.7794 14.8958 16.5298 11.1633 22.3897 11.1633C28.2496 11.1633 33 14.8958 33 19.5Z" fill="#5050C2"/>
          <Ellipse cx="22.6103" cy="35.3367" rx="10.6103" ry="8.33667" fill="#5050C2"/>
        </Svg>
      </TouchableOpacity>
    </View>
  );
}
