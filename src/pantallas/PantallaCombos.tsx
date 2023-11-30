import { View, Text, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { estilos } from '../temas/EstilosGlobales'

const PantallaNaturales2 = ({navigation}) => {
  return (
    <View style={estilos.container}>
      <ImageBackground source={require('../imagenes/parrilla.jpg')} resizeMode="cover" style={estilos.image}>
      
      {/* -------------------PRIMERA FILA DE COMBOOS--------------------- */}
      <View style={estilos.container2}>

<TouchableOpacity
  onPress={() => Alert.alert('Agregado a la orden')}
  // style={styles.buttonGPlusStyle}
  activeOpacity={0.5}>
  <Image
    source={require('../imagenes/png/sencillo.png')}
    style={estilos.buttonImageIconStyle3}
  />
  <Text style={estilos.textoMenu3}>{`Sencillo\n$50`}</Text>
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
    source={require('../imagenes/png/clubSan.png')}
    style={estilos.buttonImageIconStyle3}
  />
  <Text style={estilos.textoMenu3}>{`Club Sandwich\n$60`}</Text>
  {/* <View style={styles.buttonIconSeparatorStyle} />
  <Text style={styles.buttonTextStyle}>
    Login Using Google Plus
  </Text> */}
</TouchableOpacity>
</View>

{/* -----------------------SEGUNDA FILA DE COMBOS----------------------------- */}
<View style={estilos.container2}>

<TouchableOpacity
  onPress={() => Alert.alert('Añadido a la orden')}
  // style={styles.buttonGPlusStyle}
  activeOpacity={0.5}>
  <Image
    source={require('../imagenes/png/comboCake.png')}
    style={estilos.buttonImageIconStyle3}
  />
  <Text style={estilos.textoMenu3}>{`Combo CehkNag\n$20`}</Text>
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
    source={require('../imagenes/png/comboCaro.png')}
    style={estilos.buttonImageIconStyle3}
  />
  <Text style={estilos.textoMenu3}>{`Combo Caro\n$80`}</Text>
  {/* <View style={styles.buttonIconSeparatorStyle} />
  <Text style={styles.buttonTextStyle}>
    Login Using Google Plus
  </Text> */}
</TouchableOpacity>

{/* --------------------TERCERA FILA DE COMBOS ---------------------*/}
</View>
<View style={estilos.container2}>

<TouchableOpacity
  onPress={() => Alert.alert('Añadido a la orden')}
  // style={styles.buttonGPlusStyle}
  activeOpacity={0.5}>
  <Image
    source={require('../imagenes/png/polloKentuky.png')}
    style={estilos.buttonImageIconStyle3}
  />
  <Text style={estilos.textoMenu3}>{`Pollo Kentuky\n$20 pz`}</Text>
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
    source={require('../imagenes/png/comboDesayuno.png')}
    style={estilos.buttonImageIconStyle3}
  />
  <Text style={estilos.textoMenu3}>{`Combo Millonario\n$90`}</Text>
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