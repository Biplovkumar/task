import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Styles from '../../Utils/Styles'

// =================Props of Button===================
const CommonButton = (props) => {
  let { onPress, title, LButton, ButtonText } = props;

  // =================Button===================
  return (
    <TouchableOpacity onPress={onPress}
      style={[Styles().LButton, LButton]}>
      <Text style={[Styles().ButtonText, ButtonText]}>{title}</Text>
    </TouchableOpacity>
  );
}

export default CommonButton;