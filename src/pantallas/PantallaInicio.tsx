import React from 'react'
import { estilos } from '../temas/EstilosGlobales'
import 'react-native-gesture-handler';
import {  
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TextInput,
  Image,
} from 'react-native';




// interface Props extends StackScreenProps<any, any>{};

const Separator = () => <View style={estilos.separador} />;



const PantallaInicio = ({navigation}) => {

    const [text, onChangeText] = React.useState('');

  return (
<SafeAreaView style={estilos.container}>

<Image 
          style = {estilos.logo}
          source = {require('../imagenes/cafe.png')}
      />
      <Text style={estilos.bienvenidos} >BIENVENIDOS</Text>

 {/* Primer Separador */}
<Separator />

<View>     
        <TextInput
        style={estilos.entrada}
        onChangeText={onChangeText}
        value={text}
        placeholderTextColor={'black'}
        placeholder="Número de Control"
        //textAlign='center'
        />      
</View>

{/* Segundo separador */}
<Separator />
    
<View>
      <Text style={estilos.titulo}>
        Al ingresar aceptas nuestros acuerdos y condiciones.
      </Text>
      <Button
        title="INGRESAR"
        color="#f194ff"
        onPress={() => navigation.navigate('Lateral')}
        // onPress = {() => navigation.navigate('Pagina2Screen')}
      />
    </View>

{/* Tercer separador */}
<Separator />
          
<View style={estilos.ajustarTexto}>
        <Button
          title="Invitado"
          // onPress = {() => navigation.navigate('Invitado')}
          onPress={() => navigation.navigate('Invi')}
        />
        <Button
          title="Acerca de"
          onPress = {() => navigation.navigate('Detalles')}
        //   onPress={() => Alert.alert('Right button pressed')}
        />
</View>
    
</SafeAreaView>
  )
}


// const PantallaInicio = ({navigation}) => {
//   return (
//     <View style={estilos.container}>
//       <Text style={estilos.texto}>PantallaInicio</Text>
//       <Button
//           title="Ir a Detalles"
//           onPress={() => navigation.navigate('Detalles')}
//         />
//     </View>
//   )
// }

export default PantallaInicio
