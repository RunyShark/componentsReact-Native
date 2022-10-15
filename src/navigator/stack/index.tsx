import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, Animation01Screen, Animation02Screen} from '../../index';

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
      <Stack.Screen
        name="Animation01Screen"
        options={{title: 'Animation01Screen'}}
        component={Animation01Screen}
      />
      <Stack.Screen
        name="Animation02Screen"
        options={{title: 'Animation02Screen'}}
        component={Animation02Screen}
      />
    </Stack.Navigator>
  );
};
