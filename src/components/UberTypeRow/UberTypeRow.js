import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';

import Ionicons from 'react-native-vector-icons/Ionicons';

function UberTypeRow(props) {
  const {type} = props;

  const getImageName = () => {
    if (type.type === 'UberX') {
      return require('../../assests/UberX.jpeg');
    } else if (type.type === 'Comfort') {
      return require('../../assests/Comfort.jpeg');
    } else if (type.type === 'UberXL') {
      return require('../../assests/UberXL.jpeg');
    }
  };

  return (
    <View style={styles.container}>
      {/* image */}
      <Image style={styles.image} source={getImageName()} />

      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type} <Ionicons name={'person'} size={16} />3
        </Text>
        <Text style={styles.time}>8:03PM drive drop off</Text>
      </View>

      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
        <Text style={styles.price}>est. ${type.price}</Text>
      </View>
    </View>
  );
}

export default UberTypeRow;
