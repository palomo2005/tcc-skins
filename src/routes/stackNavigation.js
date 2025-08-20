import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

import Login from '../screens/Login';
import CadUsuario from '../screens/CadUsuario';
import EsqSenha from '../screens/EsqSenha';
import Home from '../screens/Home';
import BottonTab from './bottonTab';
import { HeaderShownContext } from '@react-navigation/elements';

const Stack = createNativeStackNavigator();

export default function Tab() {
    return (
        <Stack.Navigator                 
            // screenOptions={{
            //     headerShown: false,
            // }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="CadUsuario" component={CadUsuario} />
            <Stack.Screen name="EsqSenha" component={EsqSenha} />
            <Stack.Screen 
                name="BottonTab" 
                component={BottonTab} 
                options={{ 
                headerShown: false, 
                headerBackVisible: false,
                gestureEnabled: false,
            }}                
            />
        </Stack.Navigator>
    );
};