import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {Colors} from '../assets/colors'
function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}
function CalendarScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Search!</Text>
        </View>
    );
}
function PostScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Post!</Text>
        </View>
    );
}
function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}
function MeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Chat!</Text>
        </View>
    );
}
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity
        style={{ 
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
            ...styles.shadow,
        }}
        onPress={onPress}
    >
        <View style={{width: 70, height: 70, borderRadius: 35, backgroundColor: Colors.blue_main}}>
            {children}
        </View>
    </TouchableOpacity>
)
export default function TabView() {
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
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 60,
                    ...styles.shadow,
                },
            }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon : ({ focused }) => (
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <FontAwesome name="home" color={focused ? Colors.blue_main : '#748c94'} size={24} />
                        <Text style={{ color: focused ? Colors.blue_main  : '#748c94' }}>Home</Text>
                    </View>
                ),
            }} />
            <Tab.Screen name="Calendar" component={CalendarScreen} options={{
                tabBarIcon : ({ focused }) => (
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <FontAwesome name="calendar-o" color={focused ? Colors.blue_main  : '#748c94'} size={24} />
                        <Text style={{ color: focused ? Colors.blue_main  : '#748c94' }}>Daily</Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name="Post" component={PostScreen} options={{
                tabBarIcon : ({ focused }) => (
                     <FontAwesome name="plus-circle" color={'white' } size={68} />
                    // <Image
                    //     source={require('../assets/images/plus_circle.png')}
                    //     resizeMode='contain'
                    //     style={{
                    //         width: 30,
                    //         height: 30,
                    //         tintColor: '#fff'
                    //     }}
                    // />
                ),
                tabBarButton: (props) => (
                    <CustomTabBarButton {...props}/>
                )
                // tabBarIcon : ({ focused }) => (
                //     <View style={{alignItems:'center', justifyContent:'center'}}>
                //         {/* <Feather name="settings" color={focused ? Colors.blue_main  : '#748c94'} size={24} /> */}
                //         <Text style={{ color: focused ? Colors.blue_main  : '#748c94' }}>Post</Text>
                //     </View>
                // ),
            }}/>
            <Tab.Screen name="Settings" component={SettingsScreen} options={{
                tabBarIcon : ({ focused }) => (
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <Feather name="settings" color={focused ? Colors.blue_main  : '#748c94'} size={24} />
                        <Text style={{ color: focused ? Colors.blue_main  : '#748c94' }}>Settings</Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name="Me" component={MeScreen} options={{
                tabBarIcon : ({ focused }) => (
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <FontAwesome name="user" color={focused ? Colors.blue_main  : '#748c94'} size={24} />
                        <Text style={{ color: focused ? Colors.blue_main  : '#748c94' }}>Me</Text>
                    </View>
                ),
            }}/>
        </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
});
