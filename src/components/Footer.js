import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/Styles';

export default function Footer() {
  return (
    <View style={styles.containerFooter}>
      <Text style={styles.textFooter}>
        © {new Date().getFullYear()} MegaSorte | Todos os direitos reservados.
      </Text>
    </View>
  );
}