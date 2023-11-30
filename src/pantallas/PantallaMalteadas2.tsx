import { View, Text, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { estilos } from '../temas/EstilosGlobales'

const PantallaNaturales2 = ({navigation}) => {
  return (
    <View style={estilos.container}>
      <ImageBackground source={require('../imagenes/fondoMaltas.jpg')} resizeMode="cover" style={estilos.image}>
      
      {/* -------------------PRIMERA FILA DE BEBIDAS--------------------- */}
      <View style={estilos.container2}>

<TouchableOpacity
  onPress={() => Alert.alert('Agregado a la orden')}
  // style={styles.buttonGPlusStyle}
  activeOpacity={0.5}>
  <Image
    source={require('../imagenes/png/maltaChoco.png')}
    style={estilos.buttonImageIconStyle3}
  />
  <Text style={estilos.textoMenu2}>{`Malteda Chocolate\n$20`}</Text>
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
    source={require('../imagenes/png/maltaFresa.png')}
    style={estilos.buttonImageIconStyle3}
  />
  <Text style={estilos.textoMenu2}>{`Malteada Fresa\n$20`}</Text>
  {/* <View style={styles.buttonIconSeparatorStyle} />
  <Text style={styles.buttonTextStyle}>
    Login Using Google Plus
  </Text> */}
</TouchableOpacity>
</View>

{/* -----------------------SEGUNDA FILA DE BEBIDAS----------------------------- */}
<View style={estilos.container2}>

<TouchableOpacity
  onPress={() => Alert.alert('Añadido a la orden')}
  // style={styles.buttonGPlusStyle}
  activeOpacity={0.5}>
  <Image
    source={require('../imagenes/png/maltaVainilla.png')}
    style={estilos.buttonImageIconStyle3}
  />
  <Text style={estilos.textoMenu2}>{`Malteada Vainilla\n$20`}</Text>
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
    source={require('../imagenes/png/heladoVainilla.png')}
    style={estilos.buttonImageIconStyle3}
  />
  <Text style={estilos.textoMenu2}>{`Helado Vainilla\n$20`}</Text>
  {/* <View style={styles.buttonIconSeparatorStyle} />
  <Text style={styles.buttonTextStyle}>
    Login Using Google Plus
  </Text> */}
</TouchableOpacity>

{/* --------------------TERCERA FILA DE BEBIDAS ---------------------*/}
</View>
<View style={estilos.container2}>

<TouchableOpacity
  onPress={() => Alert.alert('Añadido a la orden')}
  // style={styles.buttonGPlusStyle}
  activeOpacity={0.5}>
  <Image
    source={require('../imagenes/png/mangoFrozen.png')}
    style={estilos.buttonImageIconStyle3}
  />
  <Text style={estilos.textoMenu2}>{`Mango Frozen\n$20`}</Text>
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
    source={require('../imagenes/png/tejate.png')}
    style={estilos.buttonImageIconStyle3}
  />
  <Text style={estilos.textoMenu2}>{`Tejate\n$20`}</Text>
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