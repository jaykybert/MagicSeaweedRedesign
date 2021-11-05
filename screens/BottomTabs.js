// React & Navigation
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// Components
import TopTabs from './TopTabs.js';
import EmptyComponent from '../components/EmptyComponent.js';


const Root = createMaterialBottomTabNavigator();

/**
 * @function BottomTabs
 * JSX Element nested within HomescreenStack.
 * Contains 3 screens: EmptyComponent, TopTabs, and EmptyComponent.
 * 
 * @returns BottomTabs Component
 */
function BottomTabs() {
  return (
      <Root.Navigator
      initialRouteName="Beaches"
      activeColor="#ffffff"
      inactiveColor="#1f1f1f"
      shifting={true}
      backBehaviour="none"  
      barStyle={{ backgroundColor: "#67aaee"}}>

        <Root.Screen name="Account" component={EmptyComponent}
        options={{
          tabBarColor: "#3d94ee",
          tabBarLabel: "Account",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={24}/>
          ),
        }}/>

        <Root.Screen name="Beaches" component={TopTabs}
        options={{
          tabBarColor: "#1370d1",
          tabBarLabel: "Beaches",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="waves" color={color} size={24}/>
          ),
        }}
        />
        
        <Root.Screen name="Settings" component={EmptyComponent} backgroundColor="#be7474"
        options={{
          tabBarColor: "#0b529c",
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={24}/>
          ),
        }}
        />
      </Root.Navigator>
  );
}

export default BottomTabs;
