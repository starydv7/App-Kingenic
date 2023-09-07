import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableHighlight,
  Dimensions
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import BottomNavigationBar from "./BottomNavigationBar";

const SportBrand = () => {
  const navigation = useNavigation();

  const brandNames = [
    { name: "Dairy Protein", screen: "DairyScreen" },
    { name: "Plant Protein", screen: "PlantProtein" },
    { name: "Amino Acid", screen: "Amino-acid" },
    { name: "Nutra", screen: "Nutra" },
    { name: "Brand 5", screen: "Brand5Screen" },
    { name: "Brand 6", screen: "Brand6Screen" },
    { name: "Brand 7", screen: "Brand7Screen" },
    { name: "Brand 8", screen: "Brand8Screen" },
    { name: "Brand 9", screen: "Brand9Screen" },
    { name: "Brand 10", screen: "Brand10Screen" },
  ];

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
       <View style={styles.shadowContainer}></View>
      <View style={styles.rowContainer}>
            <TouchableOpacity onPress={handleNavigateBack}>
              <Image
                source={require("../assets/images/arrow.png")}
                style={styles.searchIcon}
              />
            </TouchableOpacity>
            <Text style={styles.portfolioText}> Plant Protein </Text>
          </View>
          <Text style={styles.text}>
            Slide through the sub-categories to find the right fit product for
            your fitness brand.
          </Text>
          <View style={styles.scrollright}>
            <ScrollView
              horizontal
              contentContainerStyle={styles.brandListContainer}
            >
              {brandNames.map((brand, index) => (
                <TouchableHighlight
                  key={index}
                  style={styles.brandItem}
                  onPress={() => handleBrandPress(brand.screen)}
                >
                  <View style={styles.brandContent}>
                    <Text style={styles.brandText}> {brand.name} </Text>
                  </View>
                </TouchableHighlight>
              ))}
            </ScrollView>
          </View>
    <ScrollView  showsVerticalScrollIndicator={false}
        overScrollMode="never">
      
        <View style={styles.maincontainer}>
          
          
          <View style={styles.maincontent}></View>
         

          <View style={styles.cardContainer}>
            {cardData.map((card, index) => (
              <View key={index} style={styles.card}>
                <Text style={styles.cardTitle}>{card.title}</Text>
                <Text style={styles.cardSubtitle}>{card.subtitle}</Text>
                <View style={styles.brandName}>
                  <View style={styles.musclesRow}>
                    <Image
                      source={card.image}
                      style={styles.musclesIcon}
                    />
                    <Text style={styles.musclesText}>
                      Muscles {"\n"}Recovery
                    </Text>
                  </View>
                  <View style={styles.divider} />
                  <View style={styles.musclesRow}>
                    <Image
                      source={card.image}
                      style={styles.musclesIcon}
                    />
                    <Text style={styles.musclesText}>
                      Muscles {"\n"}Recovery
                    </Text>
                  </View>
                  <View style={styles.divider} />
                  <View style={styles.musclesRow}>
                    <Image
                      source={card.image}
                      style={styles.musclesIcon}
                    />
                    <Text style={styles.musclesText}>
                      Muscles {"\n"}Recovery
                    </Text>
                  </View>
                </View>
                <Text style={styles.cardText}>
                  Product Type : {card.productType}
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
    <BottomNavigationBar/>
    </View>
     
  );
};
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", 
    // padding: 20, 
    // borderWidth:2,
    // borderColor:"red",
    justifyContent:'center',
    alignItems:"center"
  },
  maincontainer: {
    // borderWidth:2,
    // borderColor:"green",
     width:'100%' ,
     marginTop:10,
     justifyContent:'center',
     alignItems:'center'
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    // borderWidth:2,
    // borderColor:"blue",
    marginTop:40,
    width:'80%',
    marginLeft: -55,
  },
  portfolioText: {
    // fontSize: 20, 
    // fontWeight: "bold", 
    // marginLeft: 5, 
    // borderWidth:2,
    // borderColor:"blue",
    fontSize: windowWidth * 0.04, // Adjust the font size as a percentage of the screen width
    marginRight: windowWidth * 0.25, // Adjust the margin as a percentage of the screen width
    fontWeight: '700', // Use string '700' for fontWeight
    color: 'black',
    
  },
  text: {
    marginLeft: 1,
    fontSize: 12, 
    // marginTop: 10, 
    // borderWidth:2,
    // borderColor:"blue",
  },
  maincontent: {
    // marginTop:10,
    
  },
  scrollright: {
    // borderWidth:2,
    // borderColor:"blue",
    marginLeft:5,
    marginRight:10,
    height:40,
    marginTop:10
  },
  brandListContainer: {
   
  },
  brandItem: {
    
    marginRight: 10, 
    padding: 10, 
    borderRadius: 8, 
    borderWidth: 1, 
    borderColor: "#ccc", 
    
  },
  brandContent: {
    
  },
  brandText: {
    
    fontSize: 14, 
    fontWeight: "bold", 
  },
  cardContainer: {
    // borderWidth:2,
    // borderColor:"blue",
    marginTop: 20, 
    width:"95%"
  },
  card: {
    
    // borderWidth: 1, 
    // borderColor: "#ccc", 
    borderRadius: 8,
    padding: 20,
    marginBottom: 10, 
    // borderWidth:2,
    // borderColor:"blue",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    height:200
  },
  cardTitle: {
    // borderWidth:2,
    // borderColor:"blue",
    fontSize: 18, 
    fontWeight: "bold", 
    marginTop: -10,
  },
  cardSubtitle: {
    
    fontSize: 8, 
    marginTop: 2, 
  },
  brandName: {
    
    flexDirection: "row", 
    marginTop: 10, 
  },
  musclesRow: {
    // borderWidth:2,
    // borderColor:"blue",
    flexDirection: "row", 
    alignItems: "center", 
    
  },
  musclesIcon: {
    // borderWidth:2,
    // borderColor:"blue",
    width: 20, 
    height: 20, 
    marginRight: 5, 
  },
  musclesText: {
    
    fontSize: 15, 
  },
  divider: {
    
    width: 1, 
    height: "100%", 
    backgroundColor: "#ccc", 
    marginHorizontal: 5, 
  },
  cardText: {
    
    fontSize: 10, 
    marginTop: 5, 
  },
  boldText: {
    
    fontWeight: "bold", 
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

