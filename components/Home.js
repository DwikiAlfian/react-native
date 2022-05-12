import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Detail from './Detail';

const Stack = createNativeStackNavigator();

const Home = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await (
      await fetch('https://jsonplaceholder.typicode.com/posts')
    ).json();
    setData(response);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);

  const ListCard = ({navigation, item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.65}
        onPress={() => {
          navigation.navigate('Detail', {
            title: item.title,
            body: item.body,
          });
        }}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardBody}>{item.body}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const Detail = ({route, navigation}) => {
    const {title, body} = route.params;
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
            <Text style={styles.contentTitle}>{title}</Text>
            <Text style={styles.contentBody}>{body}</Text>
          </View>
        </ScrollView>
      </LinearGradient>
    );
  };

  const HomeStack = ({navigation}) => {
    return (
      <LinearGradient
        style={{flex: 1}}
        colors={['rgba(0,80,75,1)', 'rgba(60,0,60,1)']}>
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
                  //   navigation.navigate('Detail');
                }}>
                =
              </Text>
            </TouchableOpacity>
            <Text style={styles.title}>Home</Text>
          </View>
        </LinearGradient>
        <View>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <ListCard navigation={navigation} item={item} />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </LinearGradient>
    );
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeStack"
        component={HomeStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Home;

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
  card: {
    marginHorizontal: 15,
    marginVertical: 10,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  cardTitle: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'rgba(255,255,255,1)',
  },
  cardBody: {
    color: 'rgba(255,255,255,0.25)',
    paddingHorizontal: 20,
    paddingVertical: 15,
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
