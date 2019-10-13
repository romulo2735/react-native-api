import React, { Component } from 'react';
import { StyleSheet, Text, View, PixelRatio } from 'react-native';

export default class Footer extends Component {
  render(){
    return (
        <View style={ styles.containerFooter }>
          <Text style={styles.text}>http:://www.google.com</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  containerFooter: {
    flex: 1,
    backgroundColor: '#1E42BA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 14 / PixelRatio.getFontScale(),
    opacity: 0.8
  }
});
