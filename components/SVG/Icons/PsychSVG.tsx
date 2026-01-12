import { View, Text } from 'react-native'
import { Svg, Path, G, Defs, ClipPath, Rect, Ellipse } from 'react-native-svg';

interface IconProps {
  colour1?: string;
  colour2?: string;
}

export default function PsychSVG({ colour1 = '#000', colour2 = '#fff' }: IconProps) {
  return (
    <Svg width="40" height="40" viewBox="0 0 77 77" fill="none">
      <Rect width="77" height="77" rx="30" fill={`${colour1}`}/>
      <Ellipse cx="41.5" cy="30.5" rx="24.5" ry="15.5" fill={`${colour2}`}/>
      <Ellipse cx="39" cy="43" rx="17" ry="11" fill={`${colour2}`}/>
      <Ellipse cx="26" cy="38.5" rx="12" ry="17.5" fill={`${colour2}`}/>
      <Path d="M25.1965 50.9058L31.1934 51.1007L30.8685 61.0954C30.8326 62.1994 29.9085 63.0653 28.8045 63.0294L26.8056 62.9644C25.7016 62.9285 24.8357 62.0045 24.8716 60.9005L25.1965 50.9058Z" fill={`${colour2}`}/>
      <Path d="M57 44L55.0916 41.5843C53.1597 39.1389 50.4671 37.408 47.4403 36.6657L45.7314 36.2467C44.3401 35.9055 42.9046 35.7799 41.4752 35.8742L30.5534 36.5949" stroke={`${colour1}`} strokeWidth="2" strokeLinecap="round"/>
    </Svg>

  )
}