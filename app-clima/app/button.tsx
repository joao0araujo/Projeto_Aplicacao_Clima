import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "@/components/header"; 
import Content from "@/components/content";
import { useNavigation } from '@react-navigation/native';

const Button = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Header 
                onGoBack={() => {
                    navigation.navigate('index');
                }} 
                title="Informações do Tempo" 
            />
            <Content />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 10,
        backgroundColor: '#292929', 
    },
});

export default Button;
