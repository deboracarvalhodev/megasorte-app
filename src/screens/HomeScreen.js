import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { styles } from '../styles/Styles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <Text style={styles.description}>
          A MegaSorte é o jogo de loteria mais popular do Brasil, onde você
          escolhe números e tenta acertar o resultado sorteado.
        </Text>

        <Text style={styles.prizeLabel}>Prêmio principal</Text>

        <Text style={styles.prizeValue}>R$ 120.000.000</Text>

        <View style={styles.buttonsContainer}>
          <Button
            title="Como jogar"
            variant="secondary"
            onPress={() => navigation.navigate('Instrucoes')}
          />

          <Button
            title="Aposte agora"
            onPress={() => navigation.navigate('TipoAposta')}
          />

          <TouchableOpacity onPress={() => navigation.navigate('Creditos')}>
            <Text style={styles.creditsButton}>Créditos</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer />
    </View>
  );
}
