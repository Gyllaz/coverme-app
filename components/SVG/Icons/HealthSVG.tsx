import { View, Text } from 'react-native'
import { Svg, Path, G, Defs, ClipPath, Rect, Ellipse } from 'react-native-svg';

interface IconProps {
  colour1?: string;
  colour2?: string;
}


export default function HealthSVG({ colour1 = '#000', colour2 = '#fff' }: IconProps) {
  return (
    <Svg width="40" height="40" viewBox="0 0 77 77" fill="none">
      <Rect width="77" height="77" rx="30" fill={`${colour1}`}/>
      <G clip-path="url(#clip0_4208_6490)">
      <Path d="M61 34.4882H44.5118V18H31.4882V34.4882H15V47.5118H31.4882V64H44.5118V47.5118H61V34.4882Z" fill={`${colour2}`}/>
      </G>
      <Defs>
      <ClipPath id="clip0_4208_6490">
      <Rect width="46" height="46" fill={`${colour2}`} transform="translate(15 18)"/>
      </ClipPath>
      </Defs>
    </Svg>

  )
}