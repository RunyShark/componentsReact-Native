import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../../index';

const Stack = createStackNavigator();

export const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="HomeScreen"
        options={{title: 'HomeScreen'}}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};
