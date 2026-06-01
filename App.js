import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator, View } from 'react-native';
import { BetProvider } from './src/contexts/BetContext';

import {
  useFonts,
  Sora_400Regular,
  Sora_500Medium,
  Sora_600SemiBold,
  Sora_700Bold,
} from '@expo-google-fonts/sora';

import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import InstructionsScreen from './src/screens/InstructionsScreen';
import BetTypeScreen from './src/screens/BetTypeScreen';
import BetNumbersScreen from './src/screens/BetNumbersScreen';
import LoadingDrawScreen from './src/screens/LoadingDrawScreen';
import ResultScreen from './src/screens/ResultScreen';
import CreditsScreen from './src/screens/CreditsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Sora_400Regular,
    Sora_500Medium,
    Sora_600SemiBold,
    Sora_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <BetProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Instrucoes" component={InstructionsScreen} />
          <Stack.Screen name="TipoAposta" component={BetTypeScreen} />
          <Stack.Screen name="NumerosAposta" component={BetNumbersScreen} />
          <Stack.Screen name="AnimacaoSorteio" component={LoadingDrawScreen} />
          <Stack.Screen name="Resultado" component={ResultScreen} />
          <Stack.Screen name="Creditos" component={CreditsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BetProvider>
  );
}
