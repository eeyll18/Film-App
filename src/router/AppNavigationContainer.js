import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Index from "../screens/Index";
import Icon from "react-native-vector-icons/FontAwesome5";
import Vview from "../screens/Vview";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Index">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Index"
        component={Index}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="vview"
        component={Vview}
      />
    </Stack.Navigator>
  );
};

const AppTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
        component={HomeStack}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

const AppNavigationContainer = () => {
  return <AppTabs />;
};

export default AppNavigationContainer;

const styles = StyleSheet.create({});
