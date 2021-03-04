import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import Styles from '../../../Utils/Styles'

const renderText = (val) => {return (<SafeAreaView style={Styles().CenterCont}><Text>{val}</Text></SafeAreaView> )};

const Profile = () => {return (renderText('Profile Screen')) }

export default Profile