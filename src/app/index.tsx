import { router } from 'expo-router'
import React, { type ReactElement } from 'react'
import { View } from 'react-native'

import { Button } from '../components/atoms/Button'
import { Text } from '../components/atoms/Text'

export default function Page (): ReactElement {
  return (
    <View style={{ gap: 16 }}>
      <Text>This is Home page</Text>

      <Button
        text="Go to About page"
        onPress={() => {
          router.push('/about')
        }}
      />
    </View>
  )
}
