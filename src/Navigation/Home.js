import React from 'react';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import DestinationSearch from '../screens/DestinationSearchScreen/DestinationSearch';
import SearchResults from '../screens/SearchResults/SearchResults';

const Stack = createStackNavigator();

function HomeNavigator(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Home'} component={HomeScreen} />
      <Stack.Screen name={'DestinationSearch'} component={DestinationSearch} />
      <Stack.Screen name={'SearchResults'} component={SearchResults} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
