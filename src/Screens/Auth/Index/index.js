import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux'
import Styles from '../../../Utils/Styles'
let splash = require("../../../../android/app/src/main/res/drawable/splash.png")
let task_icon = require("../../../../android/app/src/main/res/drawable/task_icon.png")
import { Image } from 'react-native-elements'
import { StackActions } from '@react-navigation/native';
import CommonButton from '../../../Components/CommonButton'
import Colors from '../../../Utils/Colors/Index';

const Auth = ({ navigation, route }) => {


  // Check data is available in redux or not
  // if available then sent on home page
  // Else on Welcome page.
  useSelector(s => {
    if (s && s.login && s.login.loginData && Object.keys(s.login.loginData).length != 0) {
      console.log("CheckData", s.login.loginDataata)
      navigation.dispatch(StackActions.replace("MyDrawer", { screen: "Home" }))
    } else {
      console.log('No data available');
    }
  })

  const ReplaceScreen = (Route) => {
    navigation.dispatch(StackActions.replace(Route))
  }
  const GoToScreen = (Route) => {
    navigation.navigate(Route)
  }

  return (
    <View style={Styles().Container}>
      <Image resizeMode='contain' source={splash} containerStyle={Styles().AuthImg} />
      <View style={Styles().LButtonView}>
        <CommonButton LButton={Styles().BGDeepSky} onPress={() => ReplaceScreen('MyDrawer')} title={'Welcome'} />
      </View>
    </View>
  );
}

export default Auth;