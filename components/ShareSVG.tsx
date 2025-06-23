import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native';
import { Svg, Path, Ellipse, Mask, Rect } from 'react-native-svg';

export default function ShareSVG({ onPress }: { onPress: () => void }) {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Svg width="25" height="30" viewBox="0 0 96 98" fill="none">
          <Mask id="path-1-inside-1_2022_276" fill="white">
          <Rect y="40" width="96" height="58" rx="7"/>
          </Mask>
          <Rect y="40" width="96" height="58" rx="7" stroke="#5050C2" strokeWidth="18" mask="url(#path-1-inside-1_2022_276)"/>
          <Rect width="36" height="20" transform="translate(32 32)" fill="white"/>
          <Path d="M50 69C50 29.2665 50 10.5906 50 5.05139C50 4.65998 49.5268 4.47323 49.25 4.75V4.75M49.25 4.75L34.2071 19.7929C33.5771 20.4229 34.0233 21.5 34.9142 21.5H63.5858C64.4767 21.5 64.9229 20.4229 64.2929 19.7929L49.25 4.75Z" stroke="#5050C2" strokeWidth="8"/>
          <Ellipse cx="49" cy="15.5" rx="9" ry="3.5" fill="#5050C2"/>
        </Svg>

      </TouchableOpacity>

    </View>
  )
}