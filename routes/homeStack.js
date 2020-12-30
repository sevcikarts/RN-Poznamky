import React from 'react';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
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
             name="Home"
             component={Home}
             options={({navigation, route}) => ({
                headerTitle: () => <Header navigation = {navigation} title = 'GameZone' />
              })} 
             />
         <homeStack.Screen name="ReviewDetails" component={ReviewDetails} />
      </homeStack.Navigator>
    )
  }
