import { View, Text, Button, ImageBackground } from 'react-native'
import React from 'react'
import { estilos } from '../temas/EstilosGlobales';


const PantallaDetalles = ({ navigation }) => {
    return (
      <ImageBackground source={require('../imagenes/construccion.jpg')} resizeMode="cover" style={estilos.image}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={estilos.texto3}>EN CONSTRUCCIÓN !!!</Text>
        
      </View>
      </ImageBackground>
    );
  }

export default PantallaDetalles;