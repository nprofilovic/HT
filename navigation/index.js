import React from 'react'
import { Image } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from '../screens/Welcome'
// import Shop from '../screens/Shop'
// import Favorite from '../screens/Favorite'
// import Search from '../screens/Search'
// import Actions from '../screens/Actions'

import { theme } from '../constants';

const screens = createStackNavigator({
  Welcome,
  // Shop,
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
    headerBackImage: <Image source={require('../assets/icons/sadea-1.png')} />,
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

export const AppContainer = createAppContainer(screens);