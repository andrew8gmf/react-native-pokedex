import React from 'react';
import { View, Text } from 'react-native';

export default function PokemonList({ pokemon }) {
  return (
    <View>
      {pokemon.map(p => (
        <Text key={p}>{p}</Text>
      ))}
    </View>
  )
}