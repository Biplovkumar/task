import * as React from 'react';
import { Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Auth from '../../Screens/Auth/Index';
import Settings from '../../Screens/Settings/Index';
import Home from '../../Screens/Home/Index';
import SideMenu from '../SideMenu';
import Profile from '../../Screens/Profile/Index';
import Colors from '../../Utils/Colors/Index';
import { navigationRef } from '../NavRef';
const { height, width } = Dimensions.get('window');
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements'
import { store, persistor } from '../../Redux/Store/Index/index'



const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
  
  function MyTabs() {
    const S = store.getState();

    let data = []
    if (S && S.login && S.login.loginData && S.login.loginData && S.login.loginData!= '') { data = S.login.loginData }

    return (
      <Tab.Navigator
       initialRouteName="Home"
        tabBarOptions={{ activeTintColor: Colors.Tint}} >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon type='material-community' name="home" color={color} size={size} />
            ),
            tabBarBadge: data && data != '' ? data.length : 0,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Icon type='feather' name="settings" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStack}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Icon type='material-community' name="account" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }


  const headerLeft = (navigation, route) => {
    return (
      <Icon containerStyle={{width:height/20,}} iconStyle={{alignSelf:'center'}} onPress={() => navigation.toggleDrawer()} type='material-community' name="menu" color={Colors.Black} size={height/30} />
  )};



function HomeStack({ navigation, route, }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerLeft:() => headerLeft(navigation, route)}}
      // options={{ headerShown: true, gestureEnabled: false }} 
      />
    </Stack.Navigator>
  );
}


function SettingsStack({ navigation, route, }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} options={{ headerLeft:() => headerLeft(navigation, route)}} />
    </Stack.Navigator>
  )
}


function ProfileStack({ navigation, route, }) {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} options={{ headerLeft:() => headerLeft(navigation, route)}} />
    </Stack.Navigator>
  )
}


function MyDrawer() {
  return (
    <Drawer.Navigator  drawerStyle={{ width: width * 0.8, }} drawerContent={(props) => <SideMenu {...props} />}>
      <Drawer.Screen unmountOnBlur={true} name="Home" component={MyTabs} options={{unmountOnBlur: true,}}  />
      <Drawer.Screen unmountOnBlur={true} name="Settings" component={SettingsStack} options={{unmountOnBlur: true,}}  />
      <Drawer.Screen unmountOnBlur={true} name="Profile" component={ProfileStack} options={{unmountOnBlur: true}}/>
 </Drawer.Navigator>
  );
}




function MainRoute() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
        <Stack.Screen name="MyDrawer" component={MyDrawer} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainRoute;