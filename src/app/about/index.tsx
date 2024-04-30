import { router } from 'expo-router'
import React, { type ReactElement } from 'react'
import { Pressable, Text, View } from 'react-native'

export default function Page (): ReactElement {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Text>This is About page,</Text>

      <Pressable onPress={() => { router.push('/') }}>
        <Text> go to Home page.</Text>
      </Pressable>
    </View>
  )
}
