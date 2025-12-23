import { View, TouchableOpacity } from 'react-native';
import { Svg, Path } from 'react-native-svg';

type SVGprops = {
  colour: string;
};

export default function SettingsSVG(props: SVGprops) {


  return (
    <View>

        <Svg width="27" height="33" viewBox="0 0 60 68" fill="none">
          <Path d="M30.0325 36.2734C22.6939 36.2734 16.2063 39.8396 10.5659 46.9739C6.32242 52.3384 2.80176 59.2599 0 67.7324H59.721C57.1019 59.7411 53.7891 53.021 49.773 47.5912C44.1928 40.0447 37.6139 36.2734 30.0325 36.2734Z" fill={props.colour}/>
          <Path d="M45.0509 19.8496C46.4123 11.5736 40.717 3.77552 32.3302 2.43214C23.9434 1.08876 16.041 6.70875 14.6796 14.9847C13.3182 23.2607 19.0135 31.0588 27.4003 32.4021C35.7871 33.7455 43.6895 28.1255 45.0509 19.8496Z" fill={props.colour}/>
        </Svg>
    </View>
  )
}