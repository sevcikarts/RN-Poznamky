import React,{useEffect} from 'react';
import Home from './screens/home';
import * as Font from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from '@use-expo/font';
import Navigator from './routes/drawer';

import AsyncStorage from '@react-native-async-storage/async-storage';



export default function App(){

 const [loaded] = useFonts({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
});

if (!loaded) {
  return null;
}
  return (
   
    <Navigator /> 
  );
}

