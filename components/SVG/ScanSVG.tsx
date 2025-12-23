import { View } from 'react-native';
import { Svg, Path, G, Defs, ClipPath, Rect } from 'react-native-svg';

export default function ScanSVG() {
  return (
    <View>
      <Svg width="37" height="25" viewBox="0 0 69 57" fill="none">
        <G clipPath="url(#clip0_1_404)">
        <Path d="M56.9557 9.8973L53.0186 0H15.9814L12.0443 9.8973H0V57H69V9.8973H56.9557ZM34.5 49.3008C25.6689 49.3008 18.5095 42.2039 18.5095 33.4498C18.5095 24.6957 25.6689 17.5987 34.5 17.5987C43.3311 17.5987 50.4905 24.6957 50.4905 33.4498C50.4905 42.2039 43.3311 49.3008 34.5 49.3008Z" fill="#231F20"/>
        </G>
        <Defs>
        <ClipPath id="clip0_1_404">
        <Rect width="69" height="57" fill="white"/>
        </ClipPath>
        </Defs>
      </Svg>


    </View>
  )
}