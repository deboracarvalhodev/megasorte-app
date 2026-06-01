import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  ScrollView,
  Image,
} from 'react-native';

import { FontAwesome, Feather } from '@expo/vector-icons';

import Button from '../components/Button';

import { styles, COLORS } from '../styles/Styles';

const openLink = async (url) => {
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  }
};

export default function CreditsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.creditsHeader}>
          <Image
            source={require('../assets/logo-megasorte.png')}
            style={styles.creditsLogo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.cardTitleSection}>
          <Text style={styles.title}>Créditos</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardText}>
            Desenvolvido por Débora Vieira Carvalho
          </Text>

          <Text style={styles.cardText}>Fatec Zona Leste</Text>

          <Text style={styles.cardText}>
            Desenvolvimento de Software Multiplataforma
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Sobre o projeto</Text>

          <Text style={styles.cardText}>
            Este aplicativo foi desenvolvido para fins acadêmicos, com o
            objetivo de praticar desenvolvimento mobile utilizando React Native
            e Expo.
          </Text>

          <Text style={styles.cardText}>
            A MegaSorte é apenas uma simulação inspirada em jogos de loteria.
          </Text>
        </View>

        <View style={styles.socialContainer}>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() =>
              openLink('https://portfolio-devcarvalho.vercel.app/')
            }>
            <Feather name="globe" size={28} color={COLORS.text} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => openLink('https://github.com/Debora-Carvalho/')}>
            <FontAwesome name="github" size={28} color={COLORS.text} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.socialButton}
            onPress={() =>
              openLink(
                'https://www.linkedin.com/in/debora-vieira-carvalho-45a478205/'
              )
            }>
            <FontAwesome name="linkedin" size={28} color={COLORS.text} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonsContainer}>
          <Button
            title="Voltar ao início"
            variant="secondary"
            onPress={() => navigation.navigate('Home')}
          />
        </View>

        <Text style={styles.footerText}>
          © {new Date().getFullYear()} MegaSorte | Dev. Carvalho.
        </Text>
      </ScrollView>
    </View>
  );
}
