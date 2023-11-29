import { View, Text, Button, Image, SafeAreaView, Alert, ImageBackground } from 'react-native'
import React from 'react'
import { estilos } from '../temas/EstilosGlobales'
import TouchableNativeFeedback from 'react-native-gesture-handler/lib/typescript/components/touchables/TouchableNativeFeedback.android'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'

// const Drawer = createDrawerNavigator();
// const BottomTabAndroid = createMaterialBottomTabNavigator();

const PantallaMenu = ({navigation}) => {
  return (
       <SafeAreaView style={{flex: 1}}>
      <View style={estilos.container}>
      <ImageBackground source={require('../imagenes/fondoMenu4.jpg')} resizeMode="cover" style={estilos.image}>
      {/* <Text style={estilos.text}>Inside</Text> */}
    
        <TouchableOpacity
          onPress={() => navigation.navigate('Tabs')}
          // onPress={() => Alert.alert('ya estufas')}
          // style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
            
          <Image
            source={require('../imagenes/comida2.png')}
            style={estilos.buttonImageIconStyle2}
          />
          <Text style={estilos.textoMenu}>Comidas</Text>
          {/* <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
            Login Using Facebook
          </Text> */}
        </TouchableOpacity> 
        {/* FIN BOTON 1 */}
        
        <TouchableOpacity
          onPress={() => navigation.navigate('TabsBebidas')}
          // style={styles.buttonGPlusStyle}
          activeOpacity={0.5}>
          <Image
            source={require('../imagenes/jugo.png')}
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
    </SafeAreaView>
  )
}

export default PantallaMenu