import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Dimensions, View, Text, TextInput, ScrollView, ActivityIndicator, TouchableOpacity, Image, Modal } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faFilter, faStar as fasFaStar, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

import axios from 'axios';
import Pokemon from './Pokemon';

export default function Pokedex() {
  const [pokemonData, setPokemonData] = useState({});
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

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
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <Pokemon
            pokemonId={pokemonId}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        </Modal>

        <TouchableOpacity
          style={styles.pokemon}
          onPress={() => {
            setModalVisible(true);
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
      <SafeAreaView>
        <StatusBar backgroundColor="black" />
        <View style={styles.header}>
          <View style={styles.headerBar}>
            <View style={styles.searchBar}>
              <FontAwesomeIcon icon={faBars} color='white' />
              <TextInput style={styles.search} placeholder='Search' placeholderTextColor='white' value={filter} onChangeText={setFilter}></TextInput>
            </View>
            <View style={styles.icons}>
              <FontAwesomeIcon icon={faFilter} color='white' />
              <FontAwesomeIcon icon={fasFaStar} color='white' />
              <FontAwesomeIcon icon={faEllipsisV} color='white' />
            </View>
          </View>
        </View>
      </SafeAreaView>
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
  //HEADER
  header: {
    width: winWidth,
    height: winHeight * 0.1,
    zIndex: 1,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerBar: {
    width: '92%',
    height: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: 'black',
    borderRadius: 5,
  },
  searchBar: {
    width: '65%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  search: {
    width: '100%',
    marginLeft: '8%',
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    letterSpacing: 1,
  },
  icons: {
    width: '20%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
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