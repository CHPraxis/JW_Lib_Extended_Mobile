import { StatusBar, StyleSheet } from "react-native";
import colors from "./colors";
//import htmlStyles from "./htmlStyles"


//Avenir-Roman, Avenir-Oblique, Avenir-Light, Avenir-Medium, Avenir-Black, Avenir-Book, Avenir-Heavy


export default spStyles;



export const spStyles = StyleSheet.create({
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
  container : {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    padding: 8,
    },
  paragraph: {
      color: colors.black,
      textDecorationColor: colors.smashPadLabel,
      textShadowColor: colors.smashPadBase,
      textShadowRadius: 1,
      margin: 24,
    },
  navTitle: {
      color: colors.black,
      textDecorationColor: colors.smashPadBlue,
      textShadowColor: colors.smashPadBlue,
      textShadowRadius: 0,
      letterSpacing: 3,
      margin: 5,
      fontSize: 20,
      textTransform: "uppercase",
      fontFamily: "Helvetica", //make sure I have the actual Avenir-Light font
    },
    cellTitle: {
      color: colors.smashPadBase,
      backgroundColor: colors.smashPadLabel,
      textDecorationColor: colors.smashPadBase,
      textShadowColor: colors.smashPadBase,
      textShadowRadius: 0,
      letterSpacing: 0,
      margin: 0,
      fontSize: 15,
      textTransform: "uppercase",
      fontFamily: "Avenir-Book", //make sure I have the actual Avenir-Light font
      paddingHorizontal: 8,
    },
    cellBody: {
      color: colors.white,
      textDecorationColor: colors.smashPadLabel,
      textShadowColor: colors.smashPadLabel,
      textShadowRadius: 0,
      letterSpacing: 3,
      margin: 5,
      fontSize: 20,
      textTransform: "uppercase",
      fontFamily: "Avenir-Light", //make sure I have the actual Avenir-Light font
    },

});

export const styles = {
  ...spStyles,
  // Fonts
baseFontSize: 16,
largeFontSize: 24,
fontFamily: 'Avenir-Roman',

// Icons
smallIconSize: 24,
mediumIconSize: 36,

  //Text sizes
  titleSize: 16,
  titleEighteenSize: 18,
  labelThirteen: 13,

  //margin sizes
  defaultMargin: 16,
  eighteenMargin: 18,
  thirtySixMargin: 36,

  //padding sizes
  defaultPadding: 16,
  eightPadding: 8,
  twelvePadding: 12,

    // Dimensions
headerHeight: 70,
shadowSize: 6
};

export const testStyle = StyleSheet.create({container: {
    marginTop: 50,
},
bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});


export const defaultTestStyles = StyleSheet.create({
    sectionContainer: {
      //marginTop: 32,
      marginBottom: 32,
      //paddingHorizontal: 24,
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

  
  export const htmlStyles = {
    
  };