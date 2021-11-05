// React & Navigation
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Components
import Beach from '../components/Beach';
import BottomTabs from './BottomTabs';

const homeStack = createNativeStackNavigator();


/** 
 * @function HomescreenStack
 * 
 * Outermost JSX element.
 * Contains two screens: BottomTabs and Beach.
 * 
 * @returns HomescreenStack Component
 */
function HomescreenStack() {
    return(
        <homeStack.Navigator>
            <homeStack.Screen name="MSW" component={BottomTabs}/>
            <homeStack.Screen name="Beach" component={Beach}/>
        </homeStack.Navigator>
    )
}

export default HomescreenStack;
