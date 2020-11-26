import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Dimensions, View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faFilter, faStar as fasFaStar, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons';

const winHeight = Dimensions.get('window').height;

export default function Header() {
    return (
        <SafeAreaView>
            <StatusBar backgroundColor="black"/>
            <View style={styles.header}>
                <View>
                    <Text style={styles.headerText}>Pokédex</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: winHeight * 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
})