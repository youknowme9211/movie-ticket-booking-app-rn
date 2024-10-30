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
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: COLORS.Black,
                    borderTopWidth: 0,
                    height: SPACING.space_10 * 10
                },
            }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => {
                    return <View style={styles.activeTabBackground}> </View>

                },
            }}></Tab.Screen>
            <Tab.Screen name="Search" component={SearchScreen}></Tab.Screen>
            <Tab.Screen name="Ticket" component={TicketScreen}></Tab.Screen>
            <Tab.Screen name="User" component={UserAccountScreen}></Tab.Screen>
        </Tab.Navigator >
    )
};

const styles = StyleSheet.create({
    activeTabBackground: {
        backgroundColor: COLORS.Black,
        padding: SPACING.space_18,
        borderRadius: SPACING.space_18 * 10,
    },

});

export default TabNavigator;