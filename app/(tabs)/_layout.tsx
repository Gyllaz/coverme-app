import { Tabs } from 'expo-router';
import { View, Text } from 'react-native';
import { HomeSVG, ChartSVG, ClaimSVG, SettingsSVG } from '@/components';

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#231F20',
        tabBarInactiveTintColor: '#8D8DAA',
        tabBarStyle: {
          backgroundColor: '#F3F3F1',
          height: 90,
          paddingBottom: 20,
          paddingTop: 15,
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
        },
        tabBarItemStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <View 
              className={`w-[2.9rem] h-fit flex flex-col gap-[0.3rem] items-center ${focused ? 'opacity-100' : 'opacity-50'}`}
            >
              <HomeSVG colour={focused ? '#231F20' : '#8D8DAA'} />
              <Text style={{ color: focused ? '#231F20' : '#8D8DAA' }}>Home</Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="transactions"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <View 
              className={`w-[5.9rem] h-[3.8rem] flex flex-col gap-[0.3rem] items-center ${focused ? 'opacity-100' : 'opacity-50'}`}
            >
              <ChartSVG colour={focused ? '#231F20' : '#8D8DAA'} />
              <Text style={{ color: focused ? '#231F20' : '#8D8DAA' }}>Transactions</Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="policy"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <View
              className={`w-[3rem] h-fit flex flex-col gap-[0.3rem] items-center ${focused ? 'opacity-100' : 'opacity-50'}`}
            >
              <ClaimSVG colour={focused ? '#231F20' : '#8D8DAA'} />
              <Text style={{ color: focused ? '#231F20' : '#8D8DAA' }}>Policy</Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <View 
              className={`w-[3rem] h-fit flex flex-col gap-[0.3rem] items-center ${focused ? 'opacity-100' : 'opacity-50'}`}
            >
              <SettingsSVG colour={focused ? '#231F20' : '#8D8DAA'} />
              <Text style={{ color: focused ? '#231F20' : '#8D8DAA' }}>Profile</Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}