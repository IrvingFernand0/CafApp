import * as React from 'react';
import { Button, View, Text, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import PantallaDetalles from './src/pantallas/PantallaDetalles';
import PantallaInicio from './src/pantallas/PantallaInicio';
import PantallaMenu from './src/pantallas/PantallaMenu';
import PantallaNotificaciones from './src/pantallas/PantallaNotificaciones';
import PantallaInvit from './src/pantallas/PantallaInvit';
import PantallaAjustes from './src/pantallas/PantallaAjustes';
import MenuLateral from './src/pantallas/MenuLateral';
import BotonImagen from './src/pantallas/BotonImagen';
import PantallaBebidas from './src/pantallas/PantallaBebidas';
import PantallaComidas from './src/pantallas/PantallaComidas';




const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

function App() {
  return (
    // <BotonImagen /> 
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" 
                      component={PantallaInicio}
                      options={{ title: 'CoffApp',
                      headerShown: false,
                      headerTitleAlign: 'center',
                      headerStyle: {
                           backgroundColor: 'purple',
                        },
                      // headerTintColor: '#fff',
                      headerTitleStyle: {
                        // fontFamily: 'Cochin',
                        fontWeight: 'bold',
                        color:'red',

                      },
                       }}
        />
        <Stack.Screen name="Detalles" component={PantallaDetalles} />
        <Stack.Screen name="Invi" component={PantallaInvit} />
        <Stack.Screen name="Lateral" component={MenuLateral} options={{headerShown: false}}/>
        <Stack.Screen name="Ajustes" component={PantallaAjustes} />
        <Stack.Screen name="Bebidas" component={PantallaBebidas} />
        <Stack.Screen name="Comidas" component={PantallaComidas} />
        <Stack.Screen name="Menu" component={PantallaMenu}
                      options={{ title: 'Menú',
                      headerTitleAlign: 'center',
                      headerShown: false,
                      headerStyle: {
                        backgroundColor: 'purple',
                      },
                        headerTintColor: '#fff',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      },
                    }}
                      />
      </Stack.Navigator>
      
    </NavigationContainer>
    
  );
}

export default App;
