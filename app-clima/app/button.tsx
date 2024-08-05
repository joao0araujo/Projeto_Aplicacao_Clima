import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TextInput, Image } from "react-native";
import Header from "@/components/header";


import localizacaoImage from '../assets/Localização.png';
import bandeiraImage from '../assets/🇧🇷.png';
import iconseach from '../assets/Frame 6.png'
import { useNavigation } from "@react-navigation/native";


const Button = () => {
const [dado,setDado ] = useState ();
        useEffect(() => {  

            function handleStatusChange(dados) {      
                setDado(status.dado);
               }
  });

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Header 
                onGoBack={() => {
                    navigation.navigate('index');
                }} 
                title="Informações do Tempo" 
            />
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Confira o clima de uma cidade:</Text>

                <View style={styles.contentSearch}> 
                <TextInput
                    style={styles.pesquisa}
                    placeholder="Pesquise Uma Cidade"
                    placeholderTextColor="#aaa"
                />
                <Image
                        style={styles.iconserchstyled}
                        source={iconseach}
                        accessibilityLabel="icon Serach"
                    />
                </View>
                
                <View style={styles.city}>
                    <Image
                        style={styles.cityImage}
                        source={localizacaoImage}
                        accessibilityLabel="Localização"
                    />
                    <Text style={styles.cityName}>Cidade</Text>
                    <Image
                        style={styles.cityImage}
                        source={bandeiraImage}
                        accessibilityLabel="Bandeira"
                    />
                </View>
                <Text style={styles.temperature}>24 ºC</Text>
                <Text style={styles.tipoTempo}>Nublado ☁</Text>
                
                <View style={styles.metricas}>
 
                    <Text style={styles.umidade}> 💧  82%</Text>
                    <Text style={styles.barrinha}>|</Text>
                    <Text style={styles.vento}>💨  Wind</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flex: 1,
        backgroundColor: '#292929',
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        lineHeight: 31.5,
        textAlign: 'center',
        color: '#fff',
        marginBottom: 15,
    },
    pesquisa: {
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        width: '100%',
        maxWidth: 300,
        backgroundColor: '#fff',
    },
    city: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
    },
    cityImage: {
        marginHorizontal: 15,
    },
    cityName: {
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
    },
    temperature: {
        fontSize: 44,
        fontWeight: '500',
        lineHeight: 77,
        textAlign: 'center',
        color: '#F29F05',
        marginVertical: 15,
    },
    tipoTempo: {
        fontSize: 18,
        color: '#fff',
        marginVertical: 10,
        
    },
    metricas: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        gap: 20,
    },
    umidade: {
        fontSize: 16,
        color: '#fff',
        marginVertical: 5,
    },
    vento: {
        fontSize: 16,
        color: '#fff',
    },
    barrinha:{
        fontWeight:800,
        color: '#fff'
    },
    contentSearch:{
        flexDirection: 'row',
        gap:10,
        alignItems:'center',
        width: '100%',
        paddingBottom: 20,
        borderBottomWidth:2,
        borderBottomColor:"#ccc" ,
    },
    iconserchstyled:{
        width:40
    }
});

export default Button;
