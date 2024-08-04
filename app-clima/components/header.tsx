import React from "react";
import { TouchableOpacity } from "react-native";
import styled from 'styled-components/native';

const Header = ({ onGoBack, title }) => {
    return (
        <HeaderContainer>
            <GoBackButton onPress={onGoBack}>
                <GoBackText> Voltar </GoBackText>
            </GoBackButton>
            <HeaderTitle>{title}</HeaderTitle>
        </HeaderContainer>
    );
};


const HeaderContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
    border-bottom-width: 1px;
    border-bottom-color: #ccc;
    padding-bottom: 10px;
    margin-top:60px;
`;

const GoBackButton = styled.TouchableOpacity``;

const GoBackText = styled.Text`
    color: #007BFF;
    font-size: 16px;
    margin-right: 20px;
`;

const HeaderTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;

export default Header;
