import { Slot } from 'expo-router'
import React, { type ReactElement } from 'react'
import { SafeAreaView } from 'react-native'

import { useColor } from '../styles/globals'

export default function Page (): ReactElement {
  const color = useColor()

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: color('white', 'black'),
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Slot/>
    </SafeAreaView>
  )
}
