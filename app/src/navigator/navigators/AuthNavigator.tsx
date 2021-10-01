import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ScreenNames from '../../constants/ScreenNames';
import {SignIn, SignUp} from '../../screens';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name={ScreenNames.AuthScreensName.SIGN_IN}
          component={SignIn}
        />
        <Stack.Screen
          name={ScreenNames.AuthScreensName.SIGN_UP}
          component={SignUp}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
