import React from 'react';
import { StyleSheet, Dimensions, View, TouchableOpacity, FlatList, Image, Text, ActivityIndicator } from 'react-native';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default function PokemonCard({ item, index }) {

    const url = item.url;
    const id = url.split('https://pokeapi.co/api/v2/pokemon/');
    const image = 'https://pokeres.bastionbot.org/images/pokemon/' + id[1].substring(0, id[1].length - 1) + ".png";

    return (
      <TouchableOpacity
        style={styles.item}
        key={index.toString()} 
        onPress={() => console.log("clicked")}
      >
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{ uri: image }}
        />
        <Text style={styles.text}>{item.name}</Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginVertical: 15,
    padding: 15,
    elevation: 5,
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