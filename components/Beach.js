import React from 'react';
import { Text, Button, FlatList, StyleSheet, View } from 'react-native';

function Beach({ navigation, route, onPress }) {
    return(
        <View>
            <Text>Hello!</Text>
            <Button
            title="Go back"
            onPress={() => { navigation.pop()}}/>

        </View>
    );
}

export default Beach;