import React from 'react'
import { estilos } from '../temas/EstilosGlobales'
import 'react-native-gesture-handler';
import appFirebase from '../../credenciales';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import {  
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Props } from 'react-native-paper/lib/typescript/core/PaperProvider';



// interface Props extends StackScreenProps<any, any>{};
const auth = getAuth(appFirebase)
const Separator = () => <View style={estilos.separador} />;



const PantallaInicio = (props) => {

    // const [text, onChangeText] = React.useState('');
    // const [texto, onChangeTexto] = React.useState('');

    //creamos la variable de estado
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const logueo = async () => {
      try {
        await signInWithEmailAndPassword(auth, email, password)
        Alert.alert('Iniciando sesión')
        props.navigation.navigate('Lateral')
        
      } catch (error) {
        console.log(error);
        Alert.alert('Error', 'El usuario o la contraseña son incorrectos')
      }
    }

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
        onChangeText={(text) => setEmail(text)}
        // value={text}
        placeholderTextColor={'black'}
        placeholder="Correo Institucional"
        //textAlign='center'
        
        />      
</View>

<View>     
        <TextInput
        style={estilos.entrada}
        onChangeText={(text) => setPassword(text)}
        // value={texto}
        placeholderTextColor={'black'}
        placeholder="Contraseña"
        secureTextEntry={true}
        //textAlign='center'
        />      
</View>

{/* Segundo separador */}
<Separator />
    
<View>
      <Text style={estilos.titulo}>
        Al ingresar aceptas nuestros acuerdos y condiciones.
      </Text>
      <TouchableOpacity        
        style={estilos.botonIngresar}
        onPress={logueo}
        // onPress = {() => navigation.navigate('Pagina2Screen')}
        >
          <Text style={estilos.texto2}>INGRESAR</Text>
        </TouchableOpacity>
    </View>

{/* Tercer separador */}
<Separator />
          
{/* <View style={estilos.ajustarTexto}>
        <Button
          title="   Invitado   "
          // onPress = {() => navigation.navigate('Invitado')}
          onPress={() => navigation.navigate('Invi')}
        />
        <Button
          title="Acerca de"
          onPress = {() => navigation.navigate('Detalles')}
        //   onPress={() => Alert.alert('Right button pressed')}
        />
</View> */}
    
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
