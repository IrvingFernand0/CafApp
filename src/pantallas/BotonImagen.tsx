//Image Icon Inside the React Native Button
//https://aboutreact.com/image-icon-inside-the-react-native-button/

//import React in our code
import React from 'react';

//import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { estilos } from '../temas/EstilosGlobales';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.containerImagenBoton}>
        <TouchableOpacity
          onPress={() => Alert.alert('ya estufas')}
          // style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <Image
            source={require('../imagenes/pika.png')}
            style={styles.buttonImageIconStyle}
          />
          <Text style={estilos.texto}>Menú comidas carnal</Text>
          {/* <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
            Login Using Facebook
          </Text> */}
        </TouchableOpacity> 
        {/* FIN BOTON 1 */}

        <TouchableOpacity
          // style={styles.buttonGPlusStyle}
          activeOpacity={0.5}>
          <Image
            source={require('../imagenes/fucho.jpg')}
            style={styles.buttonImageIconStyle}
          />
          <Text style={estilos.texto}>Saca las chelas</Text>
          {/* <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
            Login Using Google Plus
          </Text> */}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerImagenBoton: {
    flex: 1,
    margin: 10,
    marginTop: -20,
    padding: 30,
    // backgroundColor: 'white'
  },
  buttonGPlusStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dc4e41',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  buttonFacebookStyle: {
    alignContent: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 100,
    width: 100,
    borderRadius: 5,
    margin: 5,
    alignSelf: 'center'
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 200,
    width: 200,
    // resizeMode: 'stretch',
    alignSelf: 'center',
    marginTop: 60,
    marginBottom: 35
  },
  buttonTextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
  },
  buttonIconSeparatorStyle: {
    backgroundColor: 'yellow',
    width: 1,
    height: 40,
  },
});

export default App;