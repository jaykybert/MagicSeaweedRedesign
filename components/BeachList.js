// React
import React from 'react';
import {  FlatList, StyleSheet, View } from 'react-native';
// Custom Components
import BeachListItem from '../components/BeachListItem';

// Utilities
import GetLocationData from '../static/locationData'

// Temporary Beach Object
let beachData = GetLocationData();


function BeachListItemOnPress(beachId) {
    alert(`Beach ${beachId} pressed!`);
  }

const BeachListScreen = ({ navigation, route }) => (

    <View style={styles.container}>
        <FlatList style={styles.container}
        data={beachData}
        keyExtractor={(item) => item.id}
        renderItem={ ({item}) => (
          <BeachListItem dataItem = {item}
          onPress={() => BeachListItemOnPress(item.id)}/>
        )}/>
    </View>
)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#d4f2ff',
    },
  });



export default BeachListScreen;