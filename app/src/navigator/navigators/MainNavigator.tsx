import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import ScreenNames from '../../constants/ScreenNames';
import {Main, Profile} from '../../screens';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name={ScreenNames.MainScreensName.MAIN} component={Main} />
        <Tab.Screen
          name={ScreenNames.MainScreensName.PROFILE}
          component={Profile}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
