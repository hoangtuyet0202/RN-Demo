import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native'
import LoginView from './src/screens/LoginView'
import SignupView from './src/screens/SignupView'
import { NavigationContainer } from '@react-navigation/native';
import TabView from './src/screens/TabView';
const Stack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Sign in"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name='Sign in' component={LoginView} />
                <Stack.Screen name='Sign up' component={SignupView} />
                <Stack.Screen name='Home' component={TabView} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})
