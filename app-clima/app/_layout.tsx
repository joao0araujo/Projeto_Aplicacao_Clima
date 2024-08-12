import React from 'react';
import index from '@/app/index'
import button from '@/app/button'
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

type StackNavigation = {
  index: undefined;
  button: undefined;
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default function RootLayout() {
  return (

    <Stack.Navigator
    screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="index" component={index} />
      <Stack.Screen name="button" component={button} />
    </Stack.Navigator>

  );
}
