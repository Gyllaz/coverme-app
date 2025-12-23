import { View } from 'react-native'
import { Svg, Path } from 'react-native-svg';

export default function CloseSVG() {
  return (
    <Svg width="20" height="40" viewBox="0 0 78 78" fill="none">
      <Path d="M4 4L74 74" stroke="white" strokeWidth="12" strokeLinecap="round"/>
      <Path d="M74 4L4 74" stroke="white" strokeWidth="12" strokeLinecap="round"/>
    </Svg>

  )
}