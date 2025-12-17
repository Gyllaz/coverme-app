import { View, TouchableOpacity } from 'react-native';
import { Svg, Path } from 'react-native-svg';

type SVGprops = {
  colour: string;
};


export default function HomeSVG(props: SVGprops) {
  return (
    <View>
        <Svg width="26" height="33" viewBox="0 0 56 63" fill="none" >
          <Path d="M28 0L0 18.3395V63H56V18.3395L28 0Z" fill={props.colour}/>
        </Svg>

    </View>
  )
}