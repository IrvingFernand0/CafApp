import { View, Text } from 'react-native'
import React from 'react'
import { estilos } from '../temas/EstilosGlobales'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import PantallaAjustes from './PantallaAjustes';
import PantallaNotificaciones from './PantallaNotificaciones';
// import { MenuLateral } from '../navegacion/MenuLateral';
import PantallaInicio from './PantallaInicio';
import PantallaMenu from './PantallaMenu';
import Tabs from './Tabs';

 
const Drawer = createDrawerNavigator();


const MenuLateral = ({navigation}) => {
  return (
    <Drawer.Navigator>
      {/* <Drawer.Screen name='Tabs' component={Tabs} /> */}
    <Drawer.Screen name="PantallaMenu"
                   component={PantallaMenu}
                   options={{title:'Menu',
                   headerTitleAlign: 'center',
                   headerStyle:{
                    backgroundColor: 'purple'
                   },
                   headerTintColor: '#fff',
                   headerTitleStyle:{
                    // fontFamily: 'papyrus'
                   }
                   }}  />
    <Drawer.Screen name="PantallaAjustes"
                   component={PantallaAjustes}
                   options={{title:'Preferencias',
                   headerTitleAlign: 'center',
                   headerStyle: {
                    backgroundColor: 'orange',
                   }
                  }}
                   
                   />
            
    <Drawer.Screen name="Salir" options={{title:'Salir'}} component={PantallaInicio}/>


    
  </Drawer.Navigator>
      
      
//   <View>
//   <Text style={estilos.texto}>Pantalla Menu Yeahh</Text>

// </View>
  )
}

export default MenuLateral;