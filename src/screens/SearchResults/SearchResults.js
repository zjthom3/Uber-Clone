import React from 'react';
import {View, Dimensions} from 'react-native';
import RouteMap from '../../components/RouteMap/RouteMap';
import UberTypes from '../../components/UberTypes/UberTypes';

import {useRoute} from '@react-navigation/native';

function SearchResults(props) {
  const route = useRoute();

  // console.log(route.params.destinationPlace.data.description);
  // console.log(route.params);
  return (
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <RouteMap route={route.params} />
      </View>
      <View style={{height: 400}}>
        <UberTypes />
      </View>
    </View>
  );
}

export default SearchResults;
