import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './bottonstyle'; // Replace with your own styles
import Icon from 'react-native-vector-icons/FontAwesome';

const BottomNavigationBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bottomNavigationBar}>
    <TouchableOpacity onPress={() => navigation.navigate('Landing')} style={styles.navItem}>
      <Icon name="home"  size={20} color="black" />
      <Text style={styles.navBarItem}> Home </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Product')} style={styles.navItem}>
      <Icon name="shopping-cart" size={20} color="black" /> 
      <Text style={styles.navBarItem}> Product </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('BrandPage')} style={styles.navItem}>
      <Icon name="bookmark" size={20} color="black" />
      <Text style={styles.navBarItem}> Brand </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('UserPage')} style={styles.navItem}>
      <Icon name="user" size={20} color="black" />
      <Text style={styles.navBarItem}> User </Text>
    </TouchableOpacity>
  </View>
  );

};

// const styles = {
//   bottomNavigationBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     backgroundColor: 'black',
//     paddingVertical: 10,
//   },
//   navItem: {
//     alignItems: 'center',
//   },
//   navBarItem: {
//     color: 'black',
//     fontSize: 12,
//     marginTop: 3,
//   },
// };

export default BottomNavigationBar;
