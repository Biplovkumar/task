import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Dimensions, ImageBackground, Image, Alert } from 'react-native'
import { SideMenuData } from "../../Components/JsonData";
import Config from '../../Utils/Config/Index'
import Styles from "../../Utils/Styles";
import Colors from "../../Utils/Colors/Index";
import Type from '../../Redux/ActionTypes/Index'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
import { CapitalizeName } from "../../Utils/CommonFun/Index";
import { showMessage } from "react-native-flash-message";


const { height, width } = Dimensions.get('window');
let sideBack = require("../../Assets/Images/side-back.png")

const SideMenu = (props) => {
    let activeIndex = 0
    let activeRouteName = ""
    let data = null
    const { route, navigation } = props
    const dispatch = useDispatch()
    const [active, setActive] = useState('Home');
    const [activeRoute, setActiveRoute] = useState('');
    const [ind, setind] = useState(0);


    useEffect(() => {
        setActiveRoute(activeRouteName);
        GotoPage1(ind, "one")
    }, [props])


    const GotoPage1 = (type, st) => {
        if (st == "one") {
            SideMenuData.Menu.map((item, index) => {
                if (type == index) {
                    item.active = true
                } else {
                    item.active = false
                }
            })

        } else {
            SideMenuData.Menu.map((item, index) => {
                item.active = false
            })
        }
        setind(type)
    }
    // console.log("index", ind);


    if (props && props.state && props.state.index != ind) {
        // console.log("insideee", ind);

        GotoPage1(props.state.index, "one")
        activeIndex = props.state.index
        if (props.state.routes && props.state.routes != "") {
            let screen = props.state.routes[activeIndex].name
            activeRouteName = screen
        }
    }



    const UData = useSelector(S => {
        if (S && S.login && S.login.loginData && Object.keys(S.login.loginData).length != 0) { data = S.login.loginData; }
    })



    const deleteData = () => {

        Alert.alert(
            'Alert',
            'Do you want to Clear Data?',
            [
                {
                    text: 'Cancel',
                    onPress: () => navigation.toggleDrawer(),
                    style: 'cancel',
                },
                { text: 'Confirm', onPress: () => { callLogout(); navigation.toggleDrawer() } },
            ],
            { cancelable: false },
        );
    }


    const callLogout = async () => {
        handleLogout()
        showMessage({ message: 'Success', description: 'Clear Data successfully.', type: "success", });
    }

    const handleLogout = async () => {
        try {
            await AsyncStorage.clear()
            dispatch({ type: Type.Login, loginType: null })
            setind(-1)
            GotoPage1(ind, "two")        
            navigation.dispatch(StackActions.replace("Auth"))
        } catch (error) {
            console.log(error)
        }
    }


    const renderItem = ({ item, index }) => {
        return (
            <View key={index} style={Styles({ status: item.active }).SideMenuTabMainView}>
                <TouchableOpacity style={Styles({ status: item.active }).SideMenuTabViewImg} key={index} onPress={() => navigateToScreen(item)}>
                    <Image
                        source={item.imgName}
                        tintColor={item.active ? Colors.White : Colors.Button}
                        style={{ tintColor: item.active ? Colors.White : Colors.Button }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={Styles({ status: item.active }).SideMenuTabView} key={index} onPress={() => navigateToScreen(item)}>
                    <Text style={Styles({ status: item.active }).SideMenuTabTextStyle}> {item.name}</Text>
                    <View style={Styles().SideImageDashView}>
                        <Text style={Styles().SideImageDashTxt}>--------------------------------------------</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }


    const navigateToScreen = (item) => {
        if (item.name == "Clear Data") {
            setActive(item.name);
            // navigation.closeDrawer();
            deleteData()
        }
        if (item && item.screen) {
            setActive(item.screen);
            navigation.closeDrawer();
            navigation.navigate(item.screen)
        }

    }



    let Name = 'Biplov Kumar'
    let Email = 'biplovkumar.kumar@gmail.com'
    // console.log("activeRouteName ", activeRoute, "SideMenuData.Menu", SideMenuData.Menu, "Props", props);

    return (
        <View style={Styles().SafeAreaViewStyle}>
            <ImageBackground source={sideBack} style={Styles().SideMenuImageStyle}>
                <View style={Styles().TopView}>
                    <View style={Styles().SideUserImageView}>
                        <View style={Styles().SideUserImageView1}>
                            <View style={Styles().SideUserImageView2}>
                                <Image
                                    defaultSource={Config.DummyImage}
                                    source={Config.DummyImage}
                                    style={Styles().SideUserImageStyle}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={Styles().mv80}>
                        <Text style={Styles({ size: height / 40 }).SideUserImageTxt}> {Name}</Text>
                    </View>
                    <Text style={Styles({ size: height / 50 }).SideUserImageTxt}> {Email}</Text>

                </View>
            </ImageBackground>
            {SideMenuData.Menu.length > 0 ?
                <FlatList
                    data={SideMenuData.Menu}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => String(index)}
                    showsVerticalScrollIndicator={false}
                /> : null}


        </View>
    )
}


export default SideMenu;