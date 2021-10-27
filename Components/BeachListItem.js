import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const BeachListItem = (props) => {
    return(
        <TouchableHighlight
        style={BeachListItemStyle.rowItem}
        activeOpacity={0.4}
        underlayColor="#FFFFFF"
        onPress={props.onPress}>
            <View>
                <Text>Beach {props.dataItem.id}</Text>
            </View>
        </TouchableHighlight>
    )
}


const BeachListItemStyle = StyleSheet.create({
    rowItem: {
        marginTop: 10,
        flexDirection: "row",
        flex:1,
        backgroundColor: "#74d2fc",
        justifyContent: "space-evenly",
        alignItems: 'center',
        width:'100%',
        height: 50,
       
    },
})

export default BeachListItem;