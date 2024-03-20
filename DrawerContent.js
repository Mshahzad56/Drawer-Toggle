import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo'

const DrawerList = [
  { icon: 'home-outline', label: 'Profile', navigateTo: 'Home' },
  { icon: 'account-multiple', label: 'GPA Calculator', navigateTo: 'Profile' },
  { icon: 'account-group', label: 'Attendance', navigateTo: 'User' },
  { icon: 'bookshelf', label: 'Apps access', navigateTo: '' },
  { icon: 'bookshelf', label: 'Transcript', navigateTo: '' },
  { icon: 'bookshelf', label: 'Help Center', navigateTo: '' },
  { icon: 'bookshelf', label: 'Profile View', navigateTo: '' },
  { icon: 'bookshelf', label: 'Setting', navigateTo: '' },
  { icon: 'bookshelf', label: 'Log Out', navigateTo: '' },


];
const DrawerLayout = ({ icon, label, navigateTo }) => {
  const navigation = useNavigation();
  return (
    <DrawerItem
      icon={({ color, size }) => <Icon name={icon} color={color} size={size} />}
      label={label} 
      onPress={() => {
        navigation.navigate(navigateTo);
      }}
      labelStyle={styles.drawerLabelText}
    />
  );
};

const DrawerItems = props => {
  return DrawerList.map((el, i) => {
    return (
      <DrawerLayout
        key={i}
        icon={el.icon}
        label={el.label}
        navigateTo={el.navigateTo}
      />
    );
  });
};
function DrawerContent(props) {
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
            <View style={{flexDirection:'column', left:10}}>
            <Text style={styles.text1}>Andrew Ainsley</Text>
            <Text style={styles.text2}>ID: 1234567</Text>
            </View>
            <View style={styles.close}>
              <Entypo name="close" size={20}/>
            </View>
          </View>
          <View style={styles.drawerSection}>
            <DrawerItems />
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
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginTop:100,
    marginLeft: 15,

  },
  profilelogo:{
    height:48,
    width:48,
  },
  text1:{
    fontSize:16,
    fontWeight:"700",
    color:"#fff"
  },
  text2:{
    fontSize:14,
    fontWeight:"700",
    color:"#fff"
  },
  close:{
    backgroundColor:'#fff',
    height:40,
    width:40,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:50
  }
});
