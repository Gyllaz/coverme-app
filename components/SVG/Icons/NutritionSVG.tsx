import { View, Text } from 'react-native'
import { Svg, Path, G, Defs, ClipPath, Rect, Ellipse } from 'react-native-svg';

interface IconProps {
  colour1?: string;
  colour2?: string;
}


export default function NutritionSVG({ colour1 = '#000', colour2 = '#fff' }: IconProps) {
  return (
    <Svg width="40" height="40" viewBox="0 0 77 77" fill="none">
      <Rect width="77" height="77" rx="30" fill={`${colour1}`}/>
      <Ellipse cx="30.7346" cy="41.1778" rx="15.5697" ry="19.1285" transform="rotate(-10.2841 30.7346 41.1778)" fill={`${colour2}`}/>
      <Ellipse cx="15.5697" cy="19.1285" rx="15.5697" ry="19.1285" transform="matrix(-0.983935 -0.17853 -0.17853 0.983935 64.2003 24.9395)" fill={`${colour2}`}/>
      <Ellipse cx="41.1511" cy="15.436" rx="3.15949" ry="6.38144" transform="rotate(49.7602 41.1511 15.436)" fill={`${colour2}`}/>
    </Svg>

  )
}