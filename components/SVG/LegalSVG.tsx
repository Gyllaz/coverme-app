import { View, Text } from 'react-native'
import { Svg, Path, G, Defs, Rect, ClipPath } from 'react-native-svg';

type SVGprops = {
  colour: string;
};

export default function LegalSVG(props: SVGprops) {
  return (
    <Svg width="27" height="61" viewBox="0 0 53 61" fill="none">
      <G clipPath="url(#clip0_1_722)">
      <Path d="M0 0V61H53V0H0ZM46.0167 50.6686H6.98329V43.1561H46.0167V50.6686ZM46.0167 34.2571H6.98329V26.7446H46.0167V34.2571ZM46.0167 17.8439H6.98329V10.3314H46.0167V17.8439Z" fill={props.colour}/>
      </G>
      <Defs>
      <ClipPath id="clip0_1_722">
      <Rect width="53" height="61" fill="white"/>
      </ClipPath>
      </Defs>
    </Svg>



  )
}