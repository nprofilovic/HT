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
        tabBarLabel:"Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-bookmarks" size={20}/>
        )
      },
    },
    'Lista želja': {screen: Favorite},
    Pretraga:{ screen: Search },
    Ackije: {screen: Actions},
    Profil: {screen: AppDrawerNavigator }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Settings') {
          iconName = `ios-options`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#142C79',
      inactiveTintColor: '#289EF6',
      style: {
        borderColor: '#000',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.60,
        shadowRadius: 4.65,
        elevation: 8,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
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