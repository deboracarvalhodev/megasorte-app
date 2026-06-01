import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { styles } from '../styles/Styles';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo-megasorte.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}