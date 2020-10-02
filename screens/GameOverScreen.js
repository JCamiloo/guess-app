import React from 'react';
import { View, Button, Image, Text, StyleSheet } from 'react-native';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import Colors from '../constants/colors';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText> The game is over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/success.png')}
          style={styles.image}
          resizeMode='cover'
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed{' '}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number{' '}
          <Text style={styles.highlight}>{props.userNumber}</Text>
        </BodyText>
      </View>
      <Button title='New game' onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'white',
    overflow: 'hidden',
    marginVertical: 30
  },
  image: {
    width: '100%',
    height: '100%'
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15
  },
  resultText: {
    textAlign: 'center',
    fontSize: 18
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold'
  }
});

export default GameOverScreen;
