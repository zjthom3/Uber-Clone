import React from 'react';
import {View, Text, Pressable} from 'react-native';

import styles from './styles';
import UberTypeRow from '../UberTypeRow/UberTypeRow';

import typesData from '../../assests/data/types';

function UberTypes(props) {
  const confirm = () => {
    console.warn('confirmed');
  };
  return (
    <View>
      {typesData.map(type => (
        <UberTypeRow type={type} key={type.id} />
      ))}

      <Pressable onPress={confirm} style={styles.confirm}>
        <Text style={styles.text}>Confirm Uber</Text>
      </Pressable>
    </View>
  );
}

export default UberTypes;
