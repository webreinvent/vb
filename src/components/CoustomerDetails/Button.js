/**
 * Created by taranjeet.s on 1/4/2017.
 */
import React from 'react';
import { Text,TouchableOpacity } from 'react-native';

const Button = ({onPress,children}) => {
    const { buttonStyle,textStyle } = styles;
    return (
        <TouchableOpacity onPress={onPress}style={buttonStyle}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
}

const styles = {
    textStyle:{
        alignSelf:'center',
        color : '#FDFEFE',
        fontSize : 10,
        fontWeight : '400',
    },
    buttonStyle : {
        justifyContent : 'center',
        height : 40,
        width : 70,
        backgroundColor: '#199d79',
    }
};
export default Button ;