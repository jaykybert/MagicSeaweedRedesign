import React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const BeachListItem = (props) => {
    return(
        <TouchableHighlight
        style={BeachListItemStyle.rowItem}
        activeOpacity={0.4}
        underlayColor="#FFFFFF"
        onPress={props.onPress}>
            <View>
                <Text style={BeachListItemStyle.heading}>{props.dataItem["name"]}</Text>
                <Text style={BeachListItemStyle.subHeading}>{props.dataItem["distance-miles"]} miles</Text>

                <TouchableHighlight onPress={testPress}>
                <MaterialCommunityIcons name="pin" size={20}/>
                </TouchableHighlight>

            </View>

 
        </TouchableHighlight>
    )
}
function testPress() {
    alert('pin press')
}

const BeachListItemStyle = StyleSheet.create({
    rowItem: {
        marginBottom: 5,
        flexDirection: "row",
        flex:0.5,
        backgroundColor: "#ffffff",
        alignItems: 'center',
        width:'100%',
        height: 100,
       
    },
    heading: {
        color: "#262727",
        fontSize: 24,
        marginLeft: 10,
    },
    subHeading: {
        marginLeft: 10,
        fontStyle: "italic"
    }
})

export default BeachListItem;