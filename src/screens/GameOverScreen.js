import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../../constants/Colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return (
        <View style = {styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image 
                    //source={require('../../assets/success.png')} 
                    source={{uri: 'https://cdn.dribbble.com/users/788099/screenshots/3086876/jumping_success_joy_kit8-net.png'}} 
                    style = {styles.image}
                />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>
                    Your phone needed 
                    <Text style = {styles.heighlight}> {props.roundsNumber} </Text>
                    rounds to guess the number 
                    <Text style = {styles.heighlight}> {props.userNumber}</Text>.
                </BodyText>
            </View>
            <MainButton  onPress={props.onRestart}>
                NEW GAME
            </MainButton>
        </View>
    );
}

const styles =  StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        width: '80%',
        height: 300,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    heighlight: {
        color: Colors.primary,
        fontFamily: 'OpenSans-Bold '
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 15
    },
    resultText: {
        textAlign: 'center'
    }
});

export default GameOverScreen;