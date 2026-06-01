import React, { useState } from 'react';

import { View, Text, ScrollView } from 'react-native';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import NumberButton from '../components/NumberButton';
import Popup from '../components/Popup';
import BetConfirmModal from '../components/BetConfirmModal';

import { styles } from '../styles/BetNumbersStyles';
import { validateBet } from '../services/validateBet';

export default function BetNumbersScreen({ navigation, route }) {
  const { type } = route.params;

  const [selectedNumbers, setSelectedNumbers] = useState([]);

  const [popupData, setPopupData] = useState({
    visible: false,
    title: '',
    description: '',
    image: 'thinking',
  });

  const [confirmModal, setConfirmModal] = useState(false);

  function handleSelectNumber(number) {
    if (type === 'surprise') {
      setPopupData({
        visible: true,
        title: 'Surpresinha ativada',
        description: 'Neste modo os números são gerados automaticamente.',
        image: 'thinking',
      });

      return;
    }

    const alreadySelected = selectedNumbers.includes(number);

    if (alreadySelected) {
      setSelectedNumbers(selectedNumbers.filter((item) => item !== number));
      return;
    }

    if (selectedNumbers.length >= 20) return;

    setSelectedNumbers([...selectedNumbers, number]);
  }

  function handleGenerateRandomNumbers() {
    let randomNumbers = [];

    while (randomNumbers.length < 6) {
      const random = Math.floor(Math.random() * 60) + 1;

      if (!randomNumbers.includes(random)) {
        randomNumbers.push(random);
      }
    }

    setSelectedNumbers(randomNumbers.sort((a, b) => a - b));
  }

  function handleContinue() {
    const result = validateBet(selectedNumbers);

    if (!result.valid) {
      setPopupData({
        visible: true,
        title: 'Atenção',
        description: result.message,
        image: 'sad',
      });
      return;
    }

    setConfirmModal(true);
  }

  function renderNumbers() {
    const numbers = [];

    for (let i = 1; i <= 60; i++) {
      const selected = selectedNumbers.includes(i);

      numbers.push(
        <NumberButton
          key={i}
          number={i}
          selected={selectedNumbers.includes(i)}
          onPress={() => handleSelectNumber(i)}
        />
      );
    }

    return numbers;
  }

  return (
    <View style={styles.container}>
      <Header />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Escolha seus números</Text>

        <Text style={styles.description}>
          Selecione entre 6 e 20 números para realizar sua aposta.
        </Text>

        <View style={styles.infoContainer}>
          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Tipo</Text>

            <Text style={styles.infoValue}>
              {type === 'common'
                ? 'Comum'
                : type === 'surprise'
                ? 'Surpresinha'
                : 'Teimosinha'}
            </Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Selecionados</Text>

            <Text style={styles.infoValue}>{selectedNumbers.length}</Text>
          </View>
        </View>

        {type === 'surprise' && (
          <Button
            title="Gerar números automaticamente"
            onPress={handleGenerateRandomNumbers}
          />
        )}

        <View style={styles.numbersContainer}>{renderNumbers()}</View>

        <View style={styles.buttonsContainer}>
          <Button
            title="Voltar"
            variant="secondary"
            onPress={() => navigation.goBack()}
          />

          <Button title="Continuar" onPress={handleContinue} />
        </View>
      </ScrollView>

      <Footer />

      <Popup
        visible={popupData.visible}
        title={popupData.title}
        description={popupData.description}
        image={popupData.image}
        onClose={() =>
          setPopupData((prev) => ({
            ...prev,
            visible: false,
          }))
        }
      />

      <BetConfirmModal
        visible={confirmModal}
        type={type}
        numbers={selectedNumbers}
        onClose={() => setConfirmModal(false)}
        onConfirm={(data) => {
          setConfirmModal(false);

          setTimeout(() => {
            navigation.navigate('AnimacaoSorteio', {
              numbers: data.numbers,
              draws: data.draws,
              type,
              currentDraw: 1,
            });
          }, 300);
        }}
      />
    </View>
  );
}
