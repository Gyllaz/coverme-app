import { View, Text } from 'react-native'
import React from 'react'
import PullUpDrawer from './PullUpDrawer'
import HomeSVG from './HomeSVG'
import ChartSVG from './ChartSVG'
import ClaimSVG from './ClaimSVG'
import SettingsSVG from './SettingsSVG'

export default function NavBar() {
  return (
    <View>

      <PullUpDrawer/>
      <View className='w-full h-full bg-[#5050C2] self-baseline'>
        <View className='flex flex-row justify-center gap-[3.5rem]'>
          <HomeSVG />
          <ChartSVG />
          <ClaimSVG />
          <SettingsSVG />
        </View>

      </View>
    </View>
  )
}