import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

class Header extends Component {
  
  render() {
    return (
      <View style={styles.logo}>
        <Image source={require ("../assets/images/hari-trade-logo.png")} resizeMode="center" style={styles.imageLogo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageLogo: {
    marginTop: 20,
    width: 416,
    height:104
  },
})

export default Header;
