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
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import styles from "./brand";
import Video from "react-native-video";
import BottomNavigationBar from "./BottomNavigationBar";
import Swiper from "react-native-swiper";
const Brand = () => {
  const navigation = useNavigation();
  const [showMore, setShowMore] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [fontsLoaded] = useFonts({
    // Load the Inter font styles
    "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
    // Add more font styles if needed
  });

  const images = [
    require("../assets/images/kin1.png"),
    require("../assets/images/kin2.png"),
    require("../assets/images/brand1.png"),
  ];

  const handleNavigateBack = () => {
    navigation.goBack(); // Go back to the previous screen
  };

  const handleProduct = () => {
    navigation.navigate("BrandScreen");
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const handleSearch = () => {
    // Handle the search action based on the searchText
    console.log("Search Text:", searchText);
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
        <Text style={styles.navtext}>BRANDED PORTFOLIO</Text>
      </View>

      <View style={styles.boxslider}>
        <Swiper style={styles.wrapper} autoplay={true}>
          {images.map((image, index) => (
            <View key={index} style={styles.slide}>
              <Image source={image} style={styles.image} />
            </View>
          ))}
        </Swiper>
      </View>
      <ScrollView
        contentContainerStyle={styles.cardContainer}
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
      >
        {/* Card 1 */}
        <TouchableOpacity onPress={handleProduct}>
          <View style={styles.card}>
           

            <Image
              source={require("../assets/images/kin3.png")}
              style={styles.cardImage}
            />
            <View style={styles.textbox}>
            <Text style={styles.cat1}>Advance Wound Management </Text>
            <Text style={styles.catText}>
              A proper diet is essential for tissue building for all stages of
              wound healing, but sometimes the normal diet is not enough. Juven
              may help by providing essential nutrients, such as arginine and
              glutamine, that are needed for wound healing. Juven has been
              clinically shown
            </Text>
            </View>
            
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleProduct}>
          <View style={styles.card}>
           

            <Image
              source={require("../assets/images/kin1.1.png")}
              style={styles.cardImage}
            />
            <View style={styles.textbox}>
            <Text style={styles.cat1}>Advance Wound Management </Text>
            <Text style={styles.catText}>
              A proper diet is essential for tissue building for all stages of
              wound healing, but sometimes the normal diet is not enough. Juven
              may help by providing essential nutrients, such as arginine and
              glutamine, that are needed for wound healing. Juven has been
              clinically shown
            </Text>
            </View>
            
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleProduct}>
          <View style={styles.card}>
           

            <Image
              source={require("../assets/images/kin2.1.png")}
              style={styles.cardImage}
            />
            <View style={styles.textbox}>
            <Text style={styles.cat1}>Advance Wound Management </Text>
            <Text style={styles.catText}>
              A proper diet is essential for tissue building for all stages of
              wound healing, but sometimes the normal diet is not enough. Juven
              may help by providing essential nutrients, such as arginine and
              glutamine, that are needed for wound healing. Juven has been
              clinically shown
            </Text>
            </View>
            
          </View>
        </TouchableOpacity>
      </ScrollView>

      <BottomNavigationBar />
    </View>
    </ImageBackground>
  );
};

export default Brand;
