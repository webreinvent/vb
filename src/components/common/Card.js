/**
 * Created by taranjeet.s on 1/4/2017.
 */
import React from 'react';
import { View } from 'react-native';

const Card = (props) =>{
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle : {

    }
};

export {Card};