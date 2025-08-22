import { Tabs } from 'expo-router';
import { View } from 'react-native';
import HomeSVG from '@/components/HomeSVG';
import ChartSVG from '@/components/ChartSVG';
import PolicySVG from '@/components/ClaimSVG';
import SettingsSVG from '@/components/SettingsSVG';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#5050C2',
        tabBarInactiveTintColor: '#8D8DAA',
        tabBarStyle: {
          backgroundColor: '#5050C2',
          borderTopColor: '#EAEAF4',
          height: 90,
          paddingBottom: 30,
          paddingTop: 15,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => (
            <View className={`w-fit h-fit`}>
              <View className='z-10'>

                <HomeSVG />

              </View>
              {color === '#8D8DAA' ? (
                <View></View>
              ) :
              (
                <View className='w-[50px] h-[50px] rounded-full bg-[#8A8AC9] absolute left-[-10px] bottom-[4px] z-0'></View>
              )}
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="transactions"
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="line-chart" color={color} size={size} />
            // Or: <ChartSVG fill={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="policy"
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="shield" color={color} size={size} />
            // Or: <PolicySVG fill={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="cog" color={color} size={size} />
            // Or: <SettingsSVG fill={color} />
          ),
        }}
      />
    </Tabs>
  );
}
