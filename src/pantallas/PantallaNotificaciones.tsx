import { View, Text, Button } from 'react-native'
import React from 'react'


function PantallaNotificaciones({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Ir al Inicio" />
    </View>
  );
}

export default PantallaNotificaciones