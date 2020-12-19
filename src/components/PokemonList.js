import React from 'react';
import { StyleSheet, Dimensions, View, ActivityIndicator, ScrollView } from 'react-native';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

import PokemonCard from './PokemonCard';

export default function PokemonList({ pokemonData, loading }) {
  if (!loading) {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.pokeContainer}>
          <PokemonCard
            pokemonData={pokemonData}
          />
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size="large"
          color="#000000"
        />
      </View>
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    width: winWidth,
    height: winHeight * 0.9,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pokeContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'space-between',
    justifyContent: 'center',
    width: winWidth,
  },
})