import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PantallaDesayunos from './PantallaDesayunos';
import PantallaBebidas from './PantallaBebidas';
import PantallaCombos from './PantallaCombos';

const Tab = createBottomTabNavigator();

function BotonImagen({navigation}) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="PantallaDesayunos" component={PantallaDesayunos} />
      <Tab.Screen name="PantallaBebidas" component={PantallaBebidas} />
      <Tab.Screen name="PantallaCombos" component={PantallaCombos} />
    </Tab.Navigator>
  );
}

export default BotonImagen;