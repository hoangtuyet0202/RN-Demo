import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import LoginView from './src/screens/LoginView';
import MainHome from './src/screens/MainHome';
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
                <Stack.Screen name='Home' component={MainHome} />
                {/* <Stack.Screen name='Details' component={DetailsView} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})
