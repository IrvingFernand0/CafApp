import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { estilos } from '../temas/EstilosGlobales'


const PantallaComidas = ({navigation}) => {
  return (
    <View style={estilos.container}>
    <ImageBackground source={require('../imagenes/comidas3.jpg')} resizeMode="cover" style={estilos.image}>
      {/* <Text style={estilos.text}>Inside</Text> */}
    </ImageBackground>
    </View>
  )
}

export default PantallaComidas