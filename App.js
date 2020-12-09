import React from 'react';
import { StyleSheet, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './src/screens/Home'
import Login from './src/screens/Login'
import Loading from './src/screens/Loading'
import Profile from './src/screens/Profile'
import Test from './src/screens/Test'
import Details from './src/screens/Details'
import Icon from '@expo/vector-icons/FontAwesome'
import { Provider } from 'react-redux'
import store from './src/store/'

import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';


const Stack = createStackNavigator()

const Tab = createBottomTabNavigator()

const storeConfig = store()

const MySwitchs = () => {

}

const MyTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "purple",
        inactiveTintColor: "lightgray",

      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          if (route.name == "Home") {
            iconName = 'home'
          } else if (route.name == "Profile") {
            iconName = 'user'
          }
          return <Icon name={iconName} color={color} size={size} />
        }
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarBadge: 1
      }} />
    </Tab.Navigator>
  )
}

const MyStacks = () => {

  return (

    <Stack.Navigator
      initialRouteName="Loading"
    >

      <Stack.Screen name="Login" component={Login}
        options={{
          headerTransparent: true,
          headerLeft: null,
          title: '',
        }}
      />
      <Stack.Screen name="Loading" component={Loading}
        options={{
          headerTransparent: true,
          title: '',
        }}
      />
      <Stack.Screen name="Details" component={Details}
        options={{
          headerTransparent: true,
          title: '',
        }}
      />
      <Stack.Screen name="Home" component={MyTabs}
        options={{
          headerTransparent: true,
          title: '',
          headerLeft: null,
        }}
      />
      <Stack.Screen name="Test" component={Test}
        options={{
          headerTransparent: true,
          title: '',
          headerLeft: null,
        }}
      />
    </Stack.Navigator>
  )
}
export default function App() {
  let [fontsLoaded] = useFonts({
    'roboto': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
    'roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'roboto-Italic': require('./assets/fonts/Roboto-Italic.ttf'),
    'roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
    'roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Provider store={storeConfig}>
      <NavigationContainer>
        <MyStacks />
      </NavigationContainer>
    </Provider>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#834a99",
    marginRight: 10
  }
});
