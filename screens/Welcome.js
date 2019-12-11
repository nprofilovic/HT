import React, { Component } from 'react'
import { Image, Text, View, StyleSheet, Dimensions, Animated, FlatList, TouchableOpacity, Button} from 'react-native'

import { theme } from '../constants'
import { colors } from '../constants/theme';



const { width, height } = Dimensions.get('window');

class Welcome extends Component {
  static navigationOptions = {
    header: null,
  }
  scrollX = new Animated.Value(0);
  
  renderIllustrations() {
    const { illustrations } = this.props;

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
            
            <TouchableOpacity>
              <Text style={styles.loginBtn}>Prijavi se</Text>
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
        <View style={styles.logo}>
          <Image source={require ("../assets/images/hari-trade-logo.png")} resizeMode="center" style={styles.imageLogo} />
        </View>
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
  logo: {
    
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageLogo: {
    marginTop: 20,
    width: 416,
    height:104
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
    margin: 50,
    color:'#fff',
    textAlign: 'center',
    padding: 30,
   

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