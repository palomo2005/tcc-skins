import { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function Login() {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    const usuTemp = {
        id: 101,
        nome: 'Joriscreudo de Souza',
        email: 'joriscreudo@example.com',
        senha: '123',
        tipo: 'Cliente'
    }

    function Acesso() {
        if (email === usuTemp.email && senha === usuTemp.senha) {
            navigation.navigate('Home', {usuTemp});
        } else {
            alert('E-mail ou senha inválidos',
            [{text: 'OK', onPress: () => console.log('OK Pressed')}]
            );
        }
        setEmail('');
        setSenha('');
    }
    

    return (
        <View>
            
            <TextInput 
            style={styles.input} 
            placeholder="Digite seu e-mail"
            onChangeText={v => setEmail(v)} 
            value={email}
             />



            <TextInput 
            style={styles.input} 
            placeholder="Digite sua senha"
            onChangeText={v => setSenha(v)} 
            value={senha}
            />
            <TouchableOpacity 
                onPress={() => Acesso()}
            >
                <Text>Acessar Sistema</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => navigation.navigate('CadUsuario')}
            >
                <Text>Cadastro de usuário</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => navigation.navigate('EsqSenha')}
            >
                <Text>Esqueceu senha</Text>
            </TouchableOpacity>
        </View>
    );
}