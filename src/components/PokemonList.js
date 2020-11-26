import React from 'react';
import { StyleSheet, Dimensions, View, Text } from 'react-native';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default function PokemonList({ pokemon }) {
  return (
    <View style={styles.container}>
      {pokemon.map(p => (
        <Text key={p}>{p}</Text>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: winWidth,
    height: winHeight * 0.8,
  }
})