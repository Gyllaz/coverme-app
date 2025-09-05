import { View, Text } from 'react-native'
import { Svg, Path } from 'react-native-svg'

export default function DocSVG() {
  return (
    <Svg width="20" height="30" viewBox="0 0 47 54" fill="none">
      <Path d="M2.125 32V22C2.125 12.5719 2.125 7.85788 4.90748 4.92893C7.68998 2 12.1683 2 21.125 2H25.875C34.8316 2 39.3101 2 42.0924 4.92893C43.6438 6.5619 44.3302 8.74973 44.6339 12M44.875 22V32C44.875 41.428 44.875 46.1422 42.0924 49.071C39.3101 52 34.8316 52 25.875 52H21.125C12.1683 52 7.68998 52 4.90748 49.071C3.35618 47.438 2.66975 45.2502 2.36604 42" stroke="white" strokeWidth="3.672" stroke-linecap="round"/>
      <Path d="M14 32H25.875" stroke="white" strokeWidth="3.672" strokeLinecap="round"/>
      <Path d="M14 22H16.375M33 22H23.5" stroke="white" strokeWidth="3.672" strokeLinecap="round"/>
    </Svg>

  )
}