import { View, Text } from 'react-native'
import { Svg, Path, G, Defs, ClipPath, Rect, Ellipse } from 'react-native-svg';

interface IconProps {
  colour1?: string;
  colour2?: string;
}



export default function ChiroSVG({ colour1 = '#000', colour2 = '#fff' }: IconProps) {
  return (
    <Svg width="40" height="40" viewBox="0 0 77 77" fill="none">
      <Rect width="77" height="77" rx="30" fill={`${colour1}`}/>
      <Rect x="14" y="34" width="48" height="10" fill={`${colour2}`}/>
      <Ellipse cx="15.5" cy="34" rx="6.5" ry="6" fill={`${colour2}`}/>
      <Ellipse cx="15.5" cy="44" rx="6.5" ry="6" fill={`${colour2}`}/>
      <Ellipse cx="60.5" cy="34" rx="6.5" ry="6" fill={`${colour2}`}/>
      <Ellipse cx="60.5" cy="44" rx="6.5" ry="6" fill={`${colour2}`}/>
      <Path d="M20.5 47L22.0194 44.7209C22.326 44.261 22.8094 43.9484 23.3547 43.8576L25.5 43.5" stroke={`${colour2}`}/>
      <Path d="M20.3919 30.8582L22.0229 33.3953C22.3432 33.8935 22.8678 34.2242 23.4555 34.2982L25.9228 34.6086" stroke={`${colour2}`}/>
      <Path d="M55.5309 30.8904L53.8999 33.4275C53.5796 33.9258 53.0549 34.2564 52.4673 34.3304L50 34.6409" stroke={`${colour2}`}/>
      <Path d="M55.5309 47.2341L53.8999 44.697C53.5796 44.1987 53.0549 43.8681 52.4673 43.7941L50 43.4836" stroke={`${colour2}`}/>
    </Svg>

  )
}