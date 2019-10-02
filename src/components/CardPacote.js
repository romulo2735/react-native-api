import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

export default class CardPacote extends Component {
  render(){
    const {onPress} = this.props;
    const {id, nome, valor, dataInicio, dataFim} = this.props.detalhes;

    return (
        <TouchableWithoutFeedback onPress={ onPress }>
          <View style={ styles.CardPacote }>
            <Text>{ id }</Text>
            <Text>{ nome }</Text>
            <Text>{ valor }</Text>
            <Text>{ dataInicio }</Text>
            <Text>{ dataFim }</Text>
          </View>
        </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  CardPacote: {
    borderWidth: 2,
    borderColor: 'red',
  }
});