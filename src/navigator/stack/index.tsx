import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {routesStack, RoutesProps} from '../../index';

const Stack = createStackNavigator();

export const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {routesStack.map(({component, name, title, id}: RoutesProps) => (
        <Stack.Screen
          name={name}
          options={{title}}
          component={component}
          key={id}
        />
      ))}
    </Stack.Navigator>
  );
};
