import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import Colors from '../../constants/Colors';
import TitleText from '../components/TitleText';

const Header = props => {
    return (
        <View style={ styles.header }>
            <TitleText>{props.title}</TitleText>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        width: "100%",
        height: 60,
        paddingTop: 30,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Header;