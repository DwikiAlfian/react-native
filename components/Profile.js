import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Profile = ({navigation}) => {
  return (
    <LinearGradient
      style={{flex: 1}}
      colors={['rgba(30,30,30,1)', 'rgba(60,0,60,1)']}>
      <LinearGradient
        style={styles.navbar}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['rgba(255,255,255,0.15)', 'rgba(255,255,255,0)']}>
        <View style={styles.navbarFlex}>
          <TouchableOpacity>
            <Text
              style={styles.button}
              onPress={() => {
                navigation.openDrawer();
              }}>
              =
            </Text>
          </TouchableOpacity>
          <Text style={styles.title}>Profile</Text>
        </View>
      </LinearGradient>
    </LinearGradient>
  );
};

export default Profile;

const styles = StyleSheet.create({
  navbar: {
    padding: 10,
    margin: 15,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  button: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 100 / 2,
    color: 'white',
    fontSize: 28,
  },
  navbarFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: 'rgba(255,255,255,1)',
    fontWeight: 'bold',
    letterSpacing: 7,
    marginRight: 25,
    textTransform: 'uppercase',
    fontSize: 10,
  },
});
