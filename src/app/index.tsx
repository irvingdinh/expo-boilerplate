import { router } from 'expo-router'
import React, { type ReactElement } from 'react'
import { Dimensions, View } from 'react-native'

import { Button } from '../components/atoms/Button'
import { Text } from '../components/atoms/Text'

const { width } = Dimensions.get('screen')
export default function Page (): ReactElement {
  return (
    <View style={{ gap: 16 }}>
      <Text style={{ textAlign: 'center' }}>This is Home page</Text>

      <Button
        text="Go to About page"
        onPress={() => {
          router.push('/about')
        }}
      />

      <Button
        text="Plain"
        onPress={() => {}}
        style={{
          paddingTop: 18,
          paddingBottom: 18,
          borderWidth: 1,
          borderRadius: 9,
          borderColor: '#0000',
          backgroundColor: '#e1f0ff',
          width: width * 0.4
        }}
      />
    </View>
  )
}
