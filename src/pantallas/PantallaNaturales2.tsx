import { View, Text, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { estilos } from '../temas/EstilosGlobales'

const PantallaNaturales2 = ({navigation}) => {
  return (
    <View style={estilos.container}>
      <ImageBackground source={require('../imagenes/fondoNat.jpg')} resizeMode="cover" style={estilos.image}>
      
      {/* -------------------PRIMERA FILA DE BEBIDAS--------------------- */}
      <View style={estilos.container2}>

<TouchableOpacity
  onPress={() => Alert.alert('Agregado a la orden')}
  // style={styles.buttonGPlusStyle}
  activeOpacity={0.5}>
  <Image
    source={require('../imagenes/png/aguaSandia.png')}
    style={estilos.buttonImageIconStyle3}
  />
  <Text style={estilos.textoMenu2}>{`Agua de sandía\n$20`}</Text>
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
    source={require('../imagenes/png/jugoNaranja.png')}
    style={estilos.buttonImageIconStyle3}
  />
  <Text style={estilos.textoMenu2}>{`Jugo de naranja\n$20`}</Text>
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
    source={require('../imagenes/png/jugoTomate.png')}
    style={estilos.buttonImageIconStyle3}
  />
  <Text style={estilos.textoMenu2}>{`Jugo de tomate\n$20`}</Text>
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
    source={require('../imagenes/png/jugoVerde.png')}
    style={estilos.buttonImageIconStyle3}
  />
  <Text style={estilos.textoMenu2}>{`Jugo verde\n$20`}</Text>
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
    source={require('../imagenes/png/aguaPapaya.png')}
    style={estilos.buttonImageIconStyle3}
  />
  <Text style={estilos.textoMenu2}>{`Agua de papaya\n$20`}</Text>
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
    source={require('../imagenes/png/aguaPiña.png')}
    style={estilos.buttonImageIconStyle3}
  />
  <Text style={estilos.textoMenu2}>{`Jugo de naranja\n$20`}</Text>
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