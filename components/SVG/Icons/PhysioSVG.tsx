import { View, Text } from 'react-native'
import { Svg, Path, G, Defs, ClipPath, Rect } from 'react-native-svg';

interface IconProps {
  colour1?: string;
  colour2?: string;
}

export default function PhysioSVG({ colour1 = '#000', colour2 = '#fff' }: IconProps) {
  return (
    <Svg width="40" height="40" viewBox="0 0 77 77" fill="none">
      <Rect width="77" height="77" rx="30" fill={`${colour1}`}/>
      <Rect x="11" y="29" width="7" height="19" rx="2" fill={`${colour2}`}/>
      <Rect x="17" y="24" width="9" height="29" rx="2" fill={`${colour2}`}/>
      <Rect width="8" height="19" rx="2" transform="matrix(-1 0 0 1 66 29)" fill={`${colour2}`}/>
      <Rect width="9" height="29" rx="2" transform="matrix(-1 0 0 1 60 24)" fill={`${colour2}`}/>
      <Rect x="24" y="35" width="28" height="8" fill={`${colour2}`}/>
    </Svg>

  )
}