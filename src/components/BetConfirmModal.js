import React, { useState } from 'react';

import { View, Text, Modal, TextInput } from 'react-native';

import Button from './Button';
import NumberButton from './NumberButton';

import { styles, COLORS } from '../styles/Styles';

export default function BetConfirmModal({
  visible,
  type,
  numbers = [],
  onConfirm,
  onClose,
}) {
  const [draws, setDraws] = useState('2');

  function handleConfirm() {
    if (type === 'stubborn') {
      const value = Number(draws);

      if (value < 2 || value > 12) return;

      onConfirm({
        numbers,
        draws: value,
      });

      return;
    }

    onConfirm({
      numbers,
      draws: 1,
    });
  }

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlayPopup}>
        <View style={styles.containerPopup}>
          <Text style={styles.titlePopup}>Sua aposta é</Text>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 12,
              gap: 8,
            }}>
            {numbers.map((num) => (
              <NumberButton
                key={num}
                number={num}
                selected
                onPress={() => {}}
              />
            ))}
          </View>

          {type === 'stubborn' && (
            <>
              <Text style={styles.textPopup}>
                Insira no campo quantos sorteios consecutivos deseja participar com os mesmos números.
              </Text>

              <TextInput
                value={draws}
                onChangeText={setDraws}
                keyboardType="numeric"
                style={{
                  borderWidth: 1,
                  borderColor: COLORS.border,
                  borderRadius: 10,
                  padding: 10,
                  marginVertical: 10,
                  textAlign: 'center',
                  width: 80,
                }}
              />
            </>
          )}

          {type !== 'stubborn' && (
            <Text style={styles.textPopup}>
              Clique abaixo para confirmar seus números
            </Text>
          )}

          <Button title="Confirmar" onPress={handleConfirm} />

          <Button title="Cancelar" variant="secondary" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
}
