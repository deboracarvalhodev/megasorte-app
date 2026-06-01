import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../styles/Styles';

export default function NumberButton({
  number,
  selected = false,
  status = 'default',
  onPress,
}) {
  const isResultMode = status !== 'default';

  return (
    <TouchableOpacity
      style={[
        styles.container,

        selected && !isResultMode && styles.containerSelected,

        status === 'correct' && styles.correct,
        status === 'wrong' && styles.wrong,
      ]}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text
        style={[
          styles.text,

          selected && !isResultMode && styles.textSelected,
          isResultMode && styles.textResult,
        ]}>
        {number}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,

    borderRadius: 24,

    backgroundColor: COLORS.surfaceSoft,

    borderWidth: 1,
    borderColor: COLORS.border,

    alignItems: 'center',
    justifyContent: 'center',
  },

  containerSelected: {
    backgroundColor: COLORS.surface,
    borderColor: COLORS.text,
  },

  text: {
    fontSize: 16,
    color: COLORS.text,
    fontFamily: FONTS.semiBold,
  },

  textSelected: {
    color: COLORS.text,
  },

  correct: {
    backgroundColor: '#2E7D32',
    borderColor: COLORS.border,
  },

  wrong: {
    backgroundColor: '#C62828',
    borderColor: COLORS.border,
  },

  textResult: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});
