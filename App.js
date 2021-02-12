import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Pokedex from './src/Pokedex';
import Pokemon from './src/Pokemon';

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen
          name="Pokedex" 
          component={Pokedex} 
        />
        <Screen
          name="Pokemon" 
          component={Pokemon} 
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;