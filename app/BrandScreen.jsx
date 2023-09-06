import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Animated,
  ImageBackground,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./brand2";
import Video from "react-native-video";
import BottomNavigationBar from "./BottomNavigationBar";
import Swiper from "react-native-swiper";
import {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useFonts } from "expo-font";
const BrandScreen = () => {
  const navigation = useNavigation();
  const [showMore, setShowMore] = useState(false);
  const [searchText, setSearchText] = useState("");
  const images = [
    require("../assets/images/kin1.png"),
    require("../assets/images/kin2.png"),
    require("../assets/images/brand1.png"),
  ];
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("../assets/fonts/Inter-Medium.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null; // Return a loading indicator or fallback
  }

  //   const handleScroll = Animated.event(
  //     [{ nativeEvent: { contentOffset: { y: scrollY } } }],
  //     { useNativeDriver: false }
  //   );

  //   const opacity = scrollY.interpolate({
  //     inputRange: [0, 100],
  //     outputRange: [1, 0],
  //     extrapolate: 'clamp',
  //   });

  const handleNavigateBack = () => {
    navigation.goBack(); // Go back to the previous screen
  };
  const handleCardPress = (screenName) => {
    navigation.navigate(screenName);
  };

  const handleProduct = () => {
    navigation.navigate("BrandScreen");
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  
  const cardsData = [
    {
      id: 1,
      title: "Pre-Surgery",
      image: require("../assets/images/kin4.png"),
      screen: "PreSurgeryScreen",
    },
    {
      id: 2,
      title: "Surgery Support",
      image: require("../assets/images/kin4.png"),
      screen: "Surgery",
    },
    {
      id: 3,
      title: "Optimum Healing",
      image: require("../assets/images/kin4.png"),
      screen: "Optimum",
    },
    {
      id: 4,
      title: "Tissue Synthesis",
      image: require("../assets/images/kin4.png"),
      screen: "TissueSynthesis",
    },
    {
      id: 5,
      title: "Peptic Healing",
      image: require("../assets/images/kin4.png"),
      screen: "PepticHealing",
    },
  ];
  
  
  const renderCards = () => {
    const rows = [];
    for (let i = 0; i < cardsData.length; i += 2) {
      rows.push(
        <View style={styles.row} key={i}>
          {renderCard(cardsData[i])}
          {i + 1 < cardsData.length && renderCard(cardsData[i + 1])}
        </View>
      );
    }
    return rows;
  };
  const renderCard = (card) => (
    
    <TouchableOpacity
      style={styles.card}
      key={card.id}
      onPress={() => handleCardPress(card.screen)}
    >
      <View style={styles.imgcard}>
        <Image source={card.image} style={styles.cardImage} />
        
      </View>
      <Text style={styles.cardTitle}>{card.title}</Text>
    </TouchableOpacity>
  );

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
      <ScrollView contentContainerStyle={styles.cardContainer} showsVerticalScrollIndicator={false}
        overScrollMode="never">
      
        {renderCards()}
        {/* <Text style={styles.hello2}>
          Other brands that you may want to explore
        </Text> */}
        {/* {renderAdditionalCards()} */}
      </ScrollView>
      <BottomNavigationBar />
    </View>
    </ImageBackground>
  );
};

export default BrandScreen;
