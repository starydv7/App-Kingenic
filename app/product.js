import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "contain", // Change resizeMode to 'contain'
    justifyContent: "center",
    // borderWidth: 2,
    // borderColor: 'red',
    // width:"70%"
    height: "100%",
    opacity: 1,
  },
  topmost: {
    flex: 1,
    // backgroundColor: 'teal',
    // padding: 16,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth:2,
    // borderColor:'red'
  },
  nav: {
    //   borderWidth:2,
    // borderColor:'red',
    // width: "90%",
    // height: 40,
    // justifyContent: "space-between",
    // alignItems: "center",
    // marginTop: 60,
    // flexDirection: "row",
    // borderBottomWidth: 1,
    // borderColor: "black",
    width: "90%", // Set width as a percentage of the screen width
    height: 40, // Keep a fixed height
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: windowWidth * 0.15, // Set marginTop as a percentage of the screen width
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "black",
  },
  navtext: {
    //  borderWidth:2,
    // borderColor:'red',
    // fontSize: 16,
    // marginRight: 70,
    // fontWeight: 700,
    // color: "black",
    fontSize: windowWidth * 0.04, // Adjust the font size as a percentage of the screen width
    marginRight: windowWidth * 0.22, // Adjust margin as a percentage of the screen width
    fontWeight: '700', // Use string '700' for fontWeight
    color: "black",
  },

  cardContainer: {
    // paddingBottom: 24,

    // marginTop: 10,
    // width: "100%",
    // padding: 25,
    //  borderWidth:2,
    //  borderColor:'blue'
    width: "90%", // Set width as a percentage of the screen width
    padding: windowWidth * 0.05,
  },
  card1: {
    // borderWidth:2,
    // borderColor:'red',
    // height: 300,
    // marginBottom: 20,
    // marginTop: -10,
    // width: "100%",
    height: windowHeight * 0.3, // Set height as a percentage of the screen height
    marginBottom: windowHeight * 0.01, // Adjust margin as a percentage of the screen height
    marginTop: windowHeight * 0.01, // Adjust margin as a percentage of the screen height
    width: windowWidth * 0.1,
  },

  slide: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginBottom: -60,
    marginBottom: -windowHeight * 0.08,
  },
  cardImageSlider: {
    // width: "100%",
    // height: "70%",
    // resizeMode: "cover",
    // // borderWidth:4,
    // // borderColor:'green',
    // borderRadius: 15,
    width: windowWidth, // Set width as the screen width
    height: windowWidth * 0.8, // Set height as a percentage of the screen width
    resizeMode: "cover",
    borderRadius: 15,
  },
  card: {
    // borderRadius: 10,
    // marginBottom: 16,
    // // width:350,
    // width: 310,
    // height: 241,

    // // left:-10,
    // overflow: "hidden",
    // // padding: 5,
    // backgroundColor: "white",
    // backgroundColor: "white", // Set the background color to white
    // shadowColor: "rgba(0, 0, 0, 0.5)", // Shadow color
    // shadowOffset: { width: 0, height: 2 }, // Shadow offset
    // shadowOpacity: 0.8, // Shadow opacity
    // shadowRadius: 4, // Shadow radius
    // elevation: 2, // Elevation for Android
    // padding: 16, // Adjust padding as needed
    borderRadius: 10,
    marginBottom: windowWidth * 0.042, // Adjust margin as a percentage of the screen width
    width: windowWidth * 0.86, // Adjust width as a percentage of the screen width
    height: windowWidth * 0.645, // Adjust height as a percentage of the screen width
    overflow: "hidden",
    backgroundColor: "white", // Set the background color to white
    shadowColor: "rgba(0, 0, 0, 0.5)", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.8, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 2,
  },
  cardImage: {
    // width: "100%",
    // height: "60%",
    // // borderRadius: 8,
    // // marginBottom: 8,
    // opacity: 1,
    width: "100%",
    height: windowWidth * 0.4, // Adjust height as a percentage of the screen width
    // borderRadius: 8,
    // marginBottom: 8,
    opacity: 1,
  },
  cat2: {
    // fontSize: 15,
    // fontWeight: 700,
    // // marginBottom: 8,
    // fontFamily: "Inter-Regular",
    // // borderWidth:2,
    // // borderColor:'red',
    // marginLeft: 15,
    // marginTop: 10,
    fontSize: windowWidth * 0.04, // Adjust the font size as a percentage of the screen width
    fontWeight: '700', // Use string '700' for fontWeight
    fontFamily: "Inter-Regular",
    marginLeft: windowWidth * 0.04, // Adjust left margin as a percentage of the screen width
    marginTop: windowWidth * 0.03,
  },
  catText: {
    // fontSize: 9,
    // fontWeight: 400,
    // color: "#666",
    // fontFamily: "Inter-Regular",
    // // borderWidth:2,
    // // borderColor:'red',
    // marginLeft: 15,
    fontSize: windowWidth * 0.025, // Adjust the font size as a percentage of the screen width
    fontWeight: '400', // Use string '400' for fontWeight
    color: "#666",
    fontFamily: "Inter-Regular",
    marginLeft: windowWidth * 0.04,
  },
  cat3: {
    fontSize: 15,
    fontWeight: 700,
    // marginBottom: 8,
    fontFamily: "Inter-Regular",
    // borderWidth:2,
    // borderColor:'red',
    marginLeft: 15,
    marginTop: 10,
  },
  catText3: {
    // fontSize: 9,
    // fontWeight: 400,
    // color: "#666",
    // fontFamily: "Inter-Regular",
    // // borderWidth:2,
    // // borderColor:'red',
    // marginLeft: 15,
    fontSize: windowWidth * 0.025, // Adjust the font size as a percentage of the screen width
    fontWeight: '400', // Use string '400' for fontWeight
    color: "#666",
    fontFamily: "Inter-Regular",
    marginLeft: windowWidth * 0.04,
  },
  seeMore: {
    // color: "#007bff",
    // // marginTop: 5,
    // marginBottom: 5,
    // fontFamily: "Inter-Regular",
    color: "#007bff",
    marginBottom: windowWidth * 0.02, // Adjust the margin based on the screen width
    fontFamily: "Inter-Regular",
  },
  backIcon: {
    // width: 20,
    // height: 20,
    // resizeMode: "contain",
    width: windowWidth * 0.05, // Adjust the width as a percentage of the screen width
    height: windowWidth * 0.04, // Adjust the height as a percentage of the screen width
    resizeMode: "contain",
  },
  backbutton: {
    // width:50,
    // height:50,
    // borderRadius:20,
    // borderWidth:1,
    // borderColor:"grey",
  },
  box3: {
    // borderWidth:2,
    // borderColor:"red",
    // height: 140,
    // borderRadius: 10,
    // backgroundColor:'yellow'
    height: windowWidth * 0.35, // Adjust the height as a percentage of the screen width
    borderRadius: windowWidth * 0.0275,
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

export default styles;
