import { View, Text } from 'react-native'
import { Svg, Path, G, Defs, Rect } from 'react-native-svg';

type SVGprops = {
  colour: string;
};


export default function StatementSVG(props: SVGprops) {
  return (
    <Svg width="27" height="61" viewBox="0 0 53 61" fill="none">
      <Path d="M26.5 27.8372L17.2872 22.169L8.07262 27.8372V0H0V60.53H53V0H26.5V27.8372Z" fill={props.colour}/>
    </Svg>


  )
}