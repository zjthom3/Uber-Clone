import React from 'react';
import {View, Dimensions} from 'react-native';
import CovidMessage from '../../components/CovidMessage/CovidMessage';
import HomeMap from '../../components/HomeMap/HomeMap';
import HomeSearch from '../../components/HomeSearch/HomeSearch';

function HomeScreen(props) {
  return (
    <View>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <HomeMap />
      </View>

      {/* Covid message */}
      <CovidMessage />

      {/* bottom component */}
      <HomeSearch />
    </View>
  );
}

export default HomeScreen;
