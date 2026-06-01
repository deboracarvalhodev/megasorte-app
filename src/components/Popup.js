import React from 'react';

import {
  View,
  Text,
  Modal,
  Image,
} from 'react-native';

import Button from './Button';

import { styles } from '../styles/Styles';

const POPUP_IMAGES = {
  happy: require('../assets/cat-happy.png'),

  sad: require('../assets/cat-sad.png'),

  lucky: require('../assets/cat-lucky.png'),

  thinking: require('../assets/cat-thinking.png'),

  angry: require('../assets/cat-angry.png'),
};

export default function Popup({
  visible,
  title = 'Ops!',
  description,
  image = 'happy',
  buttonText = 'Ok, entendi!',
  onClose,
}) {

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
    >

      <View style={styles.overlayPopup}>

        <View style={styles.containerPopup}>

          <Image
            source={POPUP_IMAGES[image]}
            style={styles.imagePopup}
            resizeMode="contain"
          />

          <Text style={styles.titlePopup}>
            {title}
          </Text>

          <Text style={styles.textPopup}>
            {description}
          </Text>

          <Button
            title={buttonText}
            onPress={onClose}
          />

        </View>

      </View>

    </Modal>
  );
}