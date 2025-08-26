import { Tabs } from 'expo-router';
import { View } from 'react-native';
import { HomeSVG, ChartSVG, ClaimSVG, SettingsSVG, TabIcon } from '@/components';

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
          borderWidth: 0,
          borderColor: '#5050C2',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.50,
          shadowRadius: 30,
          elevation: 10, // Android
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
