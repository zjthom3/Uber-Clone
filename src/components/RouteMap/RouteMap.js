import React from 'react';
import {Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import MapViewDirections from 'react-native-maps-directions';

function RouteMap({route}) {
  const ori = {...route.originPlace.details.geometry.location};
  const des = {...route.destinationPlace.details.geometry.location};
  console.log(des.lat, des.lng);
  const origin = {latitude: ori.lat, longitude: ori.lng};
  const destination = {latitude: des.lat, longitude: des.lng};
  const GOOGLE_MAPS_APIKEY = 'AIzaSyD2eEOHsyBYTF3-r6UUGe5BBZB2Cp3rkUc';

  // console.log({...route.originPlace.details.geometry});
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
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={3}
        strokeColor="dodgerblue"
      />
      <Marker coordinate={origin} title={'Origin'} />
      <Marker coordinate={destination} title={'Destination'} />
    </MapView>
  );
}

export default RouteMap;
