import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppContainer } from './navigation';
import * as Font from 'expo-font';

export default class App extends React.Component {

  state = {
     fontsLoaded: false
  };
  async componentDidMount(){
    await Font.loadAsync({
        //font1 or 2 can be any name. This'll be used in font-family
         
        neo: require('./assets/fonts/NeoSansTR.ttf'),                         
        
    });
    this.setState({fontsLoaded: true});
  }
 
  render(){
    if(this.state.fontsLoaded)
    {
        return <AppContainer /> //your application's root view
    }
    else
    {
       return <AppContainer /> //Custom view 
    }
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
