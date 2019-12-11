import React from 'react'
import { Image } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Welcome from '../screens/Welcome'
import Login from '../screens/Login'
import Shop from '../screens/Shop'
// import Favorite from '../screens/Favorite'
// import Search from '../screens/Search'
// import Actions from '../screens/Actions'

import { theme } from '../constants';

const screens = createStackNavigator({
  Welcome,
  Login,
  Shop,
  // Favorite,
  // Search,
  // Actions
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

export const TabNavigator = createBottomTabNavigator({

  Shop
})

export const AppContainer = createAppContainer(screens);