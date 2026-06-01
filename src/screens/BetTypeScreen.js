import React, { useState } from 'react';

import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Popup from '../components/Popup';

import { COLORS, styles } from '../styles/Styles';

export default function BetTypeScreen({ navigation }) {

  const [selectedType, setSelectedType] = useState(null);

  const [popupData, setPopupData] = useState({
    visible: false,
    title: '',
    description: '',
    image: 'thinking',
  });

  function handleContinue() {

    if (!selectedType) {

      setPopupData({
        visible: true,
        title: 'Ei!',
        description: 'Selecione um tipo de aposta para continuar.',
        image: 'angry',
      });

      return;
    }

    navigation.navigate('NumerosAposta', {
      type: selectedType,
    });
  }

  return (
    <View style={styles.container}>

      <Header />

      <ScrollView contentContainerStyle={styles.scrollContent}>

        <Text style={styles.title}>
          Escolha sua aposta
        </Text>

        <Text style={styles.description}>
          Selecione como deseja participar do sorteio da MegaSorte.
        </Text>

        <TouchableOpacity
          style={[
            styles.cardBetType,
            selectedType === 'common' && styles.cardSelectedBetType,
          ]}
          onPress={() => setSelectedType('common')}
        >
          <View style={styles.cardHeaderBetType}>
            <MaterialCommunityIcons
              name="target"
              size={24}
              color={COLORS.text}
            />

            <Text style={styles.cardTitleBetType}>
              Aposta comum
            </Text>
          </View>

          <Text style={styles.cardText}>
            Escolha manualmente os números da sua aposta.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.cardBetType,
            selectedType === 'surprise' && styles.cardSelectedBetType,
          ]}
          onPress={() => setSelectedType('surprise')}
        >
          <View style={styles.cardHeaderBetType}>
            <MaterialCommunityIcons
              name="dice-multiple"
              size={24}
              color={COLORS.text}
            />

            <Text style={styles.cardTitleBetType}>
              Surpresinha
            </Text>
          </View>

          <Text style={styles.cardText}>
            O sistema escolhe os números automaticamente para você.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.cardBetType,
            selectedType === 'stubborn' && styles.cardSelectedBetType,
          ]}
          onPress={() => setSelectedType('stubborn')}
        >
          <View style={styles.cardHeaderBetType}>
            <MaterialCommunityIcons
              name="reload"
              size={24}
              color={COLORS.text}
            />

            <Text style={styles.cardTitleBetType}>
              Teimosinha
            </Text>
          </View>

          <Text style={styles.cardText}>
            Participe de até 12 concursos consecutivos com a mesma aposta.
          </Text>
        </TouchableOpacity>

        <View style={styles.buttonsContainerBetType}>

          <Button
            title="Voltar"
            variant="secondary"
            onPress={() => navigation.goBack()}
          />

          <Button
            title="Continuar"
            onPress={handleContinue}
          />

        </View>

      </ScrollView>

      <Footer />

      <Popup
        visible={popupData.visible}
        title={popupData.title}
        description={popupData.description}
        image={popupData.image}
        onClose={() =>
          setPopupData(prev => ({
            ...prev,
            visible: false,
          }))
        }
      />

    </View>
  );
}