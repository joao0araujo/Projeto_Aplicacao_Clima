import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
    onGoBack: any;
    title: string;
}

const Header = (props: Props) => {
    return (
        <HeaderContainer>
            <GoBackButton onPress={props.onGoBack}>

            </GoBackButton>
            <HeaderTitle>{props.title}</HeaderTitle>
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
    margin-top: 40px;
    gap: 18%;
`;

const GoBackButton = styled.TouchableOpacity`
    font-size: 25px;
    transform: rotate(-135deg);
    border-top-width: 5px;
    border-right-width: 5px;
    border-color: #eeeeee;
    width: 15px;
    height: 15px;
`;

const HeaderTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: white;
`;

const DarkModeButton = styled.TouchableOpacity`
    padding: 10px;
`;

export default Header;
