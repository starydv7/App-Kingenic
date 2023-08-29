import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useFonts } from 'expo-font';
import { useNavigation } from "@react-navigation/native";
import styles from "./brand";
import Video from "react-native-video";
import BottomNavigationBar from "./BottomNavigationBar";

const Brand = () => {
  const navigation = useNavigation();
  const [showMore, setShowMore] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [fontsLoaded] = useFonts({
    // Load the Inter font styles
    'Inter-Regular': require("../assets/fonts/Inter-Regular.ttf"),
    'Inter-Bold': require("../assets/fonts/Inter-Bold.ttf"),
    // Add more font styles if needed
  });


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
    <View style={styles.topmost}>
      <View style={styles.brandedPortfolio}>
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
     
        <Text style={styles.brandText}>Branded Portfolio </Text>
      </View>
      <Text style={styles.hello1}>
      Which brand would you like to explore today?
      </Text>
      
      
      <ScrollView contentContainerStyle={styles.cardContainer}>
        {/* Card 1 */}
        <TouchableOpacity onPress={handleProduct}>
        <View style={styles.card}>
         <View style={styles.box1}>
         <View style={styles.box2}>
           <Image
            source={require('../assets/images/Picture.png')} 
            style={styles.logo}
          />
          </View>
          <View style={styles.box3}>
          <Text style={styles.cat1}>Advance Wound Management </Text>
          <Text style={styles.catbrand}>Therapeutic Nutrition</Text>
          </View>
          </View>
          
           
        <Image
            source={require('../assets/images/brand1.png')} 
            style={styles.cardImage}
          />
         
          <Text style={styles.catText}>
          A proper diet is essential for tissue building for all stages of wound healing, but sometimes the normal diet is not enough. Juven may help by providing essential nutrients, such as arginine and glutamine, that are needed for wound healing. Juven has been clinically shown 
          </Text>
        </View>
        </TouchableOpacity>

        {/* Card 2 */}
        <View style={styles.card}>
         <View style={styles.box1}>
         <View style={styles.box2}>
           <Image
            source={require('../assets/images/Picture.png')} 
            style={styles.logo}
          />
          </View>
          <View style={styles.box3}>
          <Text style={styles.cat1}>Advance Wound Management </Text>
          <Text style={styles.catbrand}>Therapeutic Nutrition</Text>
          </View>
          </View>
          
           
        <Image
            source={require('../assets/images/brand1.png')} 
            style={styles.cardImage}
          />
         
          <Text style={styles.catText}>
          A proper diet is essential for tissue building for all stages of wound healing, but sometimes the normal diet is not enough. Juven may help by providing essential nutrients, such as arginine and glutamine, that are needed for wound healing. Juven has been clinically shown 
          </Text>
        </View>
        <View style={styles.card}>
         <View style={styles.box1}>
         <View style={styles.box2}>
           <Image
            source={require('../assets/images/Picture.png')} 
            style={styles.logo}
          />
          </View>
          <View style={styles.box3}>
          <Text style={styles.cat1}>Advance Wound Management </Text>
          <Text style={styles.catbrand}>Therapeutic Nutrition</Text>
          </View>
          </View>
          
           
        <Image
            source={require('../assets/images/brand1.png')} 
            style={styles.cardImage}
          />
         
          <Text style={styles.catText}>
          A proper diet is essential for tissue building for all stages of wound healing, but sometimes the normal diet is not enough. Juven may help by providing essential nutrients, such as arginine and glutamine, that are needed for wound healing. Juven has been clinically shown 
          </Text>
        </View>
        <View style={styles.card}>
         <View style={styles.box1}>
         <View style={styles.box2}>
           <Image
            source={require('../assets/images/Picture.png')} 
            style={styles.logo}
          />
          </View>
          <View style={styles.box3}>
          <Text style={styles.cat1}>Advance Wound Management </Text>
          <Text style={styles.catbrand}>Therapeutic Nutrition</Text>
          </View>
          </View>
          
           
        <Image
            source={require('../assets/images/brand1.png')} 
            style={styles.cardImage}
          />
         
          <Text style={styles.catText}>
          A proper diet is essential for tissue building for all stages of wound healing, but sometimes the normal diet is not enough. Juven may help by providing essential nutrients, such as arginine and glutamine, that are needed for wound healing. Juven has been clinically shown 
          </Text>
        </View>
      </ScrollView>
     
      <BottomNavigationBar/>
    </View>
  );
};

export default Brand;
