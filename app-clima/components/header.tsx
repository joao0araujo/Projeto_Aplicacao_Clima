import React from "react";
import styled from 'styled-components/native';

interface Props{
    onGoBack: any,
    title: String,
}

const Header = (Props: Props) => {
    return (
        <HeaderContainer>
            <GoBackButton onPress={Props.onGoBack}>
            </GoBackButton>
            <HeaderTitle>{Props.title}</HeaderTitle>
        </HeaderContainer>
    );
};


const HeaderContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
    border-bottom-width: 0.5px;
    border-bottom-color: #ccc;
    padding-bottom: 10px;
    margin-top:40px;
    gap: 18%;
`;

const GoBackButton = styled.TouchableOpacity`
    font-size: 25px;
    transform: rotate(-135deg);
    border-top-width: 5px;
    border-right-width: 5px;
    width: 15px;
    height: 15px;


`;

const HeaderTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: white;
`;

export default Header;
