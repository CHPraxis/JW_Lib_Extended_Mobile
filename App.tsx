/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { CSSProperties } from "react";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { DefaultTheme, NavigationContainer, } from '@react-navigation/native';
import common from './mobile/styles/common';
import RootDrawer from './mobile/pages/Navigator';


import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//set up navigator theme
const MyNavTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: common.colors.smashPadBlue,
    text: common.colors.black,
    card: common.colors.darkGrey,
    border: common.colors.smashPadBlue,

  },
};

//section, might remove
const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

//experiment
const CustomWebView: React.FC = (props) => {
  const [isReloaded, setIsReloaded] = React.useState(false);
  const webViewRef = React.useRef<WebView>(null);
  const PolicyHTML = require('./index.html');
  return (
    
    <WebView
    source={PolicyHTML}
  originWhitelist={['*']}
  style={{flex: 1, height: 500}}
  useWebKit={true}
 />
  );
};

//main app here
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider style={backgroundStyle}>
    <NavigationContainer theme={MyNavTheme}>
      <StatusBar
        barStyle={'light-content'}//isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
    {RootDrawer()}

    </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
