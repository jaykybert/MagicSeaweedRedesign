// React & Navigation
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
// Components
import BeachListItem from './BeachListItem'
// Utilities
import GetData from '../static/api';
import GetLocationData from '../static/locationData'

// Temporary Beach Object
let beachData = GetLocationData();
let dataSource = GetData();



function BeachListItemOnPress(beachId) {
    alert(`Beach ${beachId} pressed!`);
  }

const BeachList = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
        <FlatList style={styles.container}
        data={beachData}
        keyExtractor={(item) => item.id}
        renderItem={ ({item}) => (
          <BeachListItem dataItem = {item}
          onPress={() => navigation.push("BeachScreenTabs", { beachData: dataSource })}/>
        )}/>
    </View>)
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#d4f2ff',
    },
  });



export default BeachList;