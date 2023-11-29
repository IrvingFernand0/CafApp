import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { estilos } from '../temas/EstilosGlobales'

const PantallaNaturales2 = ({navigation}) => {
  return (
    <View style={estilos.container}>
      <ImageBackground source={require('../imagenes/fondoCafe.jpg')} resizeMode="cover" style={estilos.image}>
        {/* <Text>Ey</Text> */}

        {/* <Image
          source={require('../imagenes/jpg/cafe.png')}
          /> */}

<TouchableOpacity
          onPress={() => navigation.navigate('Bebidas')}
          // style={styles.buttonGPlusStyle}
          activeOpacity={0.5}>
          <Image
            source={require('../imagenes/png/spriteLata.png')}
            style={estilos.buttonImageIconStyle}
          />
          <Text style={estilos.textoMenu}>Bebidas</Text>
          {/* <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
            Login Using Google Plus
          </Text> */}
        </TouchableOpacity>
        
      </ImageBackground>
    </View>
  )
}

export default PantallaNaturales2