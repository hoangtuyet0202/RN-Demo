import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import BedRoom from './BedRoom';
import LivingRoom from './LivingRoom';
import { Colors } from '../assets/colors';

function StatisticsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Profile!</Text>
        </View>
    );
}
const Tab = createBottomTabNavigator();

export default function MainHome() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: Colors.gray,
                    borderRadius: 15,
                    height: 72,
                    ...styles.shadow,
                },
            }}>
            <Tab.Screen name="LivingRoom" component={LivingRoom} options={{
                tabBarIcon : ({ focused }) => (
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <MaterialCommunityIcons name="sofa" color={focused ? '#407BFF' : '#748c94'} size={24} />
                        <Text style={{ color: focused ? '#407BFF'  : '#748c94' }}>LivingRoom</Text>
                    </View>
                ),
            }} />
            <Tab.Screen name="BedRoom" component={BedRoom} options={{
                tabBarIcon : ({ focused }) => (
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <Ionicons name="bed" color={focused ? '#407BFF'  : '#748c94'} size={24} />
                        <Text style={{ color: focused ? '#407BFF'  : '#748c94' }}>BedRoom</Text>
                    </View>
                ),
            }}/>
            
            <Tab.Screen name="Statistics" component={StatisticsScreen} options={{
                tabBarIcon : ({ focused }) => (
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <FontAwesome name="bar-chart-o" color={focused ? '#407BFF'  : '#748c94'} size={24} />
                        <Text style={{ color: focused ? '#407BFF'  : '#748c94' }}>Statistics</Text>
                    </View>
                ),
            }}/>
        </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#407BFF',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 10,
    },
});
