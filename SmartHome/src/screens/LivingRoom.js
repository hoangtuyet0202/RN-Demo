import React, { useState } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
    Dimensions,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    Switch,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../assets/colors';
const numColumns = 2;
const WIDTH = Dimensions.get('screen').width;
export default function LivingRoom() {
    const datas = [
        { key: '1', name: 'Air Conditioner' },
        { key: '2', name: 'Light Buld' },
    ];

    const [isEnabledLight, setIsEnabledLight] = useState(false);
    const toggleSwitchLight = () =>
        setIsEnabledLight(previousState => !previousState);
    const [isEnabledAir, setIsEnabledAir] = useState(false);
    const toggleSwitchAir = () =>
        setIsEnabledAir(previousState => !previousState);
    const formatData = (datas, numColumns) => {
        const totalRows = Math.floor(datas.length / numColumns);
        let totalLastRow = datas.length - totalRows * numColumns;
        while (totalLastRow !== 0 && totalLastRow !== numColumns) {
            datas.push({ key: 'blank', empty: true });
            totalLastRow++;
        }
        return datas;
    };
    const renderItem = ({ item, index }) => {
        if (item.empty) {
            return (
                <View style={[styles.itemStyle, styles.itemInvisible]}></View>
            );
        }
        return (
            <View style={styles.itemStyle}>
                <View style={{ alignItems: 'flex-start', margin: 16 }}>
                    {item.name === 'Air Conditioner' ? (
                        <FontAwesome
                            name="lightbulb-o"
                            size={32}
                            color={Colors.black}
                        />
                    ) : null}
                    {item.name === 'Light Buld' ? (
                        <Image
                            style={styles.image}
                            source={require('../assets/images/air-conditioner.png')}
                        />
                    ) : null}
                </View>
                <Text
                    style={{
                        fontSize: 14,
                        color: Colors.white,
                        fontWeight: 'bold',
                        margin: 16,
                    }}>
                    {item.name}
                </Text>
                <View style={{ alignItems: 'flex-start', margin: 16 }}>
                    {item.name === 'Air Conditioner' ? (
                        <Switch
                            trackColor={{
                                false: Colors.gray,
                                true: Colors.purple,
                            }}
                            thumbColor={
                                isEnabledAir ? Colors.purple : '#f4f3f4'
                            }
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitchAir}
                            value={isEnabledAir}
                        />
                    ) : null}
                    {item.name === 'Light Buld' ? (
                        <Switch
                            trackColor={{
                                false: Colors.gray,
                                true: Colors.purple,
                            }}
                            thumbColor={
                                isEnabledLight ? Colors.purple : '#f4f3f4'
                            }
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitchLight}
                            value={isEnabledLight}
                        />
                    ) : null}
                </View>
            </View>
        );
    };
    return (
        <View style={styles.container}>
            <View style={[styles.indexStyle, { marginTop: 8 }]}>
                <View style={[styles.textView]}>
                    <Text style={styles.text}>Temperature</Text>
                </View>
                <FontAwesome
                    name="snowflake-o"
                    size={32}
                    color={Colors.blue_background}
                />
                <Text
                    style={{
                        color: Colors.blue_main,
                        fontSize: 24,
                        fontWeight: 'bold',
                    }}>
                    {'    '}
                    32 °C
                </Text>
            </View>
            <View style={[styles.indexStyle, { marginTop: 32 }]}>
                <View style={[styles.textView]}>
                    <Text style={styles.text}>Humid</Text>
                </View>
                <Image
                    style={styles.image}
                    source={require('../assets/images/humid.png')}
                />
                <Text
                    style={{
                        color: Colors.blue_main,
                        fontSize: 24,
                        fontWeight: 'bold',
                    }}>
                    {' '}
                    80.00
                </Text>
            </View>
            <View style={[styles.indexStyle, { marginTop: 32 }]}>
                <View style={[styles.textView]}>
                    <Text style={styles.text}>PPM</Text>
                </View>
                <Image
                    style={styles.image}
                    source={require('../assets/images/aqi.png')}
                />
                <Text
                    style={{
                        color: Colors.blue_main,
                        fontSize: 24,
                        fontWeight: 'bold',
                    }}>
                    {' '}
                    45.45
                </Text>
            </View>
            <SafeAreaView
                style={{
                    flex: 1,
                    width: WIDTH,
                    marginTop: datas.length >= 3 ? 60 : 240,
                }}>
                <FlatList
                    data={formatData(datas, numColumns)}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={numColumns}
                />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // margin: 16,
        flex: 1,
        flexGrow: 1,
        //marginBottom: 100,
        alignItems: 'center',
        //backgroundColor: Colors.blue_background
    },
    indexStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 32,
        // marginRight: 16
    },
    image: {
        height: 40,
        width: 40,
        alignItems: 'center',
        marginRight: 16,
    },
    textStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemInvisible: {
        backgroundColor: 'transparent',
    },
    itemStyle: {
        backgroundColor: Colors.blue_background,
        flex: 1,
        margin: 8,
        borderRadius: 16,
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: Colors.blue_background,
        height: WIDTH / numColumns - 16,
    },
    textView: {
        marginHorizontal: 16
    },
    text: {
        color: Colors.blue_main,
        fontSize: 20,
        fontWeight: 'bold',
    }
});
