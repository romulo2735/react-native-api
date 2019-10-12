import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { URL_API } from "../Api/api";
import NavigationBar from "../components/NavigationBar";

import CardPacote from "../components/CardPacote";

export default class ListaPacote extends Component {
  state = {
    pacotes: [],
  };

  componentDidMount(){
    fetch(`${ URL_API }pacotes`).then(T => T.json())
        .then(pacotes => this.setState({
          pacotes
        })).catch(() => Alert.alert('Error', 'nao foi possivel recuperar o dados'))
  }

  render(){
    const {pacotes} = this.state;

    if(!pacotes) {
      return <View/>
    }
    return (
        <View>
          <NavigationBar />
          <View>
            {
              pacotes.map((pacote, key) => (
                  <CardPacote key={ key } detalhes={ pacote } onPress={ () => this.props.history.push(`${ pacote.id }`) }/>
              ))
            }
          </View>
        </View>
    );
  }
}