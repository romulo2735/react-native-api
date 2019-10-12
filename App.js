import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';

import ListaPacote from "./src/views/ListaPacote";
import DetalhePacote from "./src/views/DetalhePacote";

export default class App extends Component {
  render(){
    return (
        <NativeRouter>
          <View style={styles.container}>
            <Switch>
              <Route path='/:pacoteId' component={DetalhePacote}/>
              <Route component={ListaPacote}/>
            </Switch>
          </View>
        </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});