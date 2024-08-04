import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import axios from 'axios';
import { Image, StyleSheet } from 'react-native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme?.backgroundColor || '#292929'};
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme?.primaryColor || '#000'};
  margin-bottom: 20px;
`;

const WeatherInfo = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme?.secondaryColor || '#666'};
`;

const Botao = styled.TouchableOpacity`
  margin: 25px;
  width: 174px;
  height: 43px;
  background-color: #F29F05;
  font-size: 18px;
  color: white;
  text-align: center;
  justify-content: center;
  border-radius: 50px;
`;

// Ajuste o tamanho da imagem aqui
const styles = StyleSheet.create({
  tinyLogo: {
    width: 150,  // Ajuste o valor conforme necessário
    height: 150, // Ajuste o valor conforme necessário
  },
});

export default function HomeScreen() {
  const [dados, setDados] = useState();

  useEffect(() => {
    const API_Clima = async () => {
      try {
        const { data } = await axios.get("https://api.openweathermap.org/data/2.5/weather?lat=13&lon=180&appid=40ec392183f10e6fb3e9ffbd4695e542&lang=pt_br");
        setDados(data.weather[0].main);
      } catch (error) {
        console.error("Error", error);
      }
    };

    API_Clima();
  }, []);

  return (
    <Container>
      <Image
        style={styles.tinyLogo}
        source={require('@/assets/Frame 1.png')} 
      />
      {/* <Title>Clima Check</Title> */}
      {/* {dados ? <WeatherInfo>{dados}</WeatherInfo> : <WeatherInfo>Loading...</WeatherInfo>} */}
      <Botao>Conferir</Botao>
    </Container>
  );
}
