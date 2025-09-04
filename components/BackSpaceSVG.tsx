import { View, Text } from 'react-native'
import React from 'react'
import { Svg, Path } from 'react-native-svg'

export default function BackSpaceSVG() {
  return (
    <Svg width="40" height="55" viewBox="0 0 93 55" fill="none">
      <Path d="M37.9116 5.20573L6.5 23.3408C3.58215 25.0942 3.61926 29.3364 6.56735 31.0385L37.9115 49.135C39.2797 49.925 40.8317 50.3408 42.4115 50.3408H80C84.9706 50.3408 89 46.3114 89 41.3408V13C89 8.02944 84.9706 4 80 4H42.4115C40.8317 4 39.2797 4.41584 37.9116 5.20573Z" fill="#5050C2" stroke="white" stroke-width="8" stroke-linecap="round"/>
      <Path d="M49 12L63.5 26.5M78 41L63.5 26.5M63.5 26.5L78 12L49 41" stroke="white" strokeWidth="5"/>
    </Svg>


  )
}