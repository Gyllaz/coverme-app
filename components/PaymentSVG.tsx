import { View, Text } from 'react-native'
import { Svg, Path, G, Defs, Rect } from 'react-native-svg';

export default function PaymentSVG() {
  return (
    <Svg width="30" height="46" viewBox="0 0 61 46" fill="none">
      <Path d="M52.375 2.75H8.625C5.17322 2.75 2.375 5.54822 2.375 9V37.125C2.375 40.5768 5.17322 43.375 8.625 43.375H52.375C55.8268 43.375 58.625 40.5768 58.625 37.125V9C58.625 5.54822 55.8268 2.75 52.375 2.75Z" stroke="#5050C2" strokeWidth="4.56" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M2.375 15.25H57.0625" stroke="#5050C2" strokeWidth="4.56" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M14.875 30.875H21.125" stroke="#5050C2" strokeWidth="4.56" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>

  )
}