import { View, Text, TouchableOpacity } from 'react-native';

export default function EsqSenha({ navigation }) {
    return (
        <View> 
            <Text>Esqueceu a Senha</Text>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                >
                <Text>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
} 
