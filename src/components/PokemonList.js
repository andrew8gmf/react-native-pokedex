import React from 'react';
import { StyleSheet, Dimensions, View, TouchableOpacity, FlatList, Image, Text, ActivityIndicator } from 'react-native';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

import PokemonCard from './PokemonCard';

export default function PokemonList({ pokemons, handleLoadMore, loading }) {

  const renderRow = ({ item, index }) => {
    return (
      <PokemonCard
        item={item}
        index={index}
      />
    );
  };

  const renderFooter = () => {
    return (
      loading ? (
        <ActivityIndicator color="white" />
      ) : null
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemons}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        initialNumToRender={8}
        renderItem={renderRow}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: winWidth,
    height: winHeight * 0.9,
  }
})