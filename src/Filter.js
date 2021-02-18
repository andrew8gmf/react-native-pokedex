import React, { useState, useEffect }  from 'react';
import { StyleSheet, Dimensions, View, Image, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

import { useNavigation } from '@react-navigation/native';

export default function Filter() {
    const { navigate } = useNavigation();

    return (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Filtros</Text>
                <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => {
                        navigate('Pokedex');
                    }}
                >
                    <Text style={styles.textStyle}>Hide Modal</Text>
                </TouchableOpacity>
            </View>
        </View>
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