import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNav} from './App';
import { DrawerContent } from './DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        cardStyle: {backgroundColor: 'white'},
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
