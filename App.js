import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
import Home from './components/Home';
import Profile from './components/Profile';
import Detail from './components/Detail';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
  return <Home navigation={navigation} />;
};

const DetailScreen = ({navigation}) => {
  return <Detail navigation={navigation} />;
};

const ProfileScreen = ({navigation}) => {
  return <Profile navigation={navigation} />;
};

const CustomDrawer = props => {
  return (
    <LinearGradient
      style={{flex: 1}}
      colors={['rgba(60,0,60,1)', 'rgba(0,0,0,1)']}>
      <DrawerContentScrollView {...props}>
        <Text
          style={{
            fontSize: 35,
            color: 'white',
            marginHorizontal: 15,
            marginTop: 100,
            fontWeight: 'bold',
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(255,255,255,0.1)',
            marginBottom: 15,
            paddingBottom: 25,
          }}>
          React Native - JSON Fetch Apps
        </Text>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </LinearGradient>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveBackgroundColor: 'rgba(255,255,255,0.1)',
          drawerActiveTintColor: 'rgba(255,255,255,1)',
          drawerInactiveTintColor: 'rgba(255,255,255,0.5)',
          drawerItemStyle: {
            margin: 0,
            padding: 0,
            borderRadius: 0,
          },
        }}
        drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
