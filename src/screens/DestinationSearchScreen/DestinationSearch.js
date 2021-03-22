import React, {useEffect, useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import PlaceRow from './PlaceRow';

const homePlace = {
  description: 'Home',
  geometry: {location: {lat: 48.8152937, lng: 2.4597668}},
};
const workPlace = {
  description: 'Work',
  geometry: {location: {lat: 48.8496818, lng: 2.2940881}},
};

function DestinationSearch(props) {
  const [originPlace, setOriginPlace] = useState('');
  const [destinationPlace, setDestinationPlace] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    if (originPlace && destinationPlace) {
      navigation.navigate('SearchResults', {
        originPlace,
        destinationPlace,
      });
    }
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
            // console.log(data, details);
          }}
          suppressDefaultStyles
          enablePoweredByContainer={false}
          currentLocation={true}
          currentLocationLabel="Current Location"
          styles={{
            textInput: styles.textInput,
            container: styles.autocompleteContainer,
            listView: {
              position: 'absolute',
              top: 92,
            },
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyD2eEOHsyBYTF3-r6UUGe5BBZB2Cp3rkUc',
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data} />}
          renderDescription={data => data.description || data.vicinity}
          predefinedPlaces={[homePlace, workPlace]}
        />

        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
            // console.log(data, details);
          }}
          suppressDefaultStyles
          enablePoweredByContainer={false}
          styles={{
            textInput: styles.textInput,
            container: {
              ...styles.autocompleteContainer,
              top: 45,
            },
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyD2eEOHsyBYTF3-r6UUGe5BBZB2Cp3rkUc',
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data} />}
          renderDescription={data => data.description || data.vicinity}
        />

        {/* circle near Origin input */}
        <View style={styles.circle} />
        {/* line between dors */}
        <View style={styles.line} />
        {/* square near Destination input */}
        <View style={styles.square} />
      </View>
    </SafeAreaView>
  );
}

export default DestinationSearch;
