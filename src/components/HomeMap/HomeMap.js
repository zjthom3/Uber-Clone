import React from 'react';
import {Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import cars from '../../assests/data/cars';

function HomeMap(props) {
  const getImage = type => {
    if (type === 'UberX') {
      return require('../../assests/top-UberX.png');
    } else if (type === 'Comfort') {
      return require('../../assests/top-Comfort.png');
    } else if (type === 'UberXL') {
      return require('../../assests/top-UberXL.png');
    }
  };

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      style={{height: '100%', width: '100%'}}
      initialRegion={{
        latitude: 45.5016889,
        longitude: -73.567256,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      {cars.map(car => (
        <Marker
          key={car.id}
          coordinate={{latitude: car.latitude, longitude: car.longitude}}>
          <Image
            style={{
              width: 50,
              height: 50,
              resizeMode: 'contain',
              transform: [
                {
                  rotate: `${car.heading}deg`,
                },
              ],
            }}
            source={getImage(car.type)}
          />
        </Marker>
      ))}
    </MapView>
  );
}

export default HomeMap;
