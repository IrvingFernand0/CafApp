import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PantallaComidas from './PantallaComidas';
import PantallaBebidas from './PantallaBebidas';

const Tab = createBottomTabNavigator();

function PantallaCombos({navigation}) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Yeah" component={PantallaComidas} />
      <Tab.Screen name="Bebidas" component={PantallaBebidas} />
    </Tab.Navigator>
  );
}

export default PantallaCombos;