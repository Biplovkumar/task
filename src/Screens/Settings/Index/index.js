import React, { useState, useEffect, createRef } from 'react'
import { View, Text, Dimensions, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CommonButton from '../../../Components/CommonButton'
import Styles from '../../../Utils/Styles'
import { useDispatch, useSelector } from 'react-redux'
import Type from '../../../Redux/ActionTypes/Index'
import Loader from '../../../Components/Loader/index'
const { height, width } = Dimensions.get('window');
import CommonInput from '../../../Components/CommonInput/index'
import NoData from '../../../Components/NoData'
import { showMessage } from 'react-native-flash-message'

//Show item in Flat list
const Item = ({ title }) => (
  <View style={Styles().myItem}>
    <Text style={Styles().myTitle}>{title}</Text>
  </View>
);

//Start components
const Settings = (props) => {

  let UData = []
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState('');
  const titleInput = createRef();
  const dispatch = useDispatch()
 
 
  useSelector(S => { if (S && S.login && S.login.loginData && Object.keys(S.login.loginData).length != 0) { UData = S.login.loginData; }})

  useEffect(() => { setLoading(false) }, []);

  const GoToScreen = () => {props.navigation.navigate('Settings')}

  const removeError = async () => { setTitleError('') }


  const SaveData = () => {

    if(titleError){removeError()}

    if (!title) {
      titleInput.current.focus();
      setTitleError('Please enter title')
      return
    }
    if (!title.trim()) {
      titleInput.current.focus();
      setTitleError('Please enter title')
      return
    }
   
    setLoading(true)
    let Temp = []
    if (UData && UData != '') { Temp = UData }
    Temp.push({ title: title })
    dispatch({ type: Type.Login, loginType: Temp })
    GoToScreen()
    setTimeout(() => { setTitle(''); setLoading(false) }, 100);
    showMessage({ message: 'Success', description: 'Data Added successfully.', type: "success", });
  }


  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );


  return (
    <SafeAreaView style={Styles().Container}>
      
      { loading ? <Loader /> :

        <>

          <View style={Styles().myCont}>
            <CommonInput
              inputRef={titleInput}
              value={title}
              maxLength={50}
              placeholder={!title ? "Enter Title" : ''}
              label={title ? "Title" : ' '}
              errorMessage={titleError}
              onChangeText={val => { removeError(); setTitle(val) }}
              leftIcon={{ type: 'material-community', name: 'video-input-antenna', size: height / 35 }}
            />
            <CommonButton LButton={Styles().BGDeepSky} onPress={() => SaveData()} title={'Submit'} />
          </View>


          <View style={Styles().SaveView}>
            <Text style={Styles().SaveTitle}>Saved Data :</Text>
          </View>

          { UData && UData != '' ?
            <FlatList
              data={UData}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
            :
            <NoData title={"No Data Found"} />
          }


        </>}
    </SafeAreaView>
  )
}


export default Settings