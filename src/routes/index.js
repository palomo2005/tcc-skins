import {View, StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigation from './stackNavigation';

export default function Navegacao() {
    return (
        <NavigationContainer>
            <StackNavigation />
            <StatusBar style="auto" />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})