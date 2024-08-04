import React from "react";
import styled from 'styled-components/native';

export default function Content(){
    return(
        <>
        <div>
        <TextoInicio>Confira o clima de uma cidade:</TextoInicio>
        <div >
          <input
          type="text"
          placeholder="Digite o nome da cidade"
        />

        </div>
      </div>
        </>
    )
}


const TextoInicio = styled.Text`
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 10px;
    margin-top:40px;
`;