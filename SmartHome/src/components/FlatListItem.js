import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function FlatListItem({containerStyle, title, onPressItem, navigation}) {
    return (
        <TouchableOpacity style={[styles.itemStyle, containerStyle]} onPress={()=> onPressItem}>
            <Text style={{fontSize: 12, color: 'white'}}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemStyle: {
        backgroundColor: '#DFE8F0',
        flex: 1,
        margin: 16,
        borderRadius: 16,
    },
    
})
