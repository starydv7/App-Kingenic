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
import styles from "./product";
import BottomNavigationBar from "./BottomNavigationBar";
import { useFonts } from "expo-font";
import { Video } from "expo-av";
import Swiper from "react-native-swiper";

const Product = () => {
  const video = React.useRef(null);
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
  const images = [
    require("../assets/images/brand1.png"),
    require("../assets/images/brand1.png"),
    require("../assets/images/brand1.png"),
  ];
  if (!fontsLoaded) {
    return null; // Return a loading indicator or fallback
  }
  const handleNavigateBack = () => {
    navigation.goBack(); // Go back to the previous screen
  };

  const handleProduct = () => {
    navigation.navigate("BrandPage"); //navigate to brand page
  };
  const handlePrivate = () => {
    navigation.navigate("PrivateScreen"); //navigate to Private page
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
          <Text style={styles.navtext}>PRODUCT CATALOGUE</Text>
        </View>

        <ScrollView
          contentContainerStyle={styles.cardContainer}
          showsVerticalScrollIndicator={false}
          overScrollMode="never"
          loop={false}
        >
          <TouchableOpacity onPress={handleProduct}>
            <View style={styles.card}>
              <Image
                source={require("../assets/images/kin1.png")}
                style={styles.cardImage}
              />
              <Text style={styles.cat2}>Branded Portfolio </Text>
              <Text style={styles.catText}>
                {showMore
                  ? "Kingenic continues to develop nutrition products that help people improve their health everyday.."
                  : "Kingenic continues to develop nutrition products that help people improve their health everyday. We offer wide range of brands for a better tommorow."}
                {"\n"}
                {showMore && (
                  <TouchableOpacity onPress={toggleShowMore}>
                    <Text style={styles.seeMore}>See Less </Text>
                  </TouchableOpacity>
                )}
                {!showMore && (
                  <TouchableOpacity onPress={toggleShowMore}>
                    <Text style={styles.seeMore}>See More </Text>
                  </TouchableOpacity>
                )}
              </Text>
            </View>
          </TouchableOpacity>

          {/* Card 3 */}
          <TouchableOpacity onPress={handlePrivate}>
            <View style={styles.card}>
              <Image
                source={require("../assets/images/pro3.png")}
                style={styles.cardImage}
              />
              <Text style={styles.cat3}>Private Label Products </Text>
              <Text style={styles.catText3}>
                {showMore
                  ? "Kingenic continues to develop nutrition products that help people improve their health everyday.."
                  : "With strong partnerships, we help you design your new or existing brand with innovative products and expand your business verticals"}
                {"\n"}
                {showMore && (
                  <TouchableOpacity onPress={toggleShowMore}>
                    <Text style={styles.seeMore}>View Less </Text>
                  </TouchableOpacity>
                )}
                {!showMore && (
                  <TouchableOpacity onPress={toggleShowMore}>
                    <Text style={styles.seeMore}>View More </Text>
                  </TouchableOpacity>
                )}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.box3}>
            <Swiper style={styles.wrapper} autoplay={true}>
              {images.map((image, index) => (
                <View key={index} style={styles.slide}>
                  <Image source={image} style={styles.image} />
                </View>
              ))}
            </Swiper>
          </View>
        </ScrollView>
        <BottomNavigationBar />
      </View>
    </ImageBackground>
  );
};

export default Product;
