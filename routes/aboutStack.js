import React from 'react';
import About from '../screens/about';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../shared/header'

const homeStack = createStackNavigator();
  
export default HomeStack = () => { 

   return (
     
      <homeStack.Navigator screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}>
        <homeStack.Screen 
             name="About"
             component={About}
             options={({navigation, route}) => ({
                headerTitle: () => <Header navigation = {navigation} title = 'GameZone' />
              })} 
            
             />
        
      </homeStack.Navigator>
    )
  }
