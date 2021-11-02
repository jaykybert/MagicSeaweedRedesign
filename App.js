// React & Nav
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


import BeachesScreen from './screens/BeachesScreen';


const Root = createMaterialBottomTabNavigator();


function HomescreenTabs() {
  return (
      <Root.Navigator
      initialRouteName="Beaches"
      activeColor="#ffffff"
      inactiveColor="#515151"
      shifting={true}
      backBehaviour="none"  
      barStyle={{ backgroundColor: "#67aaee"}}>

        <Root.Screen name="Left" component={BeachesScreen}
        options={{
          tabBarColor: "#1370d1",
          tabBarLabel: "Temp",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bank" color={color} size={24}/>
          ),
        }}/>

        <Root.Screen name="Beaches" component={BeachesScreen}
        options={{
          tabBarColor: "#68d3f3",
          tabBarLabel: "Beaches",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="waves" color={color} size={24}/>
          ),
        }}
        />

        <Root.Screen name="Settings" component={BeachesScreen} backgroundColor="#be7474"
        options={{
          tabBarColor: "#68d3f3",
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={24}/>
          ),
        }}
        />
      </Root.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <View style={styles.menu}></View>
      <HomescreenTabs/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menu: {
    height: 50,
    backgroundColor: '#000000'
  },
});
