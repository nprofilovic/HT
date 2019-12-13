import {Dimensions} from 'react-native'
import { create } from 'react-native-platform-stylesheet'

export const stylesAll = create ({
  headerLogo: {
    ios: {
      width:200,
      height:100
    },
    android: {
      width: 150,
      height:100,
      marginTop: 30,
      marginLeft: 90,
    }
  }
})