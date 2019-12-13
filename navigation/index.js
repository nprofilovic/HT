import React from 'react'
import { Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'

import Welcome from '../screens/Welcome'
import Login from '../screens/Login'
import Shop from '../screens/Shop'
import Profile from '../screens/Profile/Profile'
import Istorija from '../screens/Profile/Istorija'
import Favorite from '../screens/Favorite'
import Search from '../screens/Search'
import Actions from '../screens/Actions'

import { theme } from '../constants';


const AppDrawerNavigator = createDrawerNavigator({
  Profile,
  Istorija
});

  const AppTabNavigator = createBottomTabNavigator({
    Shop: {
      screen: Shop,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          const image = focused 
          ? require('../assets/icons/hari-1.png')
          : require('../assets/icons/hari-1a.png')
          return <Image source={image} style={{width:40, height: 40}} />
        },
      },
    },
    'Lista želja': {
      screen: Favorite,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          const image = focused 
          ? require('../assets/icons/22.png')
          : require('../assets/icons/asset-1.png')
          return <Image source={image} style={{width:40, height: 40}} />
        },
      },
    },
    Pretraga:{ 
      screen: Search,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          const image = focused 
          ? require('../assets/icons/search-2.png')
          : require('../assets/icons/search.png')
          return <Image source={image} style={{width:30, height: 30}} />
        },
      }, 
    },
    Akcije: {
      screen: Actions,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          const image = focused 
          ? require('../assets/icons/abed-1.png')
          : require('../assets/icons/abed-1.png')
          return <Image source={image} style={{width:30, height: 30}} />
        },
      },
    },
    Profil: {
      screen: AppDrawerNavigator,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          const image = focused 
          ? require('../assets/icons/asset-53.png')
          : require('../assets/icons/asset-27.png')
          return <Image source={image} style={{width:35, height: 35}} />
        },
      }, 
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      
    }),
    tabBarOptions: {
      activeTintColor: '#142C79',
      inactiveTintColor: '#B6B5B5',
      style: {
          borderColor: '#000',
          shadowColor: "#000",
          backgroundColor:'#fff',
          borderRightColor:'#000',
          borderLeftColor:'#000',
          borderTopColor: '#000',
          borderWidth:1,
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.60,
          shadowRadius: 4.65,
          elevation: 8,
          position:'relative',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height:60
        },
    },

  }
)

const AppStackNavigator = createStackNavigator({
  Welcome,
  Login,
},{
  defaultNavigationOptions: {
    headerStyle: {
      height: theme.sizes.base * 4,
      backgroundColor: '#ffffff',
      borderBottomColor: "transparent",
      elevation: 0
    },
    headerBackImage: <Image source={require('../assets/icons/sadea-1.png')} style={{width:40, height:40}} />,
    headerBackTitle: null,
    headerLeftContainerStyle: {
      alignItems: 'center',
      marginLeft: theme.sizes.base * 2, 
      paddingRight: theme.sizes.base,
    },
    headerRightContainerStyle: {
      alignItems: 'center',
      paddingRight: theme.sizes.base,
    },
    
  },
  
})


const AppSwitchNavigator = createSwitchNavigator({
  Welcome: {screen: AppStackNavigator},
  Tab: {screen: AppTabNavigator},
  Draw: {screen: AppDrawerNavigator}
})


export const AppContainer = createAppContainer(AppSwitchNavigator);