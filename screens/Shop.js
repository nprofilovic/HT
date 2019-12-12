import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';
import Header from '../components/Header'
import { theme, mocks } from '../constants';
import { ScrollView } from 'react-native-gesture-handler';

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
        <View style={styles.headerLogo}>
          
          <Header />
          <View style={styles.korpa}>
            <Image source={require('../assets/icons/4.png')} style={{width:30, height:30}} />
          </View>
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

const styles = StyleSheet.create({
  header:{
    paddingHorizontal: 32,
  },
  headerLogo: {
    flex:1,
    justifyContent:'space-between',
    alignItems: 'flex-end',
    marginTop:60,
  },
  korpa:{
    paddingHorizontal: 32,
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
