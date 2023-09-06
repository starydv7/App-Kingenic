import { StyleSheet } from "react-native";

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

  cardContainer: {
    // paddingBottom: 24,

    // marginTop: 10,
    width: "100%",
    padding: 25,
    //  borderWidth:2,
    //  borderColor:'blue'
  },
  card1: {
    // borderWidth:2,
    // borderColor:'red',
    height: 300,
    marginBottom: 20,
    marginTop: -10,
    width: "100%",
  },

  slide: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginBottom: -60,
  },
  cardImageSlider: {
    width: "100%",
    height: "70%",
    resizeMode: "cover",
    // borderWidth:4,
    // borderColor:'green',
    borderRadius: 15,
  },
  card: {
    borderRadius: 10,
    marginBottom: 16,
    // width:350,
    width: 310,
    height: 241,

    // left:-10,
    overflow: "hidden",
    // padding: 5,
    backgroundColor: "white",
    backgroundColor: "white", // Set the background color to white
    shadowColor: "rgba(0, 0, 0, 0.5)", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.8, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 2, // Elevation for Android
    // padding: 16, // Adjust padding as needed
  },
  cardImage: {
    width: "100%",
    height: "60%",
    // borderRadius: 8,
    // marginBottom: 8,
    opacity: 1,
  },
  cat2: {
    fontSize: 15,
    fontWeight: 700,
    // marginBottom: 8,
    fontFamily: "Inter-Regular",
    // borderWidth:2,
    // borderColor:'red',
    marginLeft: 15,
    marginTop: 10,
  },
  catText: {
    fontSize: 9,
    fontWeight: 400,
    color: "#666",
    fontFamily: "Inter-Regular",
    // borderWidth:2,
    // borderColor:'red',
    marginLeft: 15,
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
    fontSize: 9,
    fontWeight: 400,
    color: "#666",
    fontFamily: "Inter-Regular",
    // borderWidth:2,
    // borderColor:'red',
    marginLeft: 15,
  },
  seeMore: {
    color: "#007bff",
    // marginTop: 5,
    marginBottom: 5,
    fontFamily: "Inter-Regular",
  },
  backIcon: {
    width: 20,
    height: 20,
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
    height: 140,
    borderRadius: 10,
    // backgroundColor:'yellow'
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
