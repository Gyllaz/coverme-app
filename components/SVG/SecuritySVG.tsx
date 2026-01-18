import { View, Text } from 'react-native'
import { Svg, Path, G, Defs, Rect, ClipPath } from 'react-native-svg';

type SVGprops = {
  colour: string;
};

export default function SecuritySVG(props: SVGprops) {
  return (
    <Svg width="27" height="58" viewBox="0 0 52 58" fill="none">
      <G clipPath="url(#clip0_1_720)">
      <Path d="M52 10.3041C48.0107 6.28028 45.7736 4.0238 41.7843 0H10.2156C6.22638 4.0238 3.98927 6.28028 0 10.3041V15.003C0.0514851 25.6337 3.18378 35.1555 9.31383 43.3069C10.8052 45.2904 12.4461 47.1699 14.2265 48.949C17.6445 52.363 21.5806 55.3917 26.005 58C31.8361 54.5893 36.8933 50.3946 41.0802 45.5031C41.4489 45.0726 41.8126 44.6387 42.168 44.1965C48.6917 36.0818 52 26.349 52 15.2693C52 15.1805 51.995 15.0934 51.995 15.0046H52V10.3057V10.3041Z" fill={props.colour}/>
      </G>
      <Defs>
      <ClipPath id="clip0_1_720">
      <Rect width="52" height="58" fill="white"/>
      </ClipPath>
      </Defs>
    </Svg>


  )
}