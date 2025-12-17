import { View, TouchableOpacity } from 'react-native';
import { Svg, Path, G, Defs, ClipPath, Rect } from 'react-native-svg';

type SVGprops = {
  colour: string;
};

export default function ChartSVG(props: SVGprops) {
  return (
    <View>

        <Svg width="33" height="33" viewBox="0 0 63 63" fill="none">
          <G clip-path="url(#clip0_1_408)">
          <Path d="M17.8966 40.3027H0V62.9999H17.8966V40.3027Z" fill={props.colour}/>
          <Path d="M40.4494 23.5151H22.5527V62.9254H40.4494V23.5151Z" fill={props.colour}/>
          <Path d="M62.9999 0H45.1033V62.917H62.9999V0Z" fill={props.colour}/>
          </G>
          <Defs>
          <ClipPath id="clip0_1_408">
          <Rect width="63" height="63" fill="white"/>
          </ClipPath>
          </Defs>
        </Svg>
    </View>
  )
}