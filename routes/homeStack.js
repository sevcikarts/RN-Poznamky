import React from 'react';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../shared/header'
import { StyleSheet, Text, View,Image } from "react-native";

const homeStack = createStackNavigator();
  
export default HomeStack = () => { 

   return (
      <homeStack.Navigator screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' }

      }}>
        <homeStack.Screen 
             name="Home"
             component={Home}
             options={({navigation, route}) => ({
                headerBackground: () => <Image source={require('../assets/game_bg.png')} style={{height:80}}/>,
                headerTitle: () => <Header navigation = {navigation} title = 'Poznámky' />,
              })} 
             />
         <homeStack.Screen name="ReviewDetails" component={ReviewDetails} />
      </homeStack.Navigator>
    )
  }
