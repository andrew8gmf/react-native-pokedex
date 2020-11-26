import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Dimensions, View, TextInput, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faFilter, faStar as fasFaStar, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default function Header() {
    return (
        <SafeAreaView>
            <StatusBar backgroundColor="black"/>
            <View style={styles.header}>
                <View style={styles.headerBar}>
                    <View style={styles.searchBar}>
                        <FontAwesomeIcon icon={ faBars } color='white' />
                        <TextInput style={styles.search} placeholder='Search' placeholderTextColor='white'></TextInput>
                    </View>
                    <View style={styles.icons}>
                        <FontAwesomeIcon icon={ faFilter } color='white' />
                        <FontAwesomeIcon icon={ fasFaStar } color='white' />
                        <FontAwesomeIcon icon={ faEllipsisV } color='white' />
                    </View>            
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        width: winWidth,
        height: winHeight * 0.1,
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
})