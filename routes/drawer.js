import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './homeStack'
import AboutStack from './aboutStack';

const Drawer = createDrawerNavigator();

export default function drawer() {
  return (
    <NavigationContainer >
      <Drawer.Navigator drawerStyle={{
        backgroundColor: 'tomato'
       }}
       drawerContentOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'black'
      }} initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="About" component={AboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}