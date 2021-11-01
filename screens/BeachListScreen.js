// React
import React from 'react';
import {  FlatList, StyleSheet, Text, View } from 'react-native';
// Custom Components
import BeachListItem from '../components/BeachListItem'
// Utilities
import GetData from '../static/api'

// Temporary Beach Object
let beachData = GetData();


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
      backgroundColor: '#41b0f0',
    },
  });



export default BeachListScreen;