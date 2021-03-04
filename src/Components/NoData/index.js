import React from "react";
import { Text, Dimensions, View } from "react-native";
import { Icon} from 'react-native-elements';
const {  height } = Dimensions.get("window");
import Colors from '../../Utils/Colors/Index'
import Styles from '../../Utils/Styles'

//NoData Component
const NoData = (props) => {
  return (
    <View style={[Styles().NoDataView,props.viewStyle]}>
    { props.bellHide ? null : 
      <Icon name='notifications-off' type='material' color={Colors.IText} size={height / 20} />}
      <Text style={Styles().NoDataText}>{props.title ? props.title : 'No data found'}</Text>
    </View>
  );
}
export default NoData;