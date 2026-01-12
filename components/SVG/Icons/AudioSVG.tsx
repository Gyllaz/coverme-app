import { View, Text } from 'react-native'
import { Svg, Path, G, Defs, ClipPath, Rect, Ellipse } from 'react-native-svg';

interface IconProps {
  colour1?: string;
  colour2?: string;
}

export default function AudioSVG({ colour1 = '#000', colour2 = '#fff' }: IconProps) {
  return (
    <Svg width="40" height="40" viewBox="0 0 77 77" fill="none">
      <Rect width="77" height="77" rx="30" fill={`${colour1}`}/>
      <Ellipse cx="37.5" cy="34.5" rx="15.5" ry="20.5" fill={`${colour2}`}/>
      <Ellipse cx="37" cy="53" rx="9" ry="10" fill={`${colour2}`}/>
      <Ellipse cx="46.5867" cy="47.7895" rx="3.50365" ry="13.523" transform="rotate(19.4043 46.5867 47.7895)" fill={`${colour2}`}/>
      <Path d="M36.832 19.6453L37.1096 19.6453C39.8139 19.6451 42.3668 20.8937 44.027 23.0284C44.9208 24.1776 45.5142 25.5314 45.7536 26.9675L46.2446 29.9135L46.6594 32.4028C46.9106 33.9095 45.9908 35.3647 44.522 35.7843C43.6294 36.0394 42.9049 36.6929 42.5594 37.5546L41.3985 40.4507C41.0282 41.3742 41.041 42.407 41.4339 43.3211C42.088 44.8429 41.664 46.6137 40.3915 47.6741L39.1138 48.7388" stroke={`${colour1}`} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>


  )
}