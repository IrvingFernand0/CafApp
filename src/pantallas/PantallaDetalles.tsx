import { View, Text, Button } from 'react-native'
import React from 'react'
import { estilos } from '../temas/EstilosGlobales';


const PantallaDetalles = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={estilos.texto}>Pantalla Detalles</Text>
        <Button
          title="Ir a Detalles... otra vez"
          onPress={() => navigation.push('Detalles')}
        />
        <Button title="Ir a Inicio" onPress={() => navigation.navigate('Inicio')} />
        <Button title="regresar" onPress={() => navigation.goBack()} />
        
      </View>
    );
  }

export default PantallaDetalles;