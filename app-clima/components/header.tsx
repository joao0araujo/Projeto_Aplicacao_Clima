import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '@/app/_layout';

const Header = () => {
    const navigation = useNavigation<StackTypes>();
    return (
        <HeaderContainer>
            <GoBackButton onPress={()=>{navigation.navigate('index')}}/>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 10px;
    margin-top: 40px;
    
`;

const GoBackButton = styled.TouchableOpacity`
    font-size: 25px;
    transform: rotate(-135deg);
    border-top-width: 5px;
    border-right-width: 5px;
    border-color: white;
    width: 15px;
    height: 15px;
    margin-top: 10px;
    margin-left: 10px;
`;

const DarkModeButton = styled.TouchableOpacity`
    padding: 10px;
`;

export default Header;
