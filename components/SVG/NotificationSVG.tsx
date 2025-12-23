import { View } from 'react-native'
import { Svg, Path, G, Defs, Rect, ClipPath, Circle } from 'react-native-svg';

export default function NotificationSVG() {
  return (
    <Svg width="27" height="37" viewBox="0 0 74 94" fill="none">
      <G clip-path="url(#clip0_0_1)">
      <Path d="M60.0068 26.2222C53.2791 8.738 45.3469 0 36.2075 0C27.0682 0 19.5375 8.26063 12.7365 24.7929C7.62292 37.2208 3.37742 53.2565 0 72.8889H72C68.8423 54.3704 64.8491 38.8038 60.0068 26.2222Z" fill="#D9D9D9"/>
      <Path d="M36.0013 93.9999C44.7365 93.9999 51.8169 86.8394 51.8169 78.0054H20.1858C20.1858 86.8394 27.2662 93.9999 36.0013 93.9999Z" fill="#D9D9D9"/>
      </G>
      <Circle cx="60" cy="17" r="14" fill="#8AC3F9"/>
      <Defs>
      <ClipPath id="clip0_0_1">
      <Rect width="72" height="94" fill="white"/>
      </ClipPath>
      </Defs>
    </Svg>



  )
}