import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import pantallaNaturales from './PantallaNaturales';
import PantallaRefrescos from './PantallaRefrescos';
// import pantallaMalteadas from './PantallaMalteadas';
import PantallaNaturales2 from './PantallaNaturales2';
import PantallaMalteadas2 from './PantallaMalteadas2';

const Tab = createMaterialTopTabNavigator();

function TabsBebidas({navigation}) {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarLabelStyle: { fontSize: 12, fontStyle:'normal', color: 'red',  },
      // tabBarItemStyle: { width: 100 },
      tabBarStyle: { backgroundColor: 'powderblue' },
    }}
    >
      <Tab.Screen name="pantallaNaturales" component={PantallaNaturales2} options={{title:'Naturales'}} />
      <Tab.Screen name="PantallaRefrescos" component={PantallaRefrescos} options={{title:'Refrescos'}} />
      <Tab.Screen name="PantallaMalteadas" component={PantallaMalteadas2} options={{title:'Malteadas'}} />
    </Tab.Navigator>
  );
}

export default TabsBebidas;