/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */


//TODO: Make an enum or spobject with protocol for all the types of objects that might get passed around.  Make a cell return type. 
//TODO: Get rid of the header
import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActionHelpers, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import common from '../../styles/common';
import Animated, {BounceInRight, FadeIn, FadeInRight, FlipInXUp, LightSpeedInRight, RotateInDownLeft, RotateInDownRight, StretchInX} from 'react-native-reanimated';
import RenderHTML from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';




const Stack = createNativeStackNavigator();

const htmlContent = {html: ` <link href="css/style.css" rel="stylesheet" /><div id="nav-title"><div class="main-title">JWS Online Library | <i>1880 - 2022</i></div><div id="slogan">Historical Archive to preserve expressions of faith</div></div><`}
export const Home = ( {navigation} : {navigation: any}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const { width } = useWindowDimensions();

  return (
   <SafeAreaView style={backgroundStyle}>
       <ScrollView
           contentInsetAdjustmentBehavior="automatic"
           style={backgroundStyle}>
           <View
           style={{
               backgroundColor: isDarkMode ? Colors.black : Colors.white,
           }}>
           <Text>JW Library will go here!</Text>
           <RenderHTML source={htmlContent} contentWidth={width} />
           <Button title="Go to Test screen"
      onPress={() => 
      navigation.navigate('IntroPage', { name: 'Jane'}) } />
            
           </View>
       </ScrollView>
   </SafeAreaView>

  );
};

const styles = common.defaultTestStyles;

export default Home;