import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Header from '../components/Header';
import Button from '../components/Button';
import Footer from '../components/Footer';
import { styles, COLORS } from '../styles/Styles';

export default function InstructionsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Como jogar</Text>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <MaterialCommunityIcons
              name="trophy"
              size={22}
              color={COLORS.text}
            />
            <Text style={styles.cardTitle}>O que é a MegaSorte</Text>
          </View>

          <Text style={styles.cardText}>
            A MegaSorte pode mudar sua vida, pagando milhões para quem acerta os
            6 números sorteados. Também há prêmios para quem acerta 4 ou 5
            números dentre os 60 disponíveis.
          </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <MaterialCommunityIcons
              name="ticket-outline"
              size={22}
              color={COLORS.text}
            />
            <Text style={styles.cardTitle}>Como participar</Text>
          </View>

          <Text style={styles.cardText}>
            Escolha de 6 a 20 números entre os 60 disponíveis no volante de
            apostas.
          </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <MaterialCommunityIcons
              name="dice-multiple"
              size={22}
              color={COLORS.text}
            />
            <Text style={styles.cardTitle}>Recursos do jogo</Text>
          </View>

          <Text style={styles.cardText}>
            <Text style={{ fontWeight: 'bold' }}>Surpresinha</Text>: o sistema
            escolhe os números para você.{'\n'}
            <Text style={{ fontWeight: 'bold' }}>Teimosinha</Text>: repita a
            mesma aposta por vários concursos consecutivos.
          </Text>
        </View>

        <Text style={styles.footerText}>
          Não perca a chance de ser o próximo milionário!
        </Text>

        <View style={styles.buttonsContainer}>
          <Button
            title="Voltar"
            variant="secondary"
            onPress={() => navigation.navigate('Home')}
          />

          <Button
            title="Aposte agora"
            onPress={() => navigation.navigate('TipoAposta')}
          />
        </View>
      </ScrollView>

      <Footer />
    </View>
  );
}
