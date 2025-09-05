import { View, Text } from 'react-native'
import { Svg, Path, G, Defs, Rect } from 'react-native-svg';

export default function StatementSVG() {
  return (
    <Svg width="30" height="48" viewBox="0 0 60 48" fill="none">
      <Path d="M3 33H57M3 45H39M3 9H27M3 21H27M52.2 21H43.8C42.1197 21 41.2797 21 40.638 20.673C40.0734 20.3853 39.6147 19.9266 39.327 19.362C39 18.7203 39 17.8802 39 16.2V7.8C39 6.11985 39 5.27976 39.327 4.63803C39.6147 4.07355 40.0734 3.61461 40.638 3.32697C41.2797 3 42.1197 3 43.8 3H52.2C53.8803 3 54.7203 3 55.362 3.32697C55.9266 3.61461 56.3853 4.07355 56.673 4.63803C57 5.27976 57 6.11985 57 7.8V16.2C57 17.8802 57 18.7203 56.673 19.362C56.3853 19.9266 55.9266 20.3853 55.362 20.673C54.7203 21 53.8803 21 52.2 21Z" stroke="#5050C2" strokeWidth="4.64" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>

  )
}