import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const Detail = ({navigation}) => {
  return (
    <LinearGradient
      style={{flex: 1}}
      colors={['rgba(150,80,75,1)', 'rgba(60,0,60,1)']}>
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
                navigation.goBack();
              }}>
              x
            </Text>
          </TouchableOpacity>
          <Text style={styles.title}>Detail</Text>
        </View>
      </LinearGradient>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.contentTitle}>
            This is the title of a Detailed Content
          </Text>
          <Text style={styles.contentBody}></Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Detail;

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
    fontSize: 25,
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
  container: {
    marginHorizontal: 15,
    marginTop: 100,
  },
  contentTitle: {
    color: 'rgba(255,255,255,1)',
    fontSize: 35,
    fontWeight: 'bold',
    borderBottomColor: 'rgba(255,255,255,0.25)',
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 10,
  },
  contentBody: {
    color: 'rgba(255,255,255,0.5)',
    paddingBottom: 15,
    textAlign: 'justify',
  },
});
