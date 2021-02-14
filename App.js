import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Pokedex from './src/Pokedex';
import Pokemon from './src/Pokemon';

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: 'transparent' },
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange: [0, 0.25, 0.7, 1],
              }),
            },
            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
                extrapolate: 'clamp',
              }),
            },
          }),
        }}
        mode="modal"
      >
        <Screen
          name="Pokedex" 
          component={Pokedex} 
        />
        <Screen
          name="Pokemon" 
          component={Pokemon}
          options={{
            ...TransitionPresets.ModalSlideFromBottomIOS,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;