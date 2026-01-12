import { View, Text } from 'react-native'
import { Svg, Path, G, Defs, ClipPath, Rect } from 'react-native-svg';

interface IconProps {
  colour1?: string;
  colour2?: string;
}

export default function DepositSVG({ colour1 = '#000', colour2 = '#fff' }: IconProps) {
  return (
    <Svg width="40" height="40" viewBox="0 0 77 77" fill="none">
      <Rect width="77" height="77" rx="30" fill={`${colour1}`}/>
      <G clip-path="url(#clip0_4184_6488)">
      <Path d="M21.79 25.929L15.0001 32.7383L38.9798 56.7866L45.7697 49.9773L21.79 25.929Z" fill={`${colour2}`}/>
      <Path d="M63.0006 32.7375L56.2107 25.9282L32.231 49.9766L39.0209 56.7859L63.0006 32.7375Z" fill={`${colour2}`}/>
      </G>
      <Defs>
      <ClipPath id="clip0_4184_6488">
      <Rect width="48" height="30.8571" fill="white" transform="translate(15 25.9287)"/>
      </ClipPath>
      </Defs>
    </Svg>

  )
}