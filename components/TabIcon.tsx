import { View } from 'react-native';
import type { ReactNode } from 'react';

export default function TabIcon({
  active,
  children,
  size = 28,
}: {
  active: boolean;
  children: ReactNode;
  size?: number;
}) {
  return (
    <View
      style={{
        width: 150,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}

      pointerEvents="box-none"
    >

      {active && (
        <View
          pointerEvents="none"
          style={{
            position: 'absolute',
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: '#8A8AC9',
          }}
        />
      )}


      <View pointerEvents="none" style={{ width: size, height: size }} className=''>
        {children}
      </View>
    </View>
  );
}
