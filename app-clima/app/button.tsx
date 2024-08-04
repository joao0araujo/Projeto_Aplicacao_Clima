import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "@/components/header"; 

const Button = () => {
    return (
        <View style={styles.container}>
            <Header 
                onGoBack={() => {
                    console.log('Voltar clicado');
                }} 
                title="Informações do Tempo" 
            />
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
