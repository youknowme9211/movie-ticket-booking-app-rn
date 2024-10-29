import React from "react";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import TicketScreen from "../screens/TicketScreen";
import UserAccountScreen from "../screens/UserAccountScreen";
import { COLORS, FONTSIZE, SPACING } from '../theme/theme';
import Customicon from "../components/Customicon";
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
            <Tab.Screen name="Search" component={SearchScreen}></Tab.Screen>
            <Tab.Screen name="Ticket" component={TicketScreen}></Tab.Screen>
            <Tab.Screen name="User" component={UserAccountScreen}></Tab.Screen>
        </Tab.Navigator>
    )
};

const styles = StyleSheet.create({

});

export default TabNavigator();