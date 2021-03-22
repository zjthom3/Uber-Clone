import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './Home';
import {View, Text} from 'react-native';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

const DummyScreen = props => (
  <View
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    }}>
    <Text>{props.name}</Text>
  </View>
);

const Root = props => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Home" component={HomeNavigator} />

        <Drawer.Screen name="Your Trips">
          {() => <DummyScreen name={'Your Trips'} />}
        </Drawer.Screen>
        <Drawer.Screen name="Help">
          {() => <DummyScreen name={'Help'} />}
        </Drawer.Screen>
        <Drawer.Screen name="Walley">
          {() => <DummyScreen name={'Walley'} />}
        </Drawer.Screen>
        <Drawer.Screen name="Settings">
          {() => <DummyScreen name={'Settings'} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Root;