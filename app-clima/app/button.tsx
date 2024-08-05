import React, { useEffect, useState }  from "react";
import { View, StyleSheet, Text, TextInput, Image, TouchableHighlight } from "react-native";
import Header from "@/components/header";
import axios from "axios";

interface ClimaProps{
    name: string,
    description: string;
    humidity: number,
    temp: number,
    wind_speed: number,
    country: string,
    icon: string,
}

import localizacaoImage from '../assets/Localização.png';
import iconseach from '../assets/Frame 6.png';
import { useNavigation } from "@react-navigation/native";


const Button = () => {

    const [clima, setClima] = useState<ClimaProps | null>(null);

    const [cidade, setCidade] = useState("");

    useEffect(() => {
        const BuscarClima = async (cidade: String) => {
          try {
    
            const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=40ec392183f10e6fb3e9ffbd4695e542&lang=pt_br`);
    
            const dados = data.data;
            
    
            const ClimaDados: ClimaProps = {
                name: dados.name,
                description: dados.weather[0].description,
                humidity: dados.main.humidity,
                temp: dados.main.temp,
                wind_speed: dados.wind.speed,
                country: `https://flagsapi.com/${dados.sys.country}/flat/64.png`,
                icon: `http://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
            }
    
            setClima(ClimaDados); 

          } catch (error) {
            console.error("Error", error);
          }
        };

        BuscarClima(cidade);

      }, [cidade]);


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
                    // onSubmitEditing={()=>{}}
                    onChangeText={setCidade}
                    
                />
                
                <TouchableHighlight onPress={()=>{useEffect}}>
                <Image
                        style={styles.iconserchstyled}
                        source={iconseach}
                        accessibilityLabel="icon Serach"
                />
                </TouchableHighlight>

                </View>
                
                {clima != null ? ( <> <View style={styles.city}>
                    <Image
                        style={styles.cityImage}
                        source={localizacaoImage}
                        accessibilityLabel="Localização" />
                    <Text style={styles.cityName}>{clima?.name}</Text>
                    <Image
                        style={styles.cityImage}
                        source={{
                            uri: clima?.country,
                        }}
                        accessibilityLabel="Bandeira" />
                </View><Text style={styles.temperature}>{Math.floor(Number(clima?.temp))} ºC</Text><View style={styles.divtempo}>
                        <Text style={styles.tipoTempo}>{clima?.description}</Text>
                        <Image
                            style={styles.tempoImg}
                            source={{
                                uri: clima?.icon,
                            }}
                            accessibilityLabel="Bandeira" />
                    </View><View style={styles.metricas}>

                        <Text style={styles.umidade}> 💧  {clima?.humidity}%</Text>
                        <Text style={styles.barrinha}>|</Text>
                        <Text style={styles.vento}>💨  {Math.floor(Number(clima?.wind_speed) * 3.6)} Km/h</Text>
                    </View> </> ) : <Text style={styles.textoSemCidade}>Cidade ainda não encontrada</Text>}
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
        marginTop: 10,
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
        marginVertical: 25,
    },
    cityImage: {
        marginHorizontal: 15,
        height: 30,
        width: 30,
    },
    cityName: {
        fontSize: 22,
        textAlign: 'center',
        color: '#fff',
    },
    temperature: {
        fontSize: 65,
        fontWeight: '600',
        lineHeight: 77,
        textAlign: 'center',
        color: '#F29F05',
        marginVertical: 15,
    },
    divtempo:{
        display:"flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    tipoTempo: {
        fontSize: 18,
        color: '#fff',
        marginVertical: 20, 
    },
    tempoImg: {
        marginHorizontal: 5,
        height: 30,
        width: 30,
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
    },
    textoSemCidade: {
        fontSize: 18,
        color: '#fff',
        marginVertical: 35, 
    },
});

export default Button;
