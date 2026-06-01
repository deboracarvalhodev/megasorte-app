import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

export default function LoadingDrawScreen({ navigation, route }) {
  const { numbers, draws = 1, type, currentDraw = 1 } = route.params;

  const displayNumbers = useRef(
  Array.from({ length: 12 }, () =>
    Math.floor(Math.random() * 60) + 1
  )
).current;

  const animations = useRef(
    Array.from({ length: 12 }).map(() => ({
      translateY: new Animated.Value(0),
      rotate: new Animated.Value(0),
    }))
  ).current;

  useEffect(() => {
    const loops = animations.map((anim) => {
      const bounce = Animated.loop(
        Animated.sequence([
          Animated.timing(anim.translateY, {
            toValue: -30,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(anim.translateY, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
        ])
      );

      const spin = Animated.loop(
        Animated.timing(anim.rotate, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: true,
        })
      );

      return Animated.parallel([bounce, spin]);
    });

    loops.forEach((anim, i) => {
      setTimeout(() => anim.start(), i * 120);
    });

    const timer = setTimeout(() => {
      let drawnNumbers = [];

      while (drawnNumbers.length < 6) {
        const random = Math.floor(Math.random() * 60) + 1;

        if (!drawnNumbers.includes(random)) {
          drawnNumbers.push(random);
        }
      }

      navigation.replace('Resultado', {
        numbers,
        draws,
        type,
        currentDraw,
        drawnNumbers: drawnNumbers.sort((a, b) => a - b),
      });
    }, 3000);

    return () => {
      clearTimeout(timer);

      animations.forEach((anim) => {
        anim.translateY.stopAnimation();
        anim.rotate.stopAnimation();
      });
    };
  }, [animations, navigation, numbers, type, draws, currentDraw]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Boa sorte!</Text>

      <View style={styles.ballsContainer}>
        {animations.map((anim, index) => {
          const rotate = anim.rotate.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
          });

          return (
            <Animated.View
              key={index}
              style={[
                styles.ball,
                {
                  transform: [{ translateY: anim.translateY }, { rotate }],
                },
              ]}>
              <Text style={styles.ballText}>
                {displayNumbers[index]}
              </Text>
            </Animated.View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F1E8',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 30,
    color: '#2B2B2B',
  },

  ballsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: 300,
  },

  ball: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFD65A',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 6,
  },

  ballText: {
    fontWeight: 'bold',
    color: '#2B2B2B',
  },
});
