import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { forwardRef } from 'react/cjs/react.production.min';

const { width, height } = Dimensions.get('screen');
import { Colors } from '../assets/colors';
const COLORS = {
  purple: '#261D70',
  dark_purple: '#140D50',
  labelInput: '#B3A7EF',
  placeholderInput: '#8375D3',
  blue: '#00B5FF',
  pink: '#FF36A4',
  pinkHide: '#5C247D',
  labelInputHide: '#855A9D',
  btnColor: '#FEFEFF',
};

export default TextInputField = forwardRef(
    (
      {
        title,
        placeholder,
        containerStyle,
        type,
        inputValue,
        setInputValue,
        onSubmitEditing,
      },
      ref,
    ) => {
      const [isFocused, setIsFocused] = useState(false);
      const [isHide, setIsHide] = useState(true);
      const handleFocus = () => setIsFocused(true);
      const handleBlur = () => setIsFocused(false);
      return (
        <View
          style={[
            styles.inputContainer,
            { borderColor: isFocused ? Colors.blue_main : '#DFE8F1' },
            containerStyle,
          ]}>
          <View style={{ width: '80%' }}>
            <Text style={styles.text}>{title}</Text>
            <TextInput
              ref={ref}
              style={styles.textInput}
              placeholder={placeholder}
              placeholderTextColor='#748c94'
              // placeholderStyle={{fontFamily: 'BeVietnam-Bold'}}
              onBlur={handleBlur}
              onFocus={handleFocus}
              value={inputValue}
              secureTextEntry={isHide && type !== 'username'}
              onChangeText={text => {
                setInputValue(text);
              }}
              onSubmitEditing={onSubmitEditing} //
            />
          </View>
  
          {type === 'username' ? (
            inputValue !== '' ? (
              <View style={styles.iconContainer}>
                <FeatherIcon
                  name="x-circle"
                  onPress={() => {
                    setInputValue('');
                  }}
                  color={Colors.gray}
                  size={20}
                />
              </View>
            ) : null
          ) : (
            <View style={styles.iconContainer}>
              <FeatherIcon
                name={isHide ? 'eye-off' : 'eye'}
                onPress={() => {
                  setIsHide(!isHide);
                }}
                color={Colors.gray}
                size={20}
              />
            </View>
          )}
        </View>
      );
    },
  );

  const styles = StyleSheet.create({
    inputContainer: {
      marginTop: 10,
      // flex: 1,
      borderRadius: 12,
      // position: 'absolute',
      color: 'white',
      paddingHorizontal: 16,
      borderWidth: 1.5,
      flexDirection: 'row',
      // height: 60
    },
    text: {
      color: Colors.blue_main,
      fontSize: 13,
      marginTop: 12,
      fontWeight: '700'
    },
    textInput: {
      color: Colors.black,
      margin: 0,
      paddingLeft: 0,
      paddingTop: 4,
      paddingBottom: 12,
      fontSize: 14
    },
    btnEye: {
      position: 'absolute',
      top: 8,
      right: 37,
    },
    btnContainers: {
      justifyContent: 'flex-end',
      flex: 1,
    },
    btn: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      height: 40,
    },
    iconContainer: {
      alignItems: 'flex-end',
      justifyContent: 'center',
      width: '20%',
    },
  });