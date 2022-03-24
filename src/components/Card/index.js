import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import styles from './styles'

const Card = ({suit,value,image}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={{uri:image.replace("http","https")}}/>
    </View>
  )
}

export default Card
