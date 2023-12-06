import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { colores, estilos } from '../temas/EstilosGlobales'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import PantallaAjustes from './PantallaAjustes';
import PantallaNotificaciones from './PantallaNotificaciones';
// import { MenuLateral } from '../navegacion/MenuLateral';
import PantallaInicio from './PantallaInicio';
import PantallaMenu from './PantallaMenu';
import Tabs from './Tabs';
// import { Icon } from 'react-native-paper';
import App from '../../App';
import RNExitApp from 'react-native-exit-app';
import RNRestart from 'react-native-restart';
import { Ionicons } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';



const Drawer = createDrawerNavigator();
const handleRestartApp = () => {
  RNRestart.Restart();
};


const MenuLateral = ({navigation}) => {

 
  return (
    <Drawer.Navigator
    drawerContent={(props) => <MenuInterno {...props}/>}
    >
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
            
    <Drawer.Screen 
    name="Salir" component={PantallaInicio}  
    />


    
  </Drawer.Navigator>
      
      
//   <View>
//   <Text style={estilos.texto}>Pantalla Menu Yeahh</Text>

// </View>
  )
}

// ----------------DISEÑO INTERNO DEL MENU LATERAL ----------------

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
      <DrawerContentScrollView>
        {/* Parte del avatar */}
        <View style={estilos.avatarContainer}>
          <Image 
            source={
              require('../imagenes/png/fucho.png')
            //   {
            //   // uri: 'https://alumni.engineering.utoronto.ca/files/2022/05/Avatar-Placeholder-400x400-1.jpg'
              
            // }
          }
            style={estilos.avatar}
          />
        </View>

        {/* Opciones de menú */}
        <View style={estilos.menuContainer}>
          {/* <TouchableOpacity style={{
              ...estilos.menuBoton,
              flexDirection: 'row'
            }}
            onPress={() => navigation.navigate('Tabs')}
          >
            
            <Icon name="compass-outline" size={30} color={colores.primary} />
            <Text style={estilos.menuTexto}>Navegación</Text>
          </TouchableOpacity> */}

          
          <TouchableOpacity style={{
              ...estilos.menuBoton,
              flexDirection: 'row'
            }}
            onPress={() => navigation.navigate('Ajustes')}
          >
                <Icon name="settings-outline" size={30} color={colores.second} />
                <Text style={estilos.menuTexto}> Ajustes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{
              ...estilos.menuBoton,
              flexDirection: 'row'
            }}
            // onPress={() => navigation.navigate('SettingScreen')}
            onPress={handleRestartApp}
          >
                <Icon name="logo-react" size={30} color={colores.second} />
                <Text style={estilos.menuTexto}> Salir</Text>
          </TouchableOpacity>

        </View>
      </DrawerContentScrollView>
    )
}

export default MenuLateral;