import { View, Text } from 'react-native'
import { Svg, Path, G, Defs, ClipPath, Rect, Ellipse } from 'react-native-svg';

interface IconProps {
  colour1?: string;
  colour2?: string;
}

export default function PillSVG({ colour1 = '#000', colour2 = '#fff' }: IconProps) {
  return (
    <Svg width="40" height="40" viewBox="0 0 77 77" fill="none">
      <Rect width="77" height="77" rx="30" fill={`${colour1}`}/>
      <Rect x="44.8181" y="66.373" width="50" height="24.4835" rx="12.2417" transform="rotate(-129.848 44.8181 66.373)" fill={`${colour2}`}/>
      <Path d="M28.8053 47.1244L48 31.1068" stroke={`${colour1}`} strokeWidth="2"/>
    </Svg>

  )
}