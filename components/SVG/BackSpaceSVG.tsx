import { View, Text } from 'react-native'
import React from 'react'
import { Svg, Path, G, Defs, ClipPath, Rect } from 'react-native-svg'

export default function BackSpaceSVG() {
  return (
    <Svg width="45" height="35" viewBox="0 0 45 70" fill="none">
      <G clip-path="url(#clip0_1_827)">
      <Path d="M44.7843 9.85462L34.9015 1.95762e-06L-0.00146143 34.8033L9.88136 44.658L44.7843 9.85462Z" fill="#105E49"/>
      <Path d="M34.9026 69.6661L44.7854 59.8115L9.88246 25.0082L-0.000372149 34.8628L34.9026 69.6661Z" fill="#105E49"/>
      </G>
      <Defs>
      <ClipPath id="clip0_1_827">
      <Rect width="69.6656" height="44.785" fill="white" transform="translate(44.785 1.95762e-06) rotate(90)"/>
      </ClipPath>
      </Defs>
    </Svg>



  )
}