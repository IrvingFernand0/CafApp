import { View, Text } from 'react-native'
import React from 'react'
import PantallaDesayunos from './PantallaDesayunos';
import PantallaComida from './PantallaComida';
import PantallaCombos from './PantallaCombos';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { colores } from '../temas/EstilosGlobales';
import Icon from 'react-native-vector-icons/Ionicons';
import PantallaComidas from './PantallaComidas';


const BottomTabAndroid = createMaterialBottomTabNavigator();

const Tabs = ({navigation}) =>{
    return ( <TabsAndroid />)
}

const TabsAndroid = () => {
    return (
      <BottomTabAndroid.Navigator 
      screenOptions={({route}) => ({    
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
            borderTopColor: colores.primary,
            borderTopWidth: 0,
            elevation: 0
        },
        tabBarLabelStyle:{
            fontSize: 15
        },
        
        tabBarIcon:({color, focused}) =>{

            let iconName: string = '';
            switch (route.name) {
                case 'PantallaDesayunos':
                    iconName = 'restaurant-outline';
                    break;
                case 'PantallaComida':
                    iconName = 'pizza-outline';
                    break;
                case 'PantallaCombos':
                    iconName = 'fast-food-outline';
                    break;
            }
            return <Icon name={iconName} size={20} color={colores.primary} />
        }
    })}
    sceneAnimationEnabled = {true}
    activeColor="#f0edf6"
    inactiveColor="#3e2465"
    barStyle={{ backgroundColor: colores.third }}
      >
        <BottomTabAndroid.Screen name="PantallaDesayunos" options={{title: 'Desayunos'}} component={PantallaDesayunos} />
        <BottomTabAndroid.Screen name="PantallaComida" options={{title: 'Antojos'}} component={PantallaComidas} />
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