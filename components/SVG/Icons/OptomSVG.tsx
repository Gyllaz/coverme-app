import { View, Text } from 'react-native'
import { Svg, Path, G, Defs, ClipPath, Rect } from 'react-native-svg';

interface IconProps {
  colour1?: string;
  colour2?: string;
}


export default function OptomSVG({ colour1 = '#000', colour2 = '#fff' }: IconProps) {
  return (
    <Svg width="40" height="40" viewBox="0 0 77 77" fill="none">
      <Rect width="77" height="77" rx="30" fill={`${colour1}`}/>
      <G clip-path="url(#clip0_4198_6489)">
      <Path d="M57.0115 28.4293C54.3434 26.2755 51.4068 24.6597 48.2251 23.585C45.104 22.5308 41.7453 22 38.1727 22C31.1793 22 24.9208 24.0498 19.5685 28.0906C18.2772 29.0657 17.0524 30.1389 15.894 31.3031C13.6716 33.5376 11.6985 36.1108 10 39.0037C12.2209 42.8158 14.9525 46.1236 18.1385 48.8595C18.4189 49.1 18.7022 49.339 18.99 49.5707C24.2745 53.8359 30.6126 56 37.8273 56C41.2451 56 44.4887 55.5088 47.536 54.5367C50.7235 53.5192 53.6956 51.9752 56.4315 49.9094C60.202 47.0634 63.4175 43.3964 66 38.9963C63.5843 34.8484 60.5635 31.2958 57.01 28.4293H57.0115ZM38 47.2247C33.4283 47.2247 29.7228 43.5431 29.7228 39.0007C29.7228 34.4584 33.4283 30.7767 38 30.7767C42.5717 30.7767 46.2772 34.4584 46.2772 39.0007C46.2772 43.5431 42.5717 47.2247 38 47.2247Z" fill={`${colour2}`}/>
      </G>
      <Defs>
      <ClipPath id="clip0_4198_6489">
      <Rect width="56" height="34" fill="white" transform="translate(10 22)"/>
      </ClipPath>
      </Defs>
    </Svg>

  )
}