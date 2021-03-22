import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

function PlaceRow({data}) {
  // console.log(data);
  return (
    <View style={styles.row}>
      <View
        style={{
          ...styles.iconContainer,
        }}>
        {(() => {
          switch (data.description) {
            case 'Home':
              return <Entypo name="home" size={20} color={'white'} />;
            case 'Work':
              return <Entypo name="briefcase" size={20} color={'white'} />;
            case 'Current Location':
              return <Entypo name="location" size={20} color={'white'} />;
            default:
              return <Entypo name="location-pin" size={20} color={'white'} />;
          }
        })()}
      </View>
      <Text style={styles.locationText}>
        {data.description || data.vicinity}
      </Text>
    </View>
  );
}

export default PlaceRow;
