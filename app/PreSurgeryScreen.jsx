import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import BottomNavigationBar from "./BottomNavigationBar";
import { useNavigation } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";
import Swiper from "react-native-swiper";
const Surgery = () => {
  const [showMore, setShowMore] = useState(false);
  const navigation = useNavigation();
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const images = [
    require("../assets/images/brand1.png"),
    require("../assets/images/brand1.png"),
    require("../assets/images/brand1.png"),
  ];
  const handleNavigateBack = () => {
    navigation.goBack(); // Go back to the previous screen
  };
  const Card = ({ title, subtitle, imageSource }) => {
    return (
      <View style={styles.card2}>
        <Image source={imageSource} style={styles.imageBox2} />
        <Text style={styles.title2}>{title}</Text>
        <Text style={styles.subtitle2}>{subtitle}</Text>
      </View>
    );
  };
  return (
    <ImageBackground
    source={require('../assets/images/bg.webp')} // Replace with the path to your background image
    style={styles.backgroundImage}
  >
    <View style={styles.containerm}>
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
        <Text style={styles.navtext}>WÛNE PRE-SURGERY</Text>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.box1}>
          <Image
            source={require("../assets/images/kin2.png")}
            style={styles.image1}
          />
        </View>
        <View style={styles.box2}>
          <Text style={styles.container2Title}>PRE-SURGERY </Text>
          <View style={styles.titleContainer}>
            <Icon name="heart" size={18} color="red" />
            <Text style={styles.titleText}>Brand : Wûne </Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.textContainer}>
            <Text style={styles.heading2}>Category</Text>
            <Text style={styles.mainText}>
              Food For Special Medical Purpose
            </Text>
          </View>
          <View style={styles.line2}></View>
          <View style={styles.textbox1}>
            <Text style={styles.heading3}>Description</Text>
            <Text style={styles.mainText2}>
              Native to the Yunnan and Sichuan provinces of southern China, the
              Chinese money plant was first brought to the UK in 1906 by
              Scottish botanist George Forrest (yes, we know the exact man who
              found it). It became a popular houseplant later in the 20th
              century because it is simple to grow and really easy to propagate,
              meaning friends could pass cuttings around amongst themselves.
              That earned it the nickname ‘pass it on plant’.
            </Text>
          </View>
        </View>
        <View style={styles.box3}>
          <Text style={styles.indicationText}>Presentation </Text>

          <Text style={styles.heaterText}>6 sachets x 25g per box. </Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.indicationText}>Indication</Text>

          <Text style={styles.heaterText}>
            Pre-Surgery, Carbohydrate Loading{" "}
          </Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.indicationText}>Ingredients</Text>

          <Text style={styles.heaterText}>
            Pre-Surgery, Carbohydrate Loading{" "}
          </Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.indicationText}>Administration and dosage</Text>

          <Text style={styles.heaterText}>
            Pre-Surgery, Carbohydrate Loading{" "}
          </Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.indicationText}>Shelf Life and Storage</Text>

          <Text style={styles.heaterText}>
            Pre-Surgery, Carbohydrate Loading{" "}
          </Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.indicationText}>Contraindications</Text>

          <Text style={styles.heaterText}>
            Pre-Surgery, Carbohydrate Loading{" "}
          </Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.indicationText}>Precautions</Text>

          <Text style={styles.heaterText}>
            Pre-Surgery, Carbohydrate Loading{" "}
          </Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.indicationText}>Suitable For</Text>

          <Text style={styles.heaterText}>
            Pre-Surgery, Carbohydrate Loading{" "}
          </Text>
        </View>
        <View style={styles.box4}>
          <Image
            source={require("../assets/images/kin5.png")}
            style={styles.york3}
          />
        </View>
        <View style={styles.box8}>
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
  containerm: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    // borderWidth: 2,
    // borderColor: "blue",
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
    marginRight: 70,
    fontWeight: 700,
    color: "black",
  },
  container: {
    flexGrow: 1,
    // backgroundColor: "#fff",
    // paddingBottom: 24,
    // paddingHorizontal: 16,
    // borderWidth: 2,
    // borderColor: "blue",
    width: "80%",
    // marginTop:40,
  },
  box1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginTop: 10,
    height: 271,
    // borderWidth: 2,
    // borderColor: "red",
    width: 349,
    padding: 10,
  },
  image1: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },

  image2: {
    width: 20,
    height: 24,
  },
  box2: {
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: "#EEEEEE",
    marginBottom: 18,
    // borderWidth: 2,
    // borderColor: "blue",
  },
  container2Title: {
    fontSize: 20,
    fontWeight: 600,
    // borderWidth:2,
    // borderColor:'blue',
    height: 24,
    width: 226,
    marginBottom: 10,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    // borderWidth:2,
    // borderColor: "#EEEEEE",
    gap: 8,
    width: 304,
    height: 18,
    // borderBottomWidth: 1,
  },
  // starIcon: {
  //   fontSize: 24,
  //   color: "#FFD700",
  //   marginRight: 8,
  // },
  titleText: {
    fontSize: 10,
    fontWeight: 500,
    // borderWidth:2,
    // borderColor:'red',
    width: 68,
    height: 12,
  },
  line: {
    borderWidth: 0.5,
    borderColor: "#EEEEEE",
    marginTop:5
  },
  line2: {
    borderWidth: 0.5,
    borderColor: "#EEEEEE",
    marginTop:-15,
    marginBottom:20
  },
  textContainer: {
    // borderWidth:2,
    // borderColor:'blue',
    height: 39,
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    gap: 4,
    marginBottom: 20,
  },
  heading2: {
    // borderWidth:2,
    // borderColor:'red',
    width: 109,
    height: 12,
    fontSize: 10,
    fontWeight: 600,
    lineHeight: 12.1,
    color: "#828282",
    //  marginBottom:20,
  },
  mainText: {
    fontSize: 10,
    lineHeight: 12.1,
    // marginBottom: 5,
    // borderWidth: 2,
    // borderColor: "red",
    width: 190,
    height: 12,
    fontWeight: 400,
    color: "#333333",
  },
  textbox1: {
    // borderWidth: 2,
    // borderColor: "red",
    width: 304,
    height: 111,
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    gap: 4,
  },
  heading3: {
    // borderWidth: 2,
    // borderColor: "red",
    height: 12,
    fontSize: 10,
    fontWeight: 500,
    color: "#333333",
  },
  mainText2: {
    // borderWidth: 2,
    // borderColor: "red",
    fontSize: 9,
    fontWeight: 400,
    width: 304,
    height: 117,
    lineHeight: 16,
  },

  box3: {
    // paddingHorizontal: 16,
    height: 40,
    // borderWidth: 2,
    // borderColor: "red",
    width: 304,
    borderBottomWidth: 1,
    marginLeft:16,
    borderColor: "#EEEEEE",
    marginBottom: 15,
  },
  indicationText: {
    fontSize: 10,
    fontWeight: 500,
    // borderWidth: 2,
    // borderColor: "red",
    color: "#333333",
    lineHeight: 12.1,
  },

  heaterText: {
    // borderWidth: 2,
    // borderColor: "red",
    fontSize: 9,
    fontWeight: 400,
    lineHeight: 16,
  },

  box4: {
    // paddingTop: 5,
    // padding: 15,
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    // borderWidth:2,
    // borderColor:'red',
    height: 711,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  york3: {
    width: "100%",
    // height: 711,
    marginTop: 8,
    // borderRadius: 40,
    width: 314,
  },

  box8: {
    // borderWidth:2,
    // borderColor:"red",
    height: 140,
    borderRadius: 10,
    // backgroundColor:'yellow'
    marginTop: 10,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});

export default Surgery;
