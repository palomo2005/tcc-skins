import { useCallback } from 'react';
import { View, Text, Button, BackHandler } from 'react-native';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  const route = useRoute();
  const { usuTemp } = route.params;

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => true;
      const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => subscription.remove();
    }, [])
  );

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{`Bem-vindo ${usuTemp.nome}`}</Text>
      <Text>Você não pode voltar com o botão físico.</Text>
      <Button title="Voltar manualmente" onPress={() => navigation.goBack()} />
    </View>
  );
}
// ...existing code...