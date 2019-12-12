import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header'
class Profile extends Component {
  static navigationOptions = {
    header: (
        <Header />  
    )
  }
  render() {
    return (
      <View style={styles.content}>
        <Text> Profile </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex:1,
    marginTop: 50,
  }
})
export default Profile;
