import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';
import HeaderLogo from '../components/Header'
import {create} from 'react-native-platform-stylesheet'
import { theme, mocks } from '../constants';
import { ScrollView } from 'react-native-gesture-handler';
import { Header, Left, Right, Body, Title } from 'native-base'


const { width } = Dimensions.get('window');

class Shop extends Component {
  state = {
    active: 'Products',
    categories: [],
  }

  componentDidMount() {
    this.setState({ categories: this.props.categories });
  }

  handleTab = tab => {
    const { categories } = this.props;
    const filtered = categories.filter(
      category => category.tags.includes(tab.toLowerCase())
    );

    this.setState({ active: tab, categories: filtered });
  }

  renderTab(tab) {
    const { active } = this.state;
    const isActive = active === tab;

    return (
      
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => this.handleTab(tab)}
        style={[
          styles.tab,
          isActive ? styles.active : null
        ]}
      >
          <ScrollView horizontal={true}>
          <Text style={{fontSize:28, marginTop:20}} gray={!isActive} secondary={isActive}>
            {tab}
          </Text>
       
        
          </ScrollView>
      </TouchableOpacity>
    )
  }

  render() {
    const { profile, navigation } = this.props;
    const { categories } = this.state;
    const tabs = ['Sve', 'Školski pribor', 'Kancelarijski materijal'];

    return (
      <View>
        <View>
          <Header transparent>
            <Left></Left>
            <Body>
              <Image source={require('../assets/images/hari-trade-logo.png')} resizeMode="center" style={styles.headerLogo} />
            </Body>
            <Right>
              <Image source={require('../assets/icons/4.png')} style={{width: 30, height: 30}} />
            </Right>
          </Header>
         
        </View>

        <View style={styles.tabs}>
          {tabs.map(tab => this.renderTab(tab))}
        </View>
      </View>
    );
  }
}

Shop.defaultProps = {
  profile: mocks.profile,
  categories: mocks.categories,
}

const styles = create({
  header:{
    paddingHorizontal: 32,
  },
  headerLogo: {
    ios:{
      width:200,
      height:100
    },
    android: {
      width: 150,
      height: 100,
      marginLeft: 35,
    }
  },
  
  tabs: {
    borderBottomColor: theme.colors.gray,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 32,
    marginHorizontal: 32,
    flexDirection:'row',
  },
  tab: {
    marginRight: 32,
    paddingBottom: 16,
    fontSize:33,
  },
  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3,
  },
  categories: {
    flexWrap: 'wrap',
    paddingHorizontal: 32,
    marginBottom: 50,
  },
  category: {
    // this should be dynamic based on screen width
    minWidth: (width - (38 - 16)) / 2,
    maxWidth: (width - (38 - 16) )/ 2,
    maxHeight: (width - (38 - 16)) / 2,
  }
})
export default Shop;
