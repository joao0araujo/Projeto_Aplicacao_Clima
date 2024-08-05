import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  padding: 20px;
`;

const Title = styled.h1`
  margin: 0;
  padding: 10px;
 


  font-family: 'Montserrat',sans-serif;
font-size: 18px;
font-weight: 500;
line-height: 31.5px;
text-align: left;
color: #ffff;
`;

const City = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 10px;
`;

const CityImage = styled.img`
  
  margin: 0 10px; 
`;

const CityName = styled.h2`
  margin: 0;
  font-size: 20px;
  text-align: center; 
`;

const Temperature = styled.h2`
  margin: 0;
  padding: 10px;


  font-family: 'Montserrat', sans-serif;
font-size: 44px;
font-weight: 500;
line-height: 77px;
text-align: center;

color:#F29F05;

`;

const TipoTempo = styled.h2`
  margin: 0;
  padding: 10px;
`;

const Metricas = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Umidade = styled.h3`
  margin: 0;
  padding: 5px;
`;

const Vento = styled.h3`
  margin: 0;
  padding: 5px;
`;

const Pesquisa = styled.input`
  padding: 8px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
`;

export default function Content() {
  return (
    <Container>
      <Title>Confira o clima de uma cidade:</Title>
      <Pesquisa type="text" placeholder="Pesquise Uma Cidade" />
      <City>
        <CityImage src="/assets/Localização.png" alt="Localização" />
        <CityName>Cidade</CityName>
        <CityImage src="/assets/🇧🇷.png" alt="Bandeira" />
      </City>
      <Temperature>24 ºC</Temperature>
      <TipoTempo>Weather Type</TipoTempo>
      <Metricas>
        <Umidade>Humidity</Umidade>
        <Vento>Wind</Vento>
      </Metricas>
    </Container>
  );
}
