import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, useNavigation, DrawerActions } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import UserScreen from './Screens/UserScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import { TouchableOpacity, Text, View } from 'react-native';
import Entypo from "react-native-vector-icons/Entypo"
const StackNav = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen
        name="User"
        component={UserScreen}
      />
    </Stack.Navigator>
  );
};

const DrawerNav = () => {
  const Drawer = createDrawerNavigator();
  const navigation = useNavigation();

  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      // @ts-ignore
      drawerStyle={{ width: '100%' }}
    >
      <Drawer.Screen
        name="Home"
        component={StackNav}
        options={{
          drawerIcon: ({ color, size }) => (
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <Entypo name="menu-outline" size={size} color={color} />
            </TouchableOpacity>
          ),
          drawerLabel: () => null,
        }}
      />
    </Drawer.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
}

export default App;
