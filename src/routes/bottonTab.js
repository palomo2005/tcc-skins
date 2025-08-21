import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from '../screens/Home';
import Vendas from '../screens/Vendas';
import PerfilUsuario from '../screens/Perfil';

const Tab = createBottomTabNavigator();

export default function BottonTab({ route }) {
    // Verifique se route e route.params existem antes de acessar usuTemp
    const usuTemp = route?.params?.usuTemp;

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} initialParams={{ usuTemp }} />
            <Tab.Screen name="Vendas" component={Vendas} />
            <Tab.Screen name="PerfilUsuario" component={PerfilUsuario} />
        </Tab.Navigator>
    );
}
// ...existing code...