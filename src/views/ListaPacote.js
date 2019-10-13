import React, { Component } from 'react';
import { StyleSheet, Text, View, PixelRatio, ScrollView, Alert } from 'react-native';
import { URL_API } from "../Api/api";

import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import CardPacote from "../components/CardPacote";
import ImageTitle from "../components/ImageTitle";

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
        <View styles={ styles.containerListaPacote }>
          <NavigationBar/>
          <ScrollView>
            <ImageTitle style={ styles.image }/>
            {
              pacotes.map((pacote, key) => (
                  <CardPacote
                      key={ key }
                      detalhes={ pacote }
                      onPress={ () => this.props.history.push(`${ pacote.id }`) }
                  />
              ))
            }
            {
              pacotes.length === 0 &&(
                  <Text style={styles.textWithoutItems}>
                    Nenhum Pacote Encontrado
                  </Text>
              )
            }
          </ScrollView>
          <Footer style={{ flex: 0.1 }} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  containerListaPacote: {
    flex: 1,
    justifyContent: 'space-around',
  },
  content: {
    flex: 0.8,
    flexDirection: 'column',
    backgroundColor: '#224AD0'
  },
  image: {
    marginBottom: 30,
  },
  textWithoutItems: {
    fontSize: 15 / PixelRatio.getFontScale(),
    textAlign: 'center',
    color: '#FFF',
  },
});