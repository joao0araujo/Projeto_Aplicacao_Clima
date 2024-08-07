import React from 'react';
import styled from 'styled-components/native';

interface Props {
    onGoBack: any;
    title: string;
}

const Header = (props: Props) => {
    return (
        <HeaderContainer>
            <GoBackButton onPress={props.onGoBack}>

            </GoBackButton>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
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
