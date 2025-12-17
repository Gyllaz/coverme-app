import { View, TouchableOpacity } from 'react-native';
import { Svg, Path } from 'react-native-svg';

type SVGprops = {
  colour: string;
};

export default function ClaimSVG(props: SVGprops) {
  return (
    <View>
        <Svg width="33" height="33" viewBox="0 0 63 63" fill="none">
          <Path d="M30.4053 10.3782H0V63H63V0H38.212L30.4053 10.3782Z" fill={props.colour}/>
        </Svg>

    </View>
  )
}