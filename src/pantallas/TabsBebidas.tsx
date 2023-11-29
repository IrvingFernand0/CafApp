import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import pantallaNaturales from './PantallaNaturales';
import PantallaRefrescos from './PantallaRefrescos';
// import pantallaMalteadas from './PantallaMalteadas';
import PantallaNaturales2 from './PantallaNaturales2';
import PantallaMalteadas2 from './PantallaMalteadas2';

const Tab = createMaterialTopTabNavigator();

function TabsBebidas({navigation}) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="pantallaNaturales" component={PantallaNaturales2} />
      <Tab.Screen name="PantallaRefrescos" component={PantallaRefrescos} />
      <Tab.Screen name="PantallaMalteadas" component={PantallaMalteadas2} />
    </Tab.Navigator>
  );
}

export default TabsBebidas;