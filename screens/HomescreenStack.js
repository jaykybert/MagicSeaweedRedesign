// React & Navigation
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Components
import BottomTabs from './BottomTabs';
import BeachScreenTabs from './BeachScreenTabs';


const homeStack = createNativeStackNavigator();


/** 
 * @function HomescreenStack
 * 
 * Outermost JSX element.
 * Contains two screens: BottomTabs and BeachScreenTabs.
 * 
 * @returns HomescreenStack Component
 */
function HomescreenStack() {
    return(
        <homeStack.Navigator>
            <homeStack.Screen name="MSW" component={BottomTabs}/>
            <homeStack.Screen name="BeachScreenTabs" component={BeachScreenTabs}/>
        </homeStack.Navigator>
    )
}

export default HomescreenStack;
