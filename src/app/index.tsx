import { router } from 'expo-router'
import React, { type ReactElement } from 'react'
import { Pressable, Text, View } from 'react-native'

export default function Page (): ReactElement {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Text>This is Home page,</Text>

      <Pressable onPress={() => { router.push('/about') }}>
        <Text> go to About page.</Text>
      </Pressable>
    </View>
  )
}
