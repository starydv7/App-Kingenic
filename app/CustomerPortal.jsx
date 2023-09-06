import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./Customerportal";
import BottomNavigationBar from "./BottomNavigationBar";
import { useFonts } from "expo-font";

import Swiper from "react-native-swiper";

const CustomerPortal = () => {
  const secondVideo = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [statusSecondVideo, setStatusSecondVideo] = React.useState({});
  const navigation = useNavigation();
  const [showMore, setShowMore] = useState(false);
  const [searchText, setSearchText] = useState("");

  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("../assets/fonts/Inter-Medium.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null; // Return a loading indicator or fallback
  }
  const handleNavigateBack = () => {
    navigation.goBack(); // Go back to the previous screen
  };

  return (
    <ImageBackground
      source={require("../assets/images/bg.webp")} // Replace with the path to your background image
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
          <Text style={styles.navtext}>Customer Portal Home</Text>
        </View>

        <ScrollView
          contentContainerStyle={styles.Container}
          showsVerticalScrollIndicator={false}
          overScrollMode="never"
        >
          <View style={styles.boxslider}>
            <Image
              source={require("../assets/images/homebanner.png")}
              style={styles.image}
            />
          </View>
          <View style={styles.cardbox}>
            <Text style={styles.cardbox1}>Welcome to customer convenience portal</Text>
          </View>
          <View style={styles.cardbox2}>
            <Text style={styles.cardbox3}>We have created this portal for order tracking and product documentation traceability.</Text>
          </View>
          <TouchableOpacity style={[styles.button]}>
          <Text style={styles.buttonText}>Get Started</Text>
         </TouchableOpacity>
        </ScrollView>
        <BottomNavigationBar />
      </View>
    </ImageBackground>
  );
};

export default CustomerPortal;
