import React, { useRef, useState } from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from '../assets/colors';
import TextInputField from '../components/TextInputField';
const {width , height} = Dimensions.get("screen")
const COLORS = {
    red: '#F16969',
    dark_purple: '#06004A',
    gray: '#B3B3BD',
    black: '#0A0A0A',
    white: '#FCFCFC'
}
export default function SignupView({ navigation}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const passwordRef = useRef(null);

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            keyboardShouldPersistTaps="handled">
            <View style={styles.header}>
                <Text style={styles.text_header}>
                    Sign Up
                </Text>
            </View>
            <View style={styles.footer}>
                <TextInputField
                    title="Email"
                    placeholder="Email"
                    containerStyle={{ marginTop: 32 }}
                    type="username"
                    inputValue={username}
                    setInputValue={setUsername}
                    // onSubmitEditing={() => {
                    //     console.log('pass', passwordRef.current);
                    //     passwordRef.current && passwordRef.current.focus();
                    // }}
                />
                <TextInputField
                    title="Password"
                    placeholder="Password"
                    containerStyle={{ marginTop: 16 }}
                    type="password"
                    inputValue={password}
                    setInputValue={setPassword}
                    //ref={passwordRef}
                // customRef={passwordRef}
                />
                <TextInputField
                    title="Confirm Password"
                    placeholder="Confirm Password"
                    containerStyle={{ marginTop: 16 }}
                    type="confirmpassword"
                    inputValue={password}
                    setInputValue={setPassword}
                    //ref={passwordRef}
                // customRef={passwordRef}
                />
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        style={[styles.btnStyle, { backgroundColor: Colors.blue_main }]}>
                        <Text style={{ color: COLORS.white }}>Sign up</Text>
                    </TouchableOpacity>
                    <View style={{ marginTop: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text
                            style={{
                                color: Colors.black,
                            }}>
                            Already have an account?
                        </Text>
                        <TouchableOpacity
                            onPress={() => navigation.goBack('Sign in')}
                        >
                            <Text
                                style={{
                                    color: Colors.blue_main,
                                    //fontFamily: 'BeVietnam-SemiBold',
                                    fontSize: 14,
                                }}>
                                {` Sign In`}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.blue_main,
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    btnContainer: {
        justifyContent: 'flex-end',
        flex: 1,
        flexGrow: 1,
        marginBottom: 20,
    },
    btnStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 56,
        borderRadius: 28,
    },
})

