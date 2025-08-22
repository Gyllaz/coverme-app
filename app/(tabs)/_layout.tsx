import { Tabs } from 'expo-router';
import { View } from 'react-native';
import { HomeSVG, ChartSVG, ClaimSVG, SettingsSVG, TabIcon } from '@/components';
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
          height: 90,
          paddingBottom: 20,
          paddingTop: 15,
        },
        tabBarItemStyle: { width: '8%' , alignItems: 'center', justifyContent: 'center' },
        tabBarIconStyle: { marginHorizontal: -8 },
        
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <TabIcon active={focused}>
              <View className='absolute top-[-1.2rem] left-[-0.05rem]'>
                <HomeSVG />
              </View>
            </TabIcon>
          ),
        }}
      />

      <Tabs.Screen
        name="transactions"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <TabIcon active={focused}>
              <View className='absolute top-[-1.2rem] left-[-0.05rem]'>
                <ChartSVG />
              </View>
            </TabIcon>
          ),
        }}
      />

      <Tabs.Screen
        name="policy"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <TabIcon active={focused}>
              <View className='absolute top-[-1.2rem] left-[-0.05rem]'>
                <ClaimSVG />
              </View>
            </TabIcon>
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <TabIcon active={focused}>
              <View className='absolute top-[-1.2rem] left-[-0.05rem]'>
                <SettingsSVG />
              </View>
            </TabIcon>
          ),
        }}
      />
    </Tabs>
  );
}
