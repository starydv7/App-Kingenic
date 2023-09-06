import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import BottomNavigationBar from "./BottomNavigationBar";

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain', // Change resizeMode to 'contain'
    justifyContent: 'center',
    // borderWidth: 2,
    // borderColor: 'red',
    // width:"70%"
    height:"100%",
   opacity:0.8
  },
  container: {
    flex: 1,
    // backgroundColor: "#2c3e50",
    // borderWidth: 2,
    // borderColor: "green",
    justifyContent: "center",
    alignItems: "center",
    // width: 349,
  },
  maincontainer: {
    flex: 1,
    // backgroundColor: "white",
    // padding: 15,
    // borderWidth: 2,
    // borderColor: "red",
    width: "100%",
  },
  nav: {
    //   borderWidth:2,
    // borderColor:'red',
    width: "90%",
    height: 40,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 60,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "black",
  },

  navtext: {
    //  borderWidth:2,
    // borderColor:'red',
    fontSize: 16,
    marginRight: 40,
    fontWeight: 700,
    color: "black",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    // padding: 20,
    marginTop: 30,
    // borderWidth:2,
    // borderColor:'green',
    width: "100%",
    marginLeft: 10,
  },
  
  
  cat: {
    marginTop: 10,
    marginLeft: 30,
    fontWeight: 600,
    fontSize: 20,
    letterSpacing: 1,
    // borderWidth: 2,
    // borderColor: "green",
    width: 277,
    // height:24,
    color:'#2A282F'
    
  },

  card: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 15,
    width: "85%",
    height:72,
    // alignItems: "center",
    // justifyContent: "center",
    // alignContent: "center",
    // shadowColor: "#000000",
    marginLeft: 28,
   
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    elevation: 5,
    // borderWidth: 2,
    // borderColor: "blue",
  },
  box2: {
    // borderWidth: 2,
    // borderColor: "blue",
    width: "100%",
    height: 72,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  box1: {
    // borderWidth: 2,
    // borderColor: "green",
    flex: 1,
    // marginLeft: -80,
    // height: 60,
    height: 41,
    gap:3
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 600,
    // marginBottom: 5,
    // marginLeft: -100,
   
    
    width: "80%",
    color:'#2A282F',
    height:19
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#A8A6AC",
   fontWeight:400,
    // borderWidth: 2,
    // borderColor: "red",
    width: "80%",
    height:17
  },
  cardRow: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    // 
    
    // width:40,
  },
  arrowRight: {
    width: 15,
    height: 20,
    // marginRight: 10,
    // marginLeft: "80%",
    // marginTop: -25,
  },
 
});

const PrivateScreen = () => {
  const navigation = useNavigation();
  const cardData = [
    {
      title: "Sports Nutrition       ",
      subtitle: "10 Products     ",
      screenName: "SportBrand",
    },
    {
      title: "Weight Management",
      subtitle: "15 Products    ",
      screenName: "Weight",
    },
    {
      title: "Nutraceuticals          ",
      subtitle: "8 Products       ",
      screenName: "Nutraceutical",
    },
    {
      title: "Probiotics-Prebiotics",
      subtitle: "8 Products        ",
      screenName: "Probiotics",
    },
    {
      title: "Dietary Fiber                ",
      subtitle: "8 Products        ",
      screenName: "Dietry",
    },
    {
      title: "Sports Nutrition       ",
      subtitle: "10 Products     ",
      screenName: "SportBrand",
    },
    // ... Add more card data here
  ];

  const handleNavigateBack = () => {
    navigation.goBack(); // Go back to the previous screen
  };

  return (
    <ImageBackground
    source={require('../assets/images/bg.webp')} // Replace with the path to your background image
    style={styles.backgroundImage}
  >
    <View style={styles.container}>
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
          <Text style={styles.navtext}>PRIVATE LABEL PORTFOLIO</Text>
        </View>
      <View style={styles.maincontainer}>
        

        <View style={styles.maincontent}>
          <Text style={styles.cat}>Categories</Text>
        </View>
        <ScrollView
          style={styles.cardContainer}
          showsVerticalScrollIndicator={false}
          overScrollMode="never"
        >
          {cardData.map((card, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate(card.screenName)}
            >
              <View key={index} style={styles.card}>
                <View style={styles.box2}>
                  <View style={styles.box1}>
                    <Text style={styles.cardTitle}>{card.title}</Text>
                    <Text style={styles.cardSubtitle}>{card.subtitle}</Text>
                  </View>
                  <View style={styles.cardRow}>
                    <Image
                      source={require("../assets/images/caretright.png")}
                      style={styles.arrowRight}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <BottomNavigationBar />
    </View>
    </ImageBackground>
  );
};

export default PrivateScreen;
