import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Header from '../components/Header';
import App from '../pages/App';

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerTitle: () => <Header />,
        }}
      >
        <Screen
          name="App" 
          component={App} 
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;