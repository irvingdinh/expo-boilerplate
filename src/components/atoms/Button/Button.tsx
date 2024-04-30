import React, { type ReactElement } from 'react'
import { Pressable } from 'react-native'

import { Text } from '../Text'

interface ButtonProps {
  text: string
  onPress: () => void
}

export const Button = (props: ButtonProps): ReactElement => {
  return (
    <Pressable onPress={props.onPress}>
      <Text>{props.text}</Text>
    </Pressable>
  )
}
