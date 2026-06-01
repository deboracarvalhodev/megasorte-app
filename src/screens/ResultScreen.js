import React from 'react';

import { View, Text, ScrollView } from 'react-native';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import NumberButton from '../components/NumberButton';

import { styles } from '../styles/Styles';

export default function ResultScreen({ navigation, route }) {
  const {
    numbers = [],
    draws = 1,
    type,
    currentDraw = 1,
    drawnNumbers = [],
  } = route.params;

  const hits = numbers.filter((num) => drawnNumbers.includes(num)).length;

  const prizeMap = {
    4: { name: 'Quadra', value: 1200 },
    5: { name: 'Quina', value: 45000 },
    6: { name: 'Sena', value: 120000000 },
  };

  const prize = prizeMap[hits];

  return (
    <View style={styles.container}>
      <Header />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Resultado do sorteio</Text>

        <Text style={styles.description}>
          {type === 'stubborn'
            ? `Teimosinha • ${draws} concursos`
            : type === 'surprise'
            ? 'Surpresinha'
            : 'Aposta comum'}
        </Text>

        {type === 'stubborn' && (
          <Text style={styles.drawCounter}>
            Concurso {currentDraw} de {draws}
          </Text>
        )}

        <Text style={styles.sectionTitle}>Números sorteados</Text>

        <View style={styles.numbersContainer}>
          {drawnNumbers.map((num) => (
            <NumberButton key={num} number={num} selected onPress={() => {}} />
          ))}
        </View>

        <Text style={styles.sectionTitle}>Sua aposta</Text>

        <View style={styles.numbersContainer}>
          {numbers.map((num) => {
            const matched = drawnNumbers.includes(num);

            return (
              <NumberButton
                key={num}
                number={num}
                status={matched ? 'correct' : 'wrong'}
                onPress={() => {}}
              />
            );
          })}
        </View>

        <Text style={styles.resultText}>
          {hits >= 1
            ? `Você acertou ${hits} número${hits !== 1 ? 's' : ''}`
            : 'Nenhum acerto'}
        </Text>

        {prize && (
          <View style={styles.prizeCard}>
            <Text style={styles.prizeTitle}>🏆 {prize.name}</Text>

            <Text style={styles.prizeHits}>Você acertou {hits} números</Text>

            <Text style={styles.prizeValue}>
              Prêmio estimado: R$ {prize.value.toLocaleString('pt-BR')}
            </Text>
          </View>
        )}

        <Text style={styles.footerText}>
          {hits >= 4
            ? '🎉 Parabéns! Você teve um ótimo resultado!'
            : 'Tente novamente! A sorte pode mudar no próximo jogo 🍀'}
        </Text>

        <View style={styles.buttonsContainer}>
          {type === 'stubborn' && currentDraw < draws ? (
            <Button
              title={`Jogar novamente (${currentDraw + 1} de ${draws})`}
              onPress={() =>
                navigation.replace('AnimacaoSorteio', {
                  numbers,
                  draws,
                  type,
                  currentDraw: currentDraw + 1,
                })
              }
            />
          ) : (
            <Button
              title="Jogar novamente"
              onPress={() => navigation.navigate('TipoAposta')}
            />
          )}

          <Button
            title="Voltar ao início"
            variant="secondary"
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </ScrollView>

      <Footer />
    </View>
  );
}
