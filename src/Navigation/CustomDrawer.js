import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{backgroundColor: 'black', padding: 15}}>
        {/* user row */}
        <View style={{flexDirection: 'row', alignItems: 'center', padding: 5}}>
          <View
            style={{
              backgroundColor: '#cacaca',
              width: 40,
              height: 40,
              borderRadius: 25,
              marginRight: 10,
            }}
          />

          <View>
            <Text style={{color: 'white', fontSize: 24}}>Zachary Thomas</Text>
            <Text style={{color: 'lightgrey'}}>5.00 *</Text>
          </View>
        </View>

        {/* Messages Row */}
        <View
          style={{
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#919191',
            paddingVertical: 5,
          }}>
          <Pressable
            onPress={() => {
              console.warn('message');
            }}>
            <Text
              style={{
                color: '#dddddd',
                paddingVertical: 5,
                marginVertical: 10,
              }}>
              Messages
            </Text>
          </Pressable>
        </View>

        {/* Do More */}
        <Pressable
          onPress={() => {
            console.warn('do more');
          }}>
          <Text style={{color: '#dddddd', paddingVertical: 5}}>
            Do more with your account
          </Text>
        </Pressable>

        {/* Make Money */}
        <Pressable
          onPress={() => {
            console.warn('make money driving');
          }}>
          <Text style={{color: 'white', paddingVertical: 5}}>
            Make money driving
          </Text>
        </Pressable>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default CustomDrawer;
