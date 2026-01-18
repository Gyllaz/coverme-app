import { View, Text } from 'react-native'
import { Svg, Path } from 'react-native-svg';

type SVGprops = {
  colour: string;
};

export default function SupportSVG(props: SVGprops) {
  return (
    <Svg width="27" height="54" viewBox="0 0 54 54" fill="none">
      <Path d="M0 54L17.2148 39.767H54V0H0V54Z" fill={props.colour}/>
    </Svg>


  )
}