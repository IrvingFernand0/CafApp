import { createStackNavigator } from '@react-navigation/stack';
import PantallaInicio from './PantallaInicio';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={PantallaInicio} />
      <Stack.Screen name="Notificaciones" component={Notificaciones} />
      <Stack.Screen name="Perfil" component={PantallaPerfil} />
      <Stack.Screen name="Ajustes" component={PantallaAjustes} />
    </Stack.Navigator>
  );
}