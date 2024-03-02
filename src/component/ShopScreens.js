import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ManScreens from '../categories/ManScreens';
import WomenScreens from '../categories/WomenScreens';
import KidScreens from '../categories/KidScreens';
const Tab = createMaterialTopTabNavigator();
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ShopScreens = () => {
  return (
    <View style={styles.container}>
      <View style={styles.find}>
        <TouchableHighlight underlayColor="transparent">
          <MaterialCommunityIcons name='arrow-left' size={26} />
        </TouchableHighlight>
        <TextInput placeholder='Categories' style={{ fontSize: 18, flex: 1, textAlign: 'center' }} />
        <MaterialCommunityIcons name='find-replace' size={26} />
      </View>
      <Tab.Navigator>
        <Tab.Screen name='Women' component={WomenScreens} />
        <Tab.Screen name='Man' component={ManScreens} />
        <Tab.Screen name='Kids' component={KidScreens} />
      </Tab.Navigator>
    </View>
  )
}

export default ShopScreens

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  find: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 15
  }
})