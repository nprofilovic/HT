import React, { Component } from 'react'
import { Image, Text, View, StyleSheet, Dimensions, Animated, FlatList, TouchableOpacity, Button} from 'react-native'
import Header from '../components/Header'

import { theme } from '../constants'




const { width, height } = Dimensions.get('window');

class Welcome extends Component {
  static navigationOptions = {
    header: null,
  }
  scrollX = new Animated.Value(0);
  
  renderIllustrations() {
    const { illustrations, navigation } = this.props;
    
    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        data={illustrations}
        extraDate={this.state}
        keyExtractor={(item, index) => `${item.id}`}
        renderItem={({ item }) => (
          <View>
            <Image
              source={item.source}
              resizeMode="contain"
              style={{ width, height: height / 2, overflow: 'visible' }}
            />
            <View style={styles.title}>
              <Text style={styles.titleText}>{item.title}</Text>
            </View>
            <View style={styles.desc} >
              <Text style={styles.destText}>{item.desc}</Text>
            </View>
            
            <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginBtnText}>Prijavi se</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.prijaviBtn}>
              <Text style={styles.prijaviBtnText}>Registruj se</Text>
            </TouchableOpacity>
            
          </View>
        )}
        onScroll={
          Animated.event([{
            nativeEvent: { contentOffset: { x: this.scrollX } }
          }])
        }
      />
    )
  }

  

  render() {

    return (
      <View style={styles.container}>
        <Header />
        <View>
          {this.renderIllustrations()}
        </View>
        
        
      </View>
    )
  }
}

Welcome.defaultProps = {
  illustrations: [
    { 
      id: 1, 
      source: require('../assets/images/welcome-1.png'),
      title: 'Online knjižara',
      desc: 'Kupi najkvalitetniji pribor po najpovoljnijim cenama za vaše mališane. Sve na jedan klik.'
    },
    { 
      id: 2, 
      source: require('../assets/images/welcome-2.png'),
      title: 'Online knjižara',
      desc: 'Sav kancelarijski materijal na jednom mestu. Sav reklamni materijal na jednom kliku od Vas.'
    },
  ],
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'flex-start',
    alignItems: 'stretch',
    
  },
  title: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    width: width
  },
  titleText: {
    justifyContent: 'center', 
    alignItems: 'center', 
    fontSize:20,
    fontWeight: 'bold'
  },
  desc: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    width: width
  },
  destText:{
    alignSelf: 'center', 
    textAlign: 'center',
    padding:32,
    fontSize: 16
  },
  loginBtn: {
    backgroundColor:'#142C79',
    marginBottom: 10,
    marginHorizontal: (70, 70),
    borderRadius:50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtnText: {
    color:'#fff',
    textAlign: 'center',
    padding: 15,
    fontSize: 20,
  },
  prijaviBtn: {
    backgroundColor:'#289EF6',
    marginBottom: 10,
    marginHorizontal: (70, 70),
    borderRadius:50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  prijaviBtnText: {
    color:'#fff',
    textAlign: 'center',
    padding: 15,
    fontSize: 20,
  },
  stepsContainer: {
    position: 'absolute',
    bottom: theme.sizes.base * 3,
    right: 0,
    left: 0,
  },
  steps: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 2.5,
  },
})
export default Welcome