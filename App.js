import React from 'react';
import { StyleSheet, Text, View ,Platform} from 'react-native';

import { createSwitchNavigator } from "@react-navigation/core";
import { createBrowserApp } from "@react-navigation/web";
import { createStackNavigator } from 'react-navigation-stack';
import Main from "./src/auth/Main";
import Login from "./src/auth/Login";
import ProviderMain from "./src/auth/ProviderMain"

export default function App() {
  return (
    <View style={styles.container}>
      <Apps></Apps>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

/** Signup Screen */
const HomeStack = createStackNavigator(
  {
    Main: Main,
    Login:Login,
  


  },
  config
);
HomeStack.path = '';
HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home`
          : 'md-home'
      }
    />
  ),
};

const MyNavigator = createSwitchNavigator({
  Mainstak: Login,
  PatientMain:Main,
  ProviderMain:ProviderMain


});
MyNavigator.path = '';
const Apps = createBrowserApp(MyNavigator, { history: 'hash' });