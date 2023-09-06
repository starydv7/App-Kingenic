import {
  View,
  Text,
  Button,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageBackground
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./landing";
import BottomNavigationBar from "./BottomNavigationBar";
import { useFonts } from "expo-font";
import React, { useState, useEffect, useRef } from "react";
import Swiper from "react-native-swiper";

const Landing = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("../assets/fonts/Inter-Medium.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
  });
  
  const images = [
    require("../assets/images/homebanner.png"),
    require("../assets/images/homebanner.png"),
    require("../assets/images/homebanner.png"),
  ];

  

  if (!fontsLoaded) {
    return null; 
  }
 
  const handleProduct = () => {
   
    navigation.navigate("Product");
    console.log("Get Started button pressed");
  };
  
  const handleCustomer = () => {
    navigation.navigate("CustomerPortal");
  };
  const handleNavigateBack = () => {
    navigation.goBack(); 
  };
  
  

  return (
    <ImageBackground
    source={require('../assets/images/bg.webp')} // Replace with the path to your background image
    style={styles.backgroundImage}
  >
    <View style={styles.topmost}>
    <View style={styles.nav}>
          <TouchableOpacity
            onPress={handleNavigateBack}
            style={styles.backButton}
          >
            <View style={styles.backbutton}>
              <Image
                source={require("../assets/images/arrow.png")}
                style={styles.backIcon}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.navlogo}>
              <Image
                source={require("../assets/images/biglogo.png")}
                style={styles.navimage}
              />
            </View>
        </View>


      <ScrollView
        contentContainerStyle={styles.Container}
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
      >

      <View style={styles.boxslider}>
        <Swiper style={styles.wrapper} autoplay={true}>
          {images.map((image, index) => (
            <View key={index} style={styles.slide}>
              <Image source={image} style={styles.image} />
            </View>
          ))}
        </Swiper>
      </View>
        <View style={styles.cardbox}>
          <TouchableOpacity onPress={handleProduct}>
            <View style={styles.card}>
              <Image
                source={require("../assets/images/kin1.png")}
                style={styles.cardImage}
              />
              <View style={styles.box1}>
                <Text style={styles.cat1}>Product Catalogue </Text>
                <Text style={styles.catText}>
                  Explore our branded portfolio and private label offerings
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Card 2 */}
          <TouchableOpacity onPress={handleCustomer}>
            <View style={styles.card}>
              <Image
                source={require("../assets/images/cat1.png")}
                style={styles.cardImage}
              />
              <View style={styles.box1}>
                <Text style={styles.cat1}>Customer Portal </Text>
                <Text style={styles.catText}>
                  Retrieve product documents and request support service
                </Text>
              </View>
              {/* <Text>Card 2</Text> */}
            </View>
          </TouchableOpacity>

          {/* Card 3 */}
          <View style={styles.card}>
            <Image
              source={require("../assets/images/cat2.png")}
              style={styles.cardImage}
            />
            <View style={styles.box1}>
              <Text style={styles.cat1}>Learning Center </Text>
              <Text style={styles.catText}>
                 Retrieve product documents and request support service
              </Text>
            </View>
            {/* <Text>Card 3</Text> */}
          </View>
        </View>
      </ScrollView>

      <BottomNavigationBar />
    </View>
    </ImageBackground>
  );
};

export default Landing;

// src="/static/homeIntroVideo-6058870767733bb8cdce24f8f01d9ed3.mp4"
