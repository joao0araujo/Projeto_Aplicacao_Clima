import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme?.backgroundColor || '#292929'};
  display:flex;
  flex-direction:colunm;
  justify-content:space-evenly;
`;

const Button = styled.TouchableOpacity`
  width: 174px;
  height: 43px;
  background-color: #F29F05;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #FFFFFF;
  font-size: 16px;
`;

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <Container>
      <Image
        source={require('@/assets/Frame 1(1).png')} 
        style={{ width: 288, height: 219 }} 
      />

      <Button onPress={() => navigation.navigate('button')}>
        <ButtonText>Checar</ButtonText>
      </Button>
    </Container>
  );
}
