import React, { Component } from 'react';
import { ImageBackground, PixelRatio, StyleSheet, Text, View } from 'react-native';

export default class ImageTitle extends Component {
  render(){
    return (
        <ImageBackground
            resizeMode='cover'
            style={ styles.background }
            source={ backgroundImageUri }>
          <View style={ styles.container }>
            <Text style={styles.title}>{ 'Turismo é o nosso negocio'.toUpperCase() }</Text>
          </View>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: '#F6DB54',
    padding: 6,
    borderRadius: 1,
  },
  background: {
    flex: 1,
    height: 136,
    flexDirection: 'row',
    justifyContent: 'content',
    alignItems: 'center',
  },
  title: {
    fontSize: 11 / PixelRatio.getFontScale(),
    textAlign: 'center',
    fontWeight: 'bold',
  }
});
