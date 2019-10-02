import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { URL_API } from "../api/api";

import CardPacote from "../components/CardPacote";

export default class ListaPacote extends Component {
  state = {
    pacotes: undefined,
  };

  componentDidMount(){
    fetch(`${ URL_API }pacotes`).then(T => T.json())
        .then(pacotes => this.setState({
          pacotes
        })).catch(() => Alert.alert('Error', 'nao foi possivel recuperar o dados'))
  }

  render(){
    const { pacotes } = this.state;

    if(!pacotes){
      return <View/>
    }
    return (
        <View>
          {
            pacotes.map( (pacotes, key) => (
                <CardPacote key={key} datalhes={pacotes} onPress={()=> console.log('CARD DO PACOTE')} />
            ))
          }
        </View>
    );
  }
}