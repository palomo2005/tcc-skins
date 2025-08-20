import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from '../screens/Home';
import Vendas from '../screens/Vendas';
import PerfilUsuario from '../screens/Perfil';


const Tab = createBottomTabNavigator();

export default function BottonTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Vendas" component={Vendas} />
            <Tab.Screen name="PerfilUsuario" component={PerfilUsuario} />
        </Tab.Navigator>
    );
}