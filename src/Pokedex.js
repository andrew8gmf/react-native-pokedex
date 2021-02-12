import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, View, Text, ScrollView, ActivityIndicator, TouchableOpacity, Image } from 'react-native';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

import axios from 'axios';
import Header from './Header';

export default function Pokedex({ navigation }) {
  const [pokemonData, setPokemonData] = useState({});
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");

  async function getPokemon() {
    await axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=30')
      .then(function (response) {
        const { data } = response;
        const { results } = data;
        const newPokemonData = {};
        results.forEach((pokemon, index) => {
          newPokemonData[index + 1] = {
            id: index + 1,
            name: pokemon.name,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`,
          };
        });
        setPokemonData(newPokemonData);
        setLoading(false);
      });
  };

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemonCard = (pokemonId) => {
    const { id, name, sprite } = pokemonData[pokemonId];
    const correctName = name[0].toUpperCase() + name.slice(1);

    return (
      <View key={pokemonId}>
        <TouchableOpacity
          style={styles.pokemon}
          onPress={() => {
            navigation.navigate('Pokemon', { 
              pokemonId: pokemonId,
            });
          }}
        >
          <View style={styles.imgContainer}>
            <Image
              style={styles.pokemonImg}
              resizeMode='contain'
              source={{ uri: sprite }}
            />
            <View style={styles.pokemonInfo}>
              <Text style={styles.pokemonName}>{`${id}. ${correctName}`}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <Header
        filter={filter}
        setFilter={setFilter}
      />
      {loading ? (
        <View style={styles.container}>
          <ActivityIndicator
            size="large"
            color="#000000"
          />
        </View>
      ) : (
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.pokeContainer}>
            <View style={{ width: winWidth, height: winHeight * 0.1 }}/>
            {Object.keys(pokemonData).map(
              (pokemonId) =>
                pokemonData[pokemonId].name.includes(filter.toLowerCase()) &&
                getPokemonCard(pokemonId)
            )}
          </ScrollView>
        </View>  
      )}
    </>
  );
}

const styles = StyleSheet.create({
  //POKEMON LIST
  container: {
    width: winWidth,
    height: winHeight,
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
    paddingBottom: 50,
  },

  //POKEMON CARD
  pokemon: {
    backgroundColor: '#eee',
    borderRadius: 20,
    margin: 10,
    padding: 20,
    textAlign: 'center',
  },
  imgContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 120/2,
    width: 120,
    height: 120,
    textAlign: 'center',
    alignItems: 'center',
  },
  pokemonImg: {
    width: '100%',
    height: '100%',
  },
  pokemonInfo: {
    textAlign: 'center',
  },
  pokemonNumber: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    padding: 5,
  },
  pokemonName: {
    letterSpacing: 1,
  },
})