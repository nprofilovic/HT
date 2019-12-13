import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions   } from 'react-native';
import {Header, Body, Left, Right, Icon, Button} from 'native-base'
import { create } from 'react-native-platform-stylesheet'

const { width, height } = Dimensions.get('screen');

class Profile extends Component {
  

  render() {
    return (
      <View>
        <Header transparent>
          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Image source={require('../../assets/icons/menu.png')} style={styles.menu} />
             </Button>
          </Left>
          <Body>
            <Image source={require('../../assets/images/hari-trade-logo.png')} resizeMode="center" style={styles.headerLogo} />
          </Body>
          <Right>

          </Right>
        </Header>
        <View style={styles.content}>
          <Image source={require('../../assets/images/watson.png')} style={styles.watsonLogo} />
        </View>
      </View>
    );
  }
}

const styles = create({
  content: {
    flex:1,
    marginTop: 50,
    alignItems: 'center',
  },
  headerLogo: {
    ios: {
      width: 200,
      height:100
    },
    android: {
      width: 150,
      height:100,
      marginLeft: 30,
    }

  },
  menu: {
    ios:{
      width:25,
      height:25
    },
    android: {
      width: 25,
      height: 25
    }
  },
  watsonLogo: {
    width: 300,
    height: 300,
    
    justifyContent: 'center',
  },
})
export default Profile;
