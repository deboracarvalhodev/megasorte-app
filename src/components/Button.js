import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { styles } from '../styles/Styles';

export default function Button({ title, onPress, variant = 'primary' }) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'secondary' && styles.secondary,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          variant === 'secondary' && styles.textSecondary,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}