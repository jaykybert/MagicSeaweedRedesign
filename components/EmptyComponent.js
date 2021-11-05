// React & Navigation
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


/**
 * @function EmptyComponent
 * An empty JSX component used inside BottomTabs and TopTabs.
 * This component is just used to create empty screens for
 * fleshing out navigation.
 * 
 */
function EmptyComponent() {
    return(<View style={EmptyComponentStyles.Empty}>
        <Text>
            ...
        </Text>
    </View>
    );
}

const EmptyComponentStyles = StyleSheet.create({
    Empty: {
        alignItems: "center",
        justifyContent: "center",
    },
})

export default EmptyComponent;
