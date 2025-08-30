import { View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Svg, Path, Ellipse, Mask, Rect } from 'react-native-svg';

export default function CopySVG({ onPress }: { onPress: () => void }) {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Svg width="25" height="25" viewBox="0 0 55 77" fill="none">
          <Mask id="path-1-inside-1_2022_270" fill="#5050c2">
          <Rect y="3.01965" width="54.3529" height="73.9804" rx="3"/>
          </Mask>
          <Rect y="3.01965" width="54.3529" height="73.9804" rx="3" stroke="#5050c2" strokeWidth="12" mask="url(#path-1-inside-1_2022_270)"/>
          <Rect x="16.6077" width="22.6471" height="12.0784" rx="2" fill="#5050c2"/>
          <Path d="M27.1765 30.951V39.255M27.1765 47.5589V39.255M27.1765 39.255H36.2353H18.1177" stroke="#5050c2" strokeWidth="4"/>
        </Svg>
      </TouchableOpacity>

    </View>
  )
}