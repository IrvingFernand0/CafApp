import { View, Text, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { estilos } from '../temas/EstilosGlobales'

const PantallaNaturales2 = ({navigation}) => {
  return (
    <View style={estilos.container}>
      <ImageBackground source={require('../imagenes/fondoRefrescos.jpg')} resizeMode="cover" style={estilos.image}>
      
      {/* -------------------PRIMERA FILA DE REFRESCOS--------------------- */}
      <View style={estilos.container2}>

<TouchableOpacity
  onPress={() => Alert.alert('Agregado a la orden')}
  // style={styles.buttonGPlusStyle}
  activeOpacity={0.5}>
  <Image
    source={require('../imagenes/png/spriteLata.png')}
    style={estilos.buttonImageIconStyle3}
  />
  <Text style={estilos.textoMenu2}>{`Sprite lata\n$20`}</Text>
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
    source={require('../imagenes/png/monster.png')}
    style={estilos.buttonImageIconStyle3}
  />
  <Text style={estilos.textoMenu2}>{`Monster energy\n$20`}</Text>
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
    source={require('../imagenes/png/fantaLata.png')}
    style={estilos.buttonImageIconStyle3}
  />
  <Text style={estilos.textoMenu2}>{`Fanta Lata\n$20`}</Text>
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
    source={require('../imagenes/png/Redbull.png')}
    style={estilos.buttonImageIconStyle3}
  />
  <Text style={estilos.textoMenu2}>{`Redbull\n$20`}</Text>
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
    source={require('../imagenes/png/seven.png')}
    style={estilos.buttonImageIconStyle3}
  />
  <Text style={estilos.textoMenu2}>{`Seven Up\n$20`}</Text>
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
    source={require('../imagenes/png/coca600.png')}
    style={estilos.buttonImageIconStyle3}
  />
  <Text style={estilos.textoMenu2}>{`Coca cola 600 ml\n$20`}</Text>
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