import React from 'react';
import { View, Image } from 'react-native';
import { styles } from '../styles/Styles';

export default function Header() {
  return (
    <View style={styles.containerHeader}>
      <Image
        source={require('../assets/logo-megasorte.png')}
        style={styles.logoHeader}
        resizeMode="contain"
      />
    </View>
  );
}