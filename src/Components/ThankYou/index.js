import React from "react";
import { View, Text, Image } from "react-native";
import Colors from '../../Utils/Colors/Index'
import Styles from '../../Utils/Styles'
import CStyles from "../CompStyles";
import GlobalButtons from "../GlobalButton";

let key_book = require("../../Assets/Images/thankyou.png")

const ThankYou = (props) => {
    return (
        <View style={[Styles().ThankuCont, props.viewStyle]}>
            <View style={CStyles().ThankView}>
                <Image source={key_book} containerStyle={{}} />
            </View>
            <View style={CStyles().ThankView1}>
            <Text style={CStyles().ThankViewTitle}>Thank You!</Text>
                <Text style={CStyles().ThankViewTitle1} >Congratulations Data added Successfully.</Text>
                <GlobalButtons Press={()=>props.navigation.navigate('Home')} Label={"Go to Dashboard"} LabelColor={Colors.White} style={CStyles().ThankView2} />
            </View>
        </View>
    );
}
export default ThankYou;