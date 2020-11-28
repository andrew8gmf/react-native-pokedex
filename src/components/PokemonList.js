import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Dimensions, View, FlatList, Image, Text } from 'react-native';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default function PokemonList({ pokemon }) {

  renderRow = ({ item }) => {
    const imageUrl = 'https://pokeres.bastionbot.org/images/pokemon/';
    const pokemonUrl = item.url;
    const pokemonId = pokemonUrl.split('https://pokeapi.co/api/v2/pokemon/');
    const imageLink = imageUrl + pokemonId[1].substring(0, pokemonId[1].length - 1) + ".png";

    return (
      <View style={styles.item}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{ uri: imageLink }}
        />
        <Text style={styles.text}>{item.name}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemon}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        renderItem={renderRow}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: winWidth,
    height: winHeight * 0.7,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    color: 'orange',
    fontWeight:'bold',
  },
})