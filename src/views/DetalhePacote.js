import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import { URL_API } from "../Api/api";
import { Alert } from "react-native-web";

export default class DetalhePacote extends Component {
  state = {
    detalhe: undefined,
  };

  componentDidMount(){
    fetch(`${ URL_API }pacote/13/detalhes`)
        .then(T => T.json())
        .then(detalhe => this.setState({detalhe}))
        .catch(() => Alert.alert('Error', 'nao foi possivel recuperar o pacote'))
  }

  render(){
    const {detalhe} = this.state;

    if(!detalhe) {
      return (
          <View/>
      )
    }

    return (
        <View style={ styles.container }>
          <ImageBackground resizeMode='cover' style={ styles.image } source={ {uri: detalhe.urlImagem} }>
            <Text> { detalhe.pacote.nome.upperCase } </Text>
          </ImageBackground>

          <View>
            <Text> Descrição: { detalhe.descricao }</Text>
            <Text> Telefone: { detalhe.telefone }</Text>
            <Text> Site: { detalhe.site }</Text>
            <Text> Valor: { detalhe.pacote.valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) }</Text>
          </View>

          <Button title='voltar' />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 200,
  }
});
