import { View, Text } from 'react-native'
import { Svg, Path, G, Defs, ClipPath, Rect, Ellipse } from 'react-native-svg';

interface IconProps {
  colour1?: string;
  colour2?: string;
}


export default function NaturoSVG({ colour1 = '#000', colour2 = '#fff' }: IconProps) {
  return (
    <Svg width="40" height="40" viewBox="0 0 77 77" fill="none">
      <Rect width="77" height="77" rx="30" fill={`${colour1}`}/>
      <Path d="M52.524 45.6014C46.6435 58.0937 35.5977 65.2651 27.8525 61.6192C20.1073 57.9734 18.5956 44.8908 24.4761 32.3985C29.8483 20.986 38.7784 17.574 48.288 14.7822C49.8095 14.3355 51.4164 15.1633 51.9463 16.6579C54.7893 24.6768 57.8065 34.3793 52.524 45.6014Z" fill={`${colour2}`}/>
      <Path d="M30.5528 54.7764L46.5528 22.7764" stroke={`${colour1}`} strokeWidth="2" stroke-linecap="round"/>
      <Path d="M41.4908 23.8344C41.4298 23.2855 40.9354 22.89 40.3865 22.9509C39.8376 23.0119 39.4421 23.5063 39.5031 24.0553L40.4969 23.9448L41.4908 23.8344ZM40.4969 23.9448L39.5031 24.0553L40.5031 33.0553L41.4969 32.9448L42.4908 32.8344L41.4908 23.8344L40.4969 23.9448Z" fill={`${colour1}`}/>
      <Path d="M41.7764 32.5527L49.7764 28.5527" stroke={`${colour1}`} strokeWidth="2" strokeLinecap="round"/>
      <Path d="M33.9284 30.6285C33.7233 30.1158 33.1413 29.8664 32.6285 30.0716C32.1158 30.2767 31.8664 30.8587 32.0716 31.3715L33 31L33.9284 30.6285ZM33 31L32.0716 31.3715L36.4725 42.3715L37.4009 42L38.3294 41.6285L33.9284 30.6285L33 31Z" fill={`${colour1}`}/>
      <Path d="M37.7924 41.6079L49 37.6079" stroke={`${colour1}`} strokeWidth="2" strokeLinecap="round"/>
      <Path d="M29.9284 38.6285C29.7233 38.1158 29.1413 37.8664 28.6285 38.0716C28.1158 38.2767 27.8664 38.8587 28.0716 39.3715L29 39L29.9284 38.6285ZM29 39L28.0716 39.3715L32.4725 50.3715L33.4009 50L34.3294 49.6285L29.9284 38.6285L29 39Z" fill={`${colour1}`}/>
      <Path d="M33.7924 49.6079L45 45.6079" stroke={`${colour1}`} strokeWidth="2" strokeLinecap="round"/>
    </Svg>

  )
}