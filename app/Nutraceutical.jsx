import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import BottomNavigationBar from "./BottomNavigationBar";
import Icon from 'react-native-vector-icons/Ionicons'; // You can replace 'Ionicons' with the appropriate icon set

const SportBrand = () => {
  const navigation = useNavigation();

  // const brandNames = [
  //   { name: "Dairy Protein", screen: "DairyScreen" },
  //   { name: "Plant Protein", screen: "PlantProtein" },
  //   { name: "Amino Acid", screen: "Amino-acid" },
  //   { name: "Nutra", screen: "Nutra" },
  //   { name: "Brand 5", screen: "Brand5Screen" },
  //   { name: "Brand 6", screen: "Brand6Screen" },
  //   { name: "Brand 7", screen: "Brand7Screen" },
  //   { name: "Brand 8", screen: "Brand8Screen" },
  //   { name: "Brand 9", screen: "Brand9Screen" },
  //   { name: "Brand 10", screen: "Brand10Screen" },
  // ];

  const cardData = [
    {
      title: "ULTRA WHEY PROTEIN",
      subtitle:
        "Active Ingredients: Milk Protein Concentrate, Whey Protein Concentrate, L-Glutamine",
      productType: "Drink Mix",
      packagingType: "Sachet, Jar, Flat Bottom Pouch, Stand Up Pouch, Bucket",
      explore: "Explore 1",
      labelClaim: "Label Claim 1",
      image: require("../assets/images/muscles.png"),
    },
    {
      title: "ULTRA WHEY PROTEIN",
      subtitle:
        "Active Ingredients: Milk Protein Concentrate, Whey Protein Concentrate, L-Glutamine",
      productType: "Drink Mix",
      packagingType: "Sachet, Jar, Flat Bottom Pouch, Stand Up Pouch, Bucket",
      explore: "Explore 1",
      labelClaim: "Label Claim 1",
      image: require("../assets/images/muscles.png"),
    },
    {
      title: "ULTRA WHEY PROTEIN",
      subtitle:
        "Active Ingredients: Milk Protein Concentrate, Whey Protein Concentrate, L-Glutamine",
      productType: "Drink Mix",
      packagingType: "Sachet, Jar, Flat Bottom Pouch, Stand Up Pouch, Bucket",
      explore: "Explore 1",
      labelClaim: "Label Claim 1",
      image: require("../assets/images/muscles.png"),
    },
    {
      title: "ULTRA WHEY PROTEIN",
      subtitle:
        "Active Ingredients: Milk Protein Concentrate, Whey Protein Concentrate, L-Glutamine",
      productType: "Drink Mix",
      packagingType: "Sachet, Jar, Flat Bottom Pouch, Stand Up Pouch, Bucket",
      explore: "Explore 1",
      labelClaim: "Label Claim 1",
      image: require("../assets/images/muscles.png"),
    },
    // Add more card data objects as needed
  ];

  const handleNavigateBack = () => {
    navigation.goBack(); // Go back to the previous screen
  };

  const handleBrandPress = (screen) => {
    // Navigate to the specified screen using the navigation object
    navigation.navigate(screen);
  };

  return (
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
        <Text style={styles.navtext}>NUTRACEUTICAL</Text>
      </View>
      
      
      <View style={styles.scrollright}>
        <ScrollView
          horizontal
          contentContainerStyle={styles.brandListContainer}
        >
         <View style={styles.cardsroll}>
         <Image
              source={require("../assets/images/Sparkle.png")}
              style={styles.sparkle}
            />
            <Text style={styles.scrolltext}>Dairy Protein</Text>
         </View>
         <View style={styles.cardsroll}>
         <Image
              source={require("../assets/images/Sparkle.png")}
              style={styles.sparkle}
            />
            <Text style={styles.scrolltext}>Plant Protein</Text>
         </View>
         <View style={styles.cardsroll}>
         <Image
              source={require("../assets/images/Sparkle.png")}
              style={styles.sparkle}
            />
            <Text style={styles.scrolltext}>Amino Acid</Text>
         </View>
         <View style={styles.cardsroll}>
         <Image
              source={require("../assets/images/Sparkle.png")}
              style={styles.sparkle}
            />
            <Text style={styles.scrolltext}>Nutraceutical</Text>
         </View>
         <View style={styles.cardsroll}>
         <Image
              source={require("../assets/images/Sparkle.png")}
              style={styles.sparkle}
            />
            <Text style={styles.scrolltext}>Dairy Protein</Text>
         </View>
         <View style={styles.cardsroll}>
         <Image
              source={require("../assets/images/Sparkle.png")}
              style={styles.sparkle}
            />
            <Text style={styles.scrolltext}>Dairy Protein</Text>
         </View>
         <View style={styles.cardsroll}>
         <Image
              source={require("../assets/images/Sparkle.png")}
              style={styles.sparkle}
            />
            <Text style={styles.scrolltext}>Dairy Protein</Text>
         </View>
         <View style={styles.cardsroll}>
         <Image
              source={require("../assets/images/Sparkle.png")}
              style={styles.sparkle}
            />
            <Text style={styles.scrolltext}>Dairy Protein</Text>
         </View>
         <View style={styles.cardsroll}>
         <Image
              source={require("../assets/images/Sparkle.png")}
              style={styles.sparkle}
            />
            <Text style={styles.scrolltext} >Dairy Protein</Text>
         </View>
         <View style={styles.cardsroll}>
         <Image
              source={require("../assets/images/Sparkle.png")}
              style={styles.sparkle}
            />
            <Text style={styles.scrolltext}>Dairy Protein</Text>
         </View>
        </ScrollView>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never">
        <View style={styles.maincontainer}>
          <View style={styles.maincontent}></View>

          <View style={styles.cardContainer}>
            {cardData.map((card, index) => (
              <View key={index} style={styles.card}>
                <Text style={styles.cardTitle}>{card.title}</Text>
                <Text style={styles.cardSubtitle}>{card.subtitle}</Text>
                <View style={styles.brandName}>
                  <View style={styles.musclesRow}>
                    <Image source={card.image} style={styles.musclesIcon} />
                    <Text style={styles.musclesText}>
                      Muscles {"\n"}Recovery
                    </Text>
                  </View>
                  <View style={styles.divider} />
                  <View style={styles.musclesRow}>
                    <Image source={card.image} style={styles.musclesIcon} />
                    <Text style={styles.musclesText}>
                      Muscles {"\n"}Recovery
                    </Text>
                  </View>
                  <View style={styles.divider} />
                  <View style={styles.musclesRow}>
                    <Image source={card.image} style={styles.musclesIcon} />
                    <Text style={styles.musclesText}>
                      Muscles {"\n"}Recovery
                    </Text>
                  </View>
                </View>
                {/* <Text style={styles.cardText}>
                  Product Type : {card.productType}
                </Text> */}
                <Text style={styles.cardText}>
                  <Text style={styles.boldText}>Product Type:</Text>{" "}
                  {card.productType}
                </Text>
                <Text style={styles.cardText}>
                  <Text style={styles.boldText}>Packaging Type:</Text>{" "}
                  {card.packagingType}
                </Text>
                <Text style={styles.cardText}>{card.explore}</Text>
                <Text style={styles.cardText}>{card.labelClaim}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <BottomNavigationBar />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // padding: 20,
    // borderWidth:2,
    // borderColor:"red",
    justifyContent: "center",
    alignItems: "center",
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
    marginRight: 90,
    fontWeight: 700,
    color: "black",
  },
  maincontainer: {
    // borderWidth:2,
    // borderColor:"green",
    width: "100%",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    // borderWidth:2,
    // borderColor:"blue",
    marginTop: 40,
    width: "80%",
    marginLeft: -55,
  },
 
   // borderColor:"blue",
  
  
  scrollright: {
    // borderWidth:2,
    // borderColor:"blue",
    // marginLeft: 5,
    // marginRight: 10,
    height: 54,
    marginTop: 20,
    width:349,
    borderBottomWidth:1,
    borderColor:'#F1F1F1'
   
  },
  cardsroll:{
    // borderWidth:2,
    // borderColor:"blue",
    width:63,
    flex:1,
    flexDirection:'column',
    // justifyContent:'center',
    alignItems:'center',
    gap:10,

  },
  sparkle:{
     width:20,
     height:20,
    //  Color:'#004643'
  },
  scrolltext:{
    fontSize:10,
    fontWeight:400,
    color:'#7C7C7C',
    width:65,
    marginLeft:5
  },
  
 
  cardContainer: {
    // borderWidth:2,
    // borderColor:"blue",
    // marginTop: 10,
    width: 349,
    height:600,
    padding: 5,
  },
  card: {
    // borderWidth: 1,
    // borderColor: "#ccc",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    // borderWidth:2,
    // borderColor:"blue",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    height: 142,
    // width:300
  },
  cardTitle: {
    // borderWidth:2,
    // borderColor:"blue",
    fontSize: 16,
    fontWeight: 700,
    marginTop: -10,
    height:19,
    color:'#000000CC',
   
  },
  cardSubtitle: {
    fontSize: 8,
    marginTop: 2,
    fontWeight: 400,
    height:10
  },
  brandName: {
    flexDirection: "row",
    marginTop: 5,
    //  borderWidth:2,
    // borderColor:"red",
    justifyContent:'space-between'
  },
  musclesRow: {
    // borderWidth:2,
    // borderColor:"red",
    flexDirection: "row",
    alignItems: "center",
  },
  musclesIcon: {
    // borderWidth:2,
    // borderColor:"red",
    width: 40,
    height: 40,
    marginRight: 5,
  },
  musclesText: {
    fontSize: 10,
    //  borderWidth:2,
    // borderColor:"red",
    fontWeight:500,
    color:'#000000CC'
  },
  divider: {
    width: 1,
    borderColor: '#000000',
    height: "100%",
    backgroundColor: "#ccc",
    // marginHorizontal: 5,
    
  },
  cardText: {
    fontSize: 8,
    marginTop: 2,
    //  borderWidth:2,
    // borderColor:"green",
  
    
  },
  boldText: {
    fontWeight: 700,
    fontSize:8,
    //  borderWidth:2,
    // borderColor:"red",
  },
  shadowContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 100, // Adjust this value as needed
    backgroundColor: "rgba(250, 191, 206, 0.5 )", // Adjust the color and opacity as needed
    zIndex: -1,
  },
});
export default SportBrand;
