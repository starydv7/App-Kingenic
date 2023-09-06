import React from "react";
import { View, Text, TouchableOpacity, Image, Animated ,ImageBackground} from "react-native";

import styles from "./styles";
import { useNavigation } from '@react-navigation/native';
import { Video } from 'expo-av';

const Home = () => {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    // After animation completes, navigate to the next screen
    navigation.navigate('Landing');
    console.log("Get Started button pressed");
  };

  const buttonScale = new Animated.Value(1);

  return (
    
    <ImageBackground
    source={require('../assets/images/bg.webp')} // Replace with the path to your background image
    style={styles.backgroundImage}
  >
    <View style={styles.container}>
     
        <View style={styles.logo}>
          <Image source={require('../assets/images/biglogo.png')} style={styles.logoImage} />
        </View>

        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.welcome1}>Browse, connect and discover kingenic offerings and resources</Text>

        <TouchableOpacity style={[styles.button]} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

    </View>
        <View style={styles.bottomTextRow}>
          <Text style={styles.bottomLeftText}>Kingenic Privacy Notice</Text>
          <Text style={styles.bottomRightText}>Corporate website</Text>
        </View>
   </ImageBackground>
  );
};

export default Home;
