import React, { useState }  from 'react';
import { StyleSheet, Dimensions, View, Image, Text, Modal, TouchableOpacity } from 'react-native';

import PokemonDetails from './PokemonDetails';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default function PokemonCard({ pokemonData }) {

  function createPokemonCard(pokemonId) {
    const { id, name, sprite } = pokemonData[pokemonId];
    const correctName = name[0].toUpperCase() + name.slice(1);
    const [modalVisible, setModalVisible] = useState(false);

    return (
      <View key={pokemonId}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <PokemonDetails
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
      {Object.keys(pokemonData).map(
        (pokemonId) =>
          createPokemonCard(pokemonId)
      )}
    </>
  );

}

const styles = StyleSheet.create({
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
  centeredView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    width: winWidth,
    height: winHeight * 0.5,
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
})