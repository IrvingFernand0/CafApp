import { View, Text } from 'react-native'
import React from 'react'
import PantallaDesayunos from './PantallaDesayunos';
import PantallaComida from './PantallaComida';
import PantallaCombos from './PantallaCombos';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { colores } from '../temas/EstilosGlobales';
import { Icon } from 'react-native-paper';
import PantallaComidas from './PantallaComidas';

const BottomTabAndroid = createMaterialBottomTabNavigator();

const Tabs = ({navigation}) =>{
    return ( <TabsAndroid />)
}

const TabsAndroid = () => {
    return (
      <BottomTabAndroid.Navigator>
        <BottomTabAndroid.Screen name="PantallaDesayunos" options={{title: 'Desayunos'}} component={PantallaDesayunos} />
        <BottomTabAndroid.Screen name="PantallaComida" options={{title: 'Comidas'}} component={PantallaComidas} />
        <BottomTabAndroid.Screen name="PantallaCombos" options={{title: 'Combos'}} component={PantallaCombos} />
      </BottomTabAndroid.Navigator>
    );
  }
  
  



// const Tabs = ({navigation}) => {
//   return (
//     <View>

//     <BottomTabAndroid.Navigator>
//         <BottomTabAndroid.Screen name="PantallaDesayunos" options={{title: 'Desayunos'}} component={PantallaDesayunos} />
//         <BottomTabAndroid.Screen name="PantallaComida" options={{title: 'Comidas'}} component={PantallaComida} />
//         <BottomTabAndroid.Screen name="PantallaCombos" options={{title: 'Combos'}} component={PantallaCombos} />
//     </BottomTabAndroid.Navigator>

//     </View>
        
    
    
//   )
// }

export default Tabs