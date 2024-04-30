import { Slot } from 'expo-router'
import React, { type ReactElement } from 'react'
import { StyleSheet, View } from 'react-native'

export default function Page (): ReactElement {
  return (
    <View style={styles.container}>
      <Slot/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
