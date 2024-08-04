import React from 'react';
import { Stack } from 'expo-router';
import Button from './button'; 

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{ headerShown: false }} // Remove o cabeçalho de todas as telas
    >
      <Stack.Screen name="index" /> 
      
    </Stack>
  );
}
