import { Pressable, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'

export default function ActionButton({title = "", onPress = undefined}) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
        <Text>{title}</Text>
    </Pressable>
  )
}