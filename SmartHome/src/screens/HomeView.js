import React from 'react'
import { StyleSheet, Text, FlatList, View, Dimensions, SafeAreaView } from 'react-native'
import FlatListItem from '../components/FlatListItem';
const datas = [
    {key: '1'},
    {key: '2'},
    {key: '3'},
    {key: '4'},
    {key: '5'}
]
const numColumns = 2;
const WIDTH = Dimensions.get('screen').width;

export default function HomeView({navigation}) {
    const formatData = (datas, numColumns) => {
        const totalRows = Math.floor(datas.length / numColumns)
        let totalLastRow = datas.length - (totalRows*numColumns);
        while(totalLastRow !== 0 && totalLastRow !== numColumns) {
            datas.push({key: 'blank', empty: true});
            totalLastRow++;
        }
        return datas;
    }
    const renderItem = ({item, index}) => {
        if(item.empty) {
            return <View style={[styles.itemStyle,styles.itemInvisible]}></View>
        }
        return <FlatListItem title = {item.key} containerStyle={{height: WIDTH/numColumns - 16}} 
           // onPressItem={navigation.navigate('Details')}
        />
        // (<TouchableOpacity style={styles.itemStyle} onPress={navigation.replace('Details')}>
        //     <Text style={{fontSize: 12, color: 'white'}}>{item.key}</Text>
        // </TouchableOpacity>)
    }
    return (
        <SafeAreaView style={{flex: 1, paddingTop: 40, backgroundColor: '#1489E5',}}>
            <View style={styles.textStyle}>
                <Text style={{color: '#DFE8F0', fontSize: 20, fontWeight: 'bold'}}>Devices</Text>
            </View>
        <FlatList
            data={formatData(datas, numColumns)}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={numColumns}
            // refreshControl={
            //     <RefreshControl
            //         refreshing={refreshing}
            //         onRefresh={onRefresh}
            //     />
            // }
        />
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemInvisible: {
        backgroundColor: 'transparent'
    },
    itemStyle: {
        backgroundColor: '#DFE8F0',
        flex: 1,
        margin: 16,
        borderRadius: 16,
    },
})
