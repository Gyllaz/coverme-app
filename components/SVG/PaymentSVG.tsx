import { View, Text } from 'react-native'
import { Svg, Path, G, Defs, Rect, ClipPath } from 'react-native-svg';

type SVGprops = {
  colour: string;
};

export default function PaymentSVG(props: SVGprops) {
  return (
    <Svg width="27" height="25" viewBox="0 0 64 45" fill="none">
      <G clip-path="url(#clip0_1_690)">
      <Path d="M64 8.86034V6.51511C64 2.91657 61.0777 0 57.4721 0H6.52794C2.92231 0 0 2.91657 0 6.51511V8.86034H64Z" fill={props.colour}/>
      <Path d="M0 14.752V38.4871C0 42.0857 2.92231 45.0023 6.52794 45.0023H57.4702C61.0759 45.0023 63.9982 42.0857 63.9982 38.4871V14.752H0Z" fill={props.colour}/>
      </G>
      <Defs>
      <ClipPath id="clip0_1_690">
      <Rect width="64" height="45" fill="white"/>
      </ClipPath>
      </Defs>
    </Svg>


  )
}