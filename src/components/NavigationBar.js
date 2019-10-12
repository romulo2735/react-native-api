import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, Toolbar, ToolbarBackAction, ToolbarContent } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primaryColor: '#224DD0',
    accentColor: '#F1C50F',
  }
};

export default class NavigationBar extends Component {
  render(){
    const {goBack} = this.props;
    return (
        <Toolbar theme={theme}>
          {
            goBack&&(
                <ToolbarBackAction onPress={ goBack }/>
            )
          }
          <ToolbarContent title='GoTour'/>
        </Toolbar>
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
});
