import * as React from 'react';
import {
Text,
View,
StyleSheet,
ImageBackground,
SafeAreaView,
TouchableOpacity,
Image,
 } from 'react-native';
import Home from './screens/Home';
import Main from "./screens/Main";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
       <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Main') {
                        iconName = focused
                            ? 'book'
                            : 'book-outline';
                    } else if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Main" component={Main} />
            <Tab.Screen name="Home" component={Home} />
        </Tab.Navigator>
    </NavigationContainer>
   
  );
}