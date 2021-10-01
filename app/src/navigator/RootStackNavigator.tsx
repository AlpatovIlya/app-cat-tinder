import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ScreenNames from '../constants/ScreenNames';
import {AuthNavigator, MainNavigator} from './navigators';

const Stack = createNativeStackNavigator();

const RootStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={ScreenNames.RootScreensName.MAIN}
          component={MainNavigator}
        />
        <Stack.Screen
          name={ScreenNames.RootScreensName.AUTH}
          component={AuthNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
