import React, { useState } from 'react';
import { StyleSheet, Dimensions, View, Modal, TouchableOpacity, Image, Text, ActivityIndicator } from 'react-native';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default function PokemonCard({ item, index }) {

    const url = item.url;
    const id = url.split('https://pokeapi.co/api/v2/pokemon/');
    const image = 'https://pokeres.bastionbot.org/images/pokemon/' + id[1].substring(0, id[1].length - 1) + ".png";

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>

                        <TouchableOpacity
                        style={styles.openButton}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}
                        >
                        <Text style={styles.textStyle}>Hide Modal</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <TouchableOpacity
                style={styles.item}
                key={index.toString()} 
                onPress={() => {
                    setModalVisible(true);
                }}
            >
                <Image
                style={styles.image}
                resizeMode="contain"
                source={{ uri: image }}
                />
                <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
        </>
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
  centeredView: {
    flex: 1,
    //position: 'absolute',
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
})