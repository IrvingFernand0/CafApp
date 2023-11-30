import { View, Text, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { estilos } from '../temas/EstilosGlobales'

const PantallaNaturales2 = ({navigation}) => {
  return (
    <View style={estilos.container}>
      <ImageBackground source={require('../imagenes/fondoAntojos.jpg')} resizeMode="cover" style={estilos.image}>
      
      {/* -------------------PRIMERA FILA DE COMIDAS--------------------- */}
      <View style={estilos.container2}>

<TouchableOpacity
  onPress={() => Alert.alert('Agregado a la orden')}
  // style={styles.buttonGPlusStyle}
  activeOpacity={0.5}>
  <Image
    source={require('../imagenes/png/pizza.png')}
    style={estilos.buttonImageIconStyle3}
  />
  <Text style={estilos.textoMenu3}>{`Pizza \n$70`}</Text>
  {/* <View style={styles.buttonIconSeparatorStyle} />
  <Text style={styles.buttonTextStyle}>
    Login Using Google Plus
  </Text> */}
</TouchableOpacity>

<TouchableOpacity
  onPress={() => Alert.alert('Añadido a la orden')}
  // style={styles.buttonGPlusStyle}
  activeOpacity={0.5}>
  <Image
    source={require('../imagenes/png/jot.png')}
    style={estilos.buttonImageIconStyle3}
  />
  <Text style={estilos.textoMenu3}>{`Hot Dog\n$20 c/u`}</Text>
  {/* <View style={styles.buttonIconSeparatorStyle} />
  <Text style={styles.buttonTextStyle}>
    Login Using Google Plus
  </Text> */}
</TouchableOpacity>
</View>

{/* -----------------------SEGUNDA FILA DE COMIDAS----------------------------- */}
<View style={estilos.container2}>

<TouchableOpacity
  onPress={() => Alert.alert('Añadido a la orden')}
  // style={styles.buttonGPlusStyle}
  activeOpacity={0.5}>
  <Image
    source={require('../imagenes/png/sandwich.png')}
    style={estilos.buttonImageIconStyle3}
  />
  <Text style={estilos.textoMenu3}>{`Sandwich\n$30`}</Text>
  {/* <View style={styles.buttonIconSeparatorStyle} />
  <Text style={styles.buttonTextStyle}>
    Login Using Google Plus
  </Text> */}
</TouchableOpacity>

<TouchableOpacity
  onPress={() => Alert.alert('Añadido a la orden')}
  // style={styles.buttonGPlusStyle}
  activeOpacity={0.5}>
  <Image
    source={require('../imagenes/png/tacos.png')}
    style={estilos.buttonImageIconStyle3}
  />
  <Text style={estilos.textoMenu3}>{`Tacos\n$15 c/u`}</Text>
  {/* <View style={styles.buttonIconSeparatorStyle} />
  <Text style={styles.buttonTextStyle}>
    Login Using Google Plus
  </Text> */}
</TouchableOpacity>

{/* --------------------TERCERA FILA DE COMIDAS ---------------------*/}
</View>
<View style={estilos.container2}>

<TouchableOpacity
  onPress={() => Alert.alert('Añadido a la orden')}
  // style={styles.buttonGPlusStyle}
  activeOpacity={0.5}>
  <Image
    source={require('../imagenes/png/normalBurguer.png')}
    style={estilos.buttonImageIconStyle3}
  />
  <Text style={estilos.textoMenu3}>{`Hamburguesa\n$50`}</Text>
  {/* <View style={styles.buttonIconSeparatorStyle} />
  <Text style={styles.buttonTextStyle}>
    Login Using Google Plus
  </Text> */}
</TouchableOpacity>

<TouchableOpacity
  onPress={() => Alert.alert('Añadido a la orden')}
  // style={styles.buttonGPlusStyle}
  activeOpacity={0.5}>
  <Image
    source={require('../imagenes/png/tlayuda.png')}
    style={estilos.buttonImageIconStyle3}
  />
  <Text style={estilos.textoMenu3}>{`Tlayuda\n$70`}</Text>
  {/* <View style={styles.buttonIconSeparatorStyle} />
  <Text style={styles.buttonTextStyle}>
    Login Using Google Plus
  </Text> */}
</TouchableOpacity>


</View>

        {/* <Text>Ey</Text> */}

        {/* <Image
          source={require('../imagenes/jpg/cafe.png')}
          /> */}

        
      </ImageBackground>
    </View>
  )
}

export default PantallaNaturales2