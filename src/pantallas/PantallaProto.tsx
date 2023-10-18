import React from 'react';
import {
  
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TextInput,
  Image,
} from 'react-native';
import { estilos } from '../estilosGlobales/EstilosGlobales';

const Separator = () => <View style={estilos.separador} />;



export const PantallaProto = () => {

    const [text, onChangeText] = React.useState('');

  return (
  <SafeAreaView style={estilos.container}>

<Image 
          style = {estilos.logo}
          source = {require('C:/Users/Fox/Desktop/Desarrollo Movil/Proto2/cafe.png')}
      />
      <Text style={estilos.bienvenidos} >BIENVENIDOS</Text>
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

    <Separator />
    
    <View>

      <Text style={estilos.titulo}>
        Al ingresar aceptas nuestros acuerdos y condiciones.
      </Text>
      <Button
        title="INGRESAR"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </View>
    
    <Separator />
          
      <View style={estilos.ajustarTexto}>
        <Button
          title="Invitado"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          title="Acerca de"
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
    
  </SafeAreaView>
  )
}


