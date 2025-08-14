import {View, Text, TouchableOpacity} from 'react-native';

export default function EsqSenha({navigation}) {
    return(
        <View>
            <Text>Esqueci minha senha</Text>
            <TouchableOpacity 
                    onPress={() => navigation.goBack()}
            >
                    <Text>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}