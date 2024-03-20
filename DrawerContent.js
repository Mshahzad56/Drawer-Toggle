import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from "react-native-vector-icons/AntDesign"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import {
  DrawerActions,
} from '@react-navigation/native';

function DrawerContent(props) {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ width: '100%' }}>
        <View style={styles.drawerContent}>
          <ImageBackground source={require('./assets/im.png')} style={styles.imagebg} />
          <View style={styles.logotext}>
            <Image style={{ height: 18, width: 17 }} source={require('./assets/Drawerlogo.png')} />
            <Text style={{ fontSize: 17, fontWeight: '700', left: 5, color: '#fff' }}>Mycentrality</Text>
          </View>

          <View style={styles.profile}>
            <Image style={styles.profilelogo} source={require('./assets/profile.png')} />
            <View style={{ flexDirection: 'column', left: 10 }}>
              <Text style={styles.text1}>Andrew Ainsley</Text>
              <Text style={styles.text2}>ID: 1234567</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}>
              <View style={styles.close}>
                <Entypo name="cross" size={20} color={'#00AFEF'} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.drawerSection}>
            <TouchableOpacity
              onPress={() => navigation.navigate('User')} >
              <View style={{ flexDirection: "row", alignItems: 'center' }}>
                <View style={styles.recicon}>
                  <Ionicons name='notifications' size={24} color={'#B6AB3C'} />
                </View>
                <Text style={styles.ScreenText}> Profile</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Profile')} >
              <View style={styles.viewicon}>
                <View style={styles.recicon}>
                  <AntDesign name='heart' size={24} color={'#2DB3AD'} />
                </View>
                <Text style={styles.ScreenText}> GPA Calculator</Text>
              </View>
            </TouchableOpacity>


            <TouchableOpacity>
              <View style={styles.viewicon}>
                <View style={styles.recicon}>
                  <FontAwesome5 name='file-csv' size={24} color={'#f33187'} />
                </View>
                <Text style={styles.ScreenText}>Attendance</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.viewicon}>
                <View style={styles.recicon}>
                  <Ionicons name='card' size={24} color={'#fa883a'} />
                </View>
                <Text style={styles.ScreenText}>Apps Access</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.viewicon}>
                <View style={styles.recicon}>
                  <FontAwesome5 name='file-invoice' size={24} color={'#fd3b0f'} />
                </View>
                <Text style={styles.ScreenText}>Transcript</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.viewicon}>
                <View style={styles.recicon}>
                  <MaterialCommunityIcons name='headset' size={24} color={'#70c935'} />
                </View>
                <Text style={styles.ScreenText}>Help Center</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.viewicon}>
                <View style={styles.recicon}>
                  <MaterialCommunityIcons name='face-man-profile' size={24} color={'#2c8be8'} />
                </View>
                <Text style={styles.ScreenText}>Profile View</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.viewicon}>
                <View style={styles.recicon}>
                  <MaterialIcons name='admin-panel-settings' size={24} color={'#a33dfe'} />
                </View>
                <Text style={styles.ScreenText}>Setting</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={{ flexDirection: "row", alignItems: 'center', marginTop: 50 }}>
                <View style={styles.recicon}>
                  <Ionicons name='log-out' size={24} color={'#d52d23'} />
                </View>
                <Text style={styles.ScreenText}>Log Out</Text>
              </View>
            </TouchableOpacity>



          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  drawerLabelText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#2F3A4B',
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#dedede',
    borderTopWidth: 1,
    borderBottomColor: '#dedede',
    borderBottomWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  imagebg: {
    resizeMode: 'contain',
    width: '100%',
    height: 214
  },
  logotext: {
    position: 'absolute',
    flexDirection: 'row',
    marginTop: 26,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  profile: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginLeft: 15,

  },
  profilelogo: {
    height: 48,
    width: 48,
  },
  text1: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff"
  },
  text2: {
    fontSize: 14,
    fontWeight: "700",
    color: "#fff"
  },
  close: {
    backgroundColor: '#fff',
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50
  },
  recicon: {
    height: 40,
    width: 40,
    borderRadius: 6,
    backgroundColor: '#f6f6f6',
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  ScreenText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#2F3A4B',
    marginLeft: 15
  },
  viewicon: {
    flexDirection: "row",
    alignItems: 'center',
    marginTop: 20,
  }
});
