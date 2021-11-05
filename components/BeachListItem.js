// React & Navigation
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const BeachListItem = ({dataItem, onPress}) => {
    return(
        <View>
        <TouchableHighlight
        style={BeachListItemStyle.rowItem}
        activeOpacity={0.4}
        underlayColor="#FFFFFF"
        onPress={onPress}>
            <View>
                <Text style={BeachListItemStyle.heading}>{dataItem["name"].toUpperCase()}</Text>
                <Text style={BeachListItemStyle.subHeading}>{dataItem["distance-miles"]} miles</Text>

                <TouchableHighlight style={BeachListItemStyle.pinIcon} onPress={testPress} >
                    <MaterialCommunityIcons name="pin" size={20}/>
                </TouchableHighlight>

            </View>
        </TouchableHighlight>
        </View>
    )
}
function testPress() {
    alert('pin press')
}

const BeachListItemStyle = StyleSheet.create({
    rowItem: {
        marginBottom: 5,
        flexDirection: "row",
        backgroundColor: "#ffffff",
        width:'100%',
        height: 90,
       
    },
    heading: {
        color: "#262727",
        fontSize: 22,
        marginLeft: 10,
    },
    subHeading: {
        marginLeft: 10,
        fontStyle: "italic"
    },
    pinIcon: {
        flexDirection: "row",
        backgroundColor: "#fff",
    }
})

export default BeachListItem;