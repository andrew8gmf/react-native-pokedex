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
    const { name, id, species, height, weight, types, sprites } = pokemon;
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
          <Text style={styles.modalText}>{name}</Text>
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
    height: winHeight * 0.7,
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
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
  imgContainer: {
    width: '50%',
    height: '50%',
    textAlign: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginTop: '-25%',
  },
  pokemonImg: {
    width: '100%',
    height: '100%',
  },
})