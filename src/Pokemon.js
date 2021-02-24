import React, { useState, useEffect }  from 'react';
import { StyleSheet, Dimensions, View, Image, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import axios from 'axios';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default function Pokemon({ route, navigation }) {
  const { pokemonId } = route.params;
  const [pokemon, setPokemon] = useState(undefined);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then(function (response) {
        const { data } = response;
        setPokemon(data);
      })
      .catch(function (error) {
        setPokemon(false);
      });
  }, [pokemonId]);

  function createPokemon(pokemon) {
    const { id, species, height, weight, types } = pokemon;
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const sprite = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;

    return (
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.imgContainer}>
            <Image
              style={styles.pokemonImg}
              resizeMode='contain'
              source={{ uri: sprite }}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.modalText}>{name}</Text>
          </View>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <>
      {pokemon === undefined && <ActivityIndicator size="large" color="#000000"/>}
      {pokemon !== undefined && pokemon && createPokemon(pokemon)}
      {pokemon === false && <Text> Pokemon not found</Text>}
    </>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    width: winWidth,
    height: winHeight * 0.70,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
  },
  imgContainer: {
    width: '50%',
    height: '50%',
    marginTop: '-40%',
  },
  pokemonImg: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    backgroundColor: 'yellow',
    width: '100%',
    padding: 20,
    flexDirection: 'row',
  },
  
  closeButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})