// React & Navigation
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// Components
import EmptyComponent from "../components/EmptyComponent";
import BeachMediaTab from "./BeachMediaTab";


const BeachTabs = createMaterialTopTabNavigator();


function BeachScreenTabs({ navigation, route }) {
    //console.log(route.params.beachData)
    return(
        <BeachTabs.Navigator initialRouteName="Overview">
            <BeachTabs.Screen name="Media" component={BeachMediaTab} initialParams={{beachData: route.params.beachData}}/>
            <BeachTabs.Screen name="Overview" component={EmptyComponent}/>
            <BeachTabs.Screen name="Forecast" component={EmptyComponent} />
        </BeachTabs.Navigator>
    );
}

export default BeachScreenTabs;
