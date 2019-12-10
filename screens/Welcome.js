import React, { Component } from 'react'
import { Text, View, StyleSheet} from 'react-native'


class Welcome extends Component {
  static navigationOptions = {
    header: null,
  }
  
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Welcome App</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    
    fontSize: 40
  }
})
export default Welcome