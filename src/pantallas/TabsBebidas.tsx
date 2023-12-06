import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import pantallaNaturales from './PantallaNaturales';
import PantallaRefrescos from './PantallaRefrescos';
// import pantallaMalteadas from './PantallaMalteadas';
import PantallaNaturales2 from './PantallaNaturales2';
import PantallaMalteadas2 from './PantallaMalteadas2';
import Icon from 'react-native-vector-icons/Ionicons';
import { colores } from '../temas/EstilosGlobales';

const Tab = createMaterialTopTabNavigator();

const TabsBebidas = ({navigation}) => {
  return (
    <Tab.Navigator
    sceneContainerStyle={{
      backgroundColor: 'white'
  }}
    screenOptions={({route}) => ({
      tabBarPressColor: colores.primary,
      tabBarShowIcon: true, //Para visualizar iconos
      tabBarIndicatorStyle:{
        backgroundColor: colores.primary
    },
      tabBarLabelStyle: {
                         fontSize: 16,
                         fontStyle:'normal', 
                         fontWeight: 'bold',
                         color: 'red',
      },
                         
      // tabBarItemStyle: { width: 100 },
      tabBarStyle: { 
        backgroundColor: 'powderblue',
        // elevation: 0
       },

      tabBarIcon: ({color}) => {
        let iconName: string = '';
        switch (route.name) {
          case 'pantallaNaturales':
            iconName = 'leaf';
            break;

          case 'PantallaRefrescos':
            iconName = 'beer';
            break;

          case 'PantallaMalteadas':
            iconName = 'pint';
            break;
        }
        return <Icon name={iconName} size={20} color={colores.primary} />;
      },
    })}
    >
      <Tab.Screen name="pantallaNaturales" component={PantallaNaturales2} options={{title:'Naturales'}} />
      <Tab.Screen name="PantallaRefrescos" component={PantallaRefrescos} options={{title:'Refrescos'}} />
      <Tab.Screen name="PantallaMalteadas" component={PantallaMalteadas2} options={{title:'Malteadas'}} />
    </Tab.Navigator>
  );
}

export default TabsBebidas;