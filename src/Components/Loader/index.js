import React from "react";
import { ActivityIndicator, View } from "react-native";
import Colors from '../../Utils/Colors/Index'
import Styles from '../../Utils/Styles'

//Loader Component
const Loader = (props) => {
  return (
    <View style={[Styles().LoaderCont, props.viewStyle]}>
      <View style={Styles().LoaderCircle}>
      <ActivityIndicator size="large" color={Colors.ILoaderBG} />
      </View>
    </View>
  );
}
export default Loader;