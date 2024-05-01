import React, { type ReactElement } from 'react'
import { Pressable, type StyleProp, type ViewStyle } from 'react-native'
import { type PressableProps } from 'react-native/Libraries/Components/Pressable/Pressable'

import { Text } from '../Text'

type ButtonProps = PressableProps & {
  text: string
  style?: StyleProp<ViewStyle>
}

export const Button = (props: ButtonProps): ReactElement => {
  return (
    <Pressable onPress={props.onPress} style={[props.style]}>
      <Text style={{
        textAlign: 'center',
        color: '#00254d'
      }}>{props.text}</Text>
    </Pressable>
  )
}
