import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import moment from 'moment';
import 'moment/locale/pt-br'

export default class CardPacote extends Component {

  componentDidMount(){
    moment.locale('ptbr');
  }

  render(){
    const {onPress} = this.props;
    const {id, nome, valor, dataInicio, dataFim} = this.props.detalhes;

    return (
        <TouchableWithoutFeedback onPress={ onPress }>
          <View style={ styles.CardPacote }>
            <Text>{ id }</Text>
            <Text>{ nome }</Text>
            <Text>{ valor }</Text>
            <Text>De { moment(dataInicio).format(' YY[de] MMMM ') } até { moment(dataFim).format(' YY[de] MMMM ') }</Text>
            <Text>{ moment.duration(moment(dataInicio).diff(moment(dataFim))).humanize() }</Text>
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