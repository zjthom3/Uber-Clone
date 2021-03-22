import React from 'react';
import { Text, View } from 'react-native'

import styles from './styles'

function CovidMessage(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>Upgrading this package often requires the font files linked to your projects to</Text>
      <Text style={styles.learnMore}>
        Learn more
      </Text>
    </View>
  );
}

export default CovidMessage;