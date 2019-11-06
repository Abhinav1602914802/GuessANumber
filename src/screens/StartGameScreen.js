import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableWithoutFeedback, 
    Button, 
    Keyboard,
    Alert
} from 'react-native';

import Card from '../components/Card';
import Colors from '../../constants/Colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false); 
    const [selectedNumber, setSelectedNumber] = useState();

    const numberHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));

    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {

        const chosenNumber = parseInt(parseInt(enteredValue));

        if(isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99)
        {
            Alert.alert(
                'Invalid Number',
                'Number has to be number between 1 to 99.',
                [{text: 'okay', style: 'destructive', onPress: resetInputHandler }]
            )
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    }

    let confirmedOutput;

    if(confirmed)
    {
        confirmedOutput = 
        (
            <Card style = {styles.summaryContainer}>
                <BodyText>You selected</BodyText>
                <NumberContainer>
                    {selectedNumber}
                </NumberContainer>
                <MainButton onPress = {() => props.onStartGame(selectedNumber)} >
                    START GAME
                </MainButton>
            </Card>
        );
    }

    return (
        <TouchableWithoutFeedback 
            onPress = {() => {
                Keyboard.dismiss();
            }
        }>
            <View style={styles.screen} >
                <TitleText style = { styles.title }>Start the New Game</TitleText>
                <Card style = { styles.inputContainer }>
                    <BodyText style = { styles.text }>Select a Number</BodyText>
                    <Input 
                        style = {styles.input} 
                        blurOnSubmit 
                        autoCapitalize='none' 
                        autoCorrect={false} 
                        keyboardType="number-pad" 
                        maxLength={2} 
                        onChangeText={numberHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button title='Reset' onPress = {resetInputHandler} color={Colors.accent} /></View>
                        <View style={styles.button}><Button title='Confirm' onPress = {confirmInputHandler} color = {Colors.primary} /></View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'OpenSans-Bold'
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 80
    },
    input: {
        width: 50,
        textAlign: "center"
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    },
    text: {
        fontFamily:'OpenSans-Regular'
    }
});

export default StartGameScreen;


