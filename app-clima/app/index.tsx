import React, { useEffect, useRef } from 'react';
import { Image, StyleSheet, Animated } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from './_layout';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme?.backgroundColor || '#292929'};
  display: flex;
  flex-direction:column;
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
    
  const navigation = useNavigation<StackTypes>();

  // Criação das animações
  const fadeAnim = useRef(new Animated.Value(0)).current; 
  const scaleAnim = useRef(new Animated.Value(3)).current; 

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 2500,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
    
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
        }),
        // Animated.timing(scaleAnim, {
        //   toValue: 1,
        //   duration: 1000,
        //   useNativeDriver: true,
        // }),
      ]).start();
  }, [fadeAnim, scaleAnim]);

  return (
    <Container>
      <Image
        source={require('@/assets/Frame 1.png')} 
        style={{ width: 288, height: 219 }} 
      />

      <Button onPress={() => navigation.navigate('button')}>
        <ButtonText>Checar</ButtonText>
      </Button>
      
      <Animated.Text
        style={[
          styles.textP,
          { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }
        ]}
      >
        By: Eder Natan and João Vitor Araújo
      </Animated.Text>

      <Animated.Text
        style={[
          styles.textC,
          { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }
        ]}
      >
        Design by: Cássio Ribeiro
      </Animated.Text>
    
    </Container>
  );
}

const styles = StyleSheet.create({
  textP: {
    fontSize: 10,
    color: "#CCCCCC", 
  },

  textC: {
    fontSize: 8,
    color: "#CCCCCC", 
    marginTop: -75,
  },
});
