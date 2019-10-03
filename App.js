import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ListaPacote from "./src/views/ListaPacote";
import DetalhePacote from "./src/views/DetalhePacote";

export default class App extends Component {
  render(){
    return (
        <DetalhePacote />
    );
  }
}