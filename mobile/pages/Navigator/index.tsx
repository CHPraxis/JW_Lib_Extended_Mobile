import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import Home from '../Home';


import {
    View,
    Button
  } from 'react-native';
import colors from '../../styles/colors';
import {spStyles} from '../../styles/styles';


//import common from '../../styles/common';




  //TODO:  Wrap this in a Drawer Navigator.  
  //Pass the function to pop out the drawer as a prop, 
  //then put it in a hamburger menu in the Navigator.
  //https://reactnavigation.org/docs/nesting-navigators
  //https://reactnavigation.org/docs/drawer-based-navigation/
  //https://ibaslogic.com/how-to-add-hamburger-menu-in-react/

  //Don't forget to do this: https://stackoverflow.com/questions/71895172/cant-merge-user-target-xcconfig-for-pod-targets-reanimated-hermes-engine


const Drawer = createDrawerNavigator();


const Stack = createNativeStackNavigator();
/*Custom drawer icon code from https://stackoverflow.com/questions/69958946/how-to-change-the-menu-icon-color-of-the-react-native-drawer-navigator
headerLeft: (props) => {
   const {tintColor, pressColor, pressOpacity, labelVisible} = props;
   return <MyHeaderLeft {...props} />
}*/
//working on this https://reactnavigation.org/docs/drawer-navigator/#installation
export const RootDrawer = () => {
    return (
      <Drawer.Navigator id="root" initialRouteName="Feed" backBehavior="history" defaultStatus="closed" screenOptions={{
        drawerActiveTintColor : colors.smashPadBlue,
        drawerInactiveTintColor : colors.smashPadBlue,
        //drawerItemStyle:  TODO FINISH so they are all Avenir
        headerTintColor: colors.smashPadBlue,
        headerStyle: {
          backgroundColor: colors.lightgrey
        },
        headerTitleStyle: spStyles.navTitle,
         }}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="IntroPage" component={Home} />
        <Drawer.Screen name="The Navigator" component={MyNavigator} />
      </Drawer.Navigator>
    );
  }

  //not currently using
 export function MyNavigator() {
    return (
      <Stack.Navigator initialRouteName="IntroTest" screenOptions={{headerTitleStyle: spStyles.navTitle}}>
           <Stack.Screen name="IntroTest" component={Home} options={{ title: 'Welcome'}} />
            <Stack.Screen name="Home" component={Home} options={{ title: 'Welcome'}} />
            <Stack.Screen name="IntroPage" component={Home} options={{ title: 'Welcome' }} />
        </Stack.Navigator>
    );
  }


  
 
  

  

  
  export default RootDrawer;

