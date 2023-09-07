// import { StyleSheet } from "react-native";

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'transparent',
//     // borderWidth:2,
//     // borderColor:'red'
//   },
//   // video: {
//   //   width: '100%', // Or specify a fixed width if needed
//   //   height: '100%', 
//   //   flex: 1,
//   //   ...StyleSheet.absoluteFillObject, // This ensures the video covers the entire screen
//   // },
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover', // You can use 'cover', 'contain', or 'stretch' here
//     width: '100%', // Or specify a fixed width if needed
//     height: '100%',
//     borderWidth:2,
//     borderColor:'red' // Or specify a fixed height if needed
//   },
//   foggyOverlay: {
//     position: "absolute",
//     top: 0,
//     right: 0,
//     width: 280,
//     height: 280,
//     backgroundColor: "transparent",
//     zIndex: 1,
//     borderBottomLeftRadius: 280,
//     // backgroundColor: "teal",
    
//   },
//   content: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     zIndex: 2,
//     borderWidth:2,
//     borderColor:'green'
//   },
//   logo: {
//     width: 273,
//     height: 273,
//     marginBottom: 10,
//     // backgroundColor:"#FBFBFBB2",
//     borderWidth:2,
//     borderColor:'green',
   
//   },
//   logoImage: {
//     width: '100%',
//     height: 123,
//     top:26,
//     // left:-50,
//     // right:20,
//     justifyContent:"center",
//     alignItems:"center",
//     borderWidth:2,
//     borderColor:'green'
//   },
//   welcome: {
//     fontSize: 34,
//     fontWeight: "bold",
//     marginBottom: 10,
//     top:10,
//     width:195,
//     height:39,
//     textAlign:"center",
//     borderWidth:2,
//     borderColor:'green'
//   },
//   welcome1: {
//     fontSize: 16,
//     marginBottom: 20,
//     padding: 30,
//     top:20, 
//     fontWeight: 400,
//     lineHeight: 17.1,
//     textAlign: "center",
//     marginLeft: 'auto',   // Add this property
//     marginRight: 'auto',
//     borderWidth:2,
//     borderColor:'blue'  // Add this property
//   },
//   button: {
//     backgroundColor: "#8600EF",
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 20,
//     width:340,
//     borderWidth:2,
//     borderColor:'red'
//   },
//   buttonText: {
//     color: "white",
//     fontWeight: "bold",
//     textAlign:"center",
//     fontSize: 18,
//     borderWidth:2,
//     borderColor:'green'
//   },
//   normalText: {
//     fontSize: 16,
//     textAlign: "center",
//     marginBottom: 20,
//     borderWidth:2,
//      borderColor:'red'
//   },
//   bottomTextRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     // alignItems:'center',
//     width: "85%",
//     // paddingHorizontal: 20,
//     // position: "absolute",
//     // bottom: 0,
//     // left: 0,
//     // right: 0,
//     // marginBottom: 15,
//     borderWidth:2,
//     borderColor:'red'
//   },
//   bottomLeftText: {
//     fontSize: 10,
//     // textAlign: "left",
//     color:"#000000CC",
//     lineHeight:11.4,
//   },
//   bottomRightText: {
//     fontSize: 10,
//     // textAlign: "right",
//     color:"#000000CC",
//     lineHeight:11.4,
//   },
  
  
// });
// styles.js

import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain', // Change resizeMode to 'contain'
    justifyContent: 'center',
    // borderWidth: 2,
    // borderColor: 'red',
    // width:"70%"
    // height:"60%"
    height: windowHeight * 0.6,
  },
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingHorizontal: 20, 
    // borderWidth:2,
    // borderColor:'red'
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: windowWidth * 0.05, // Set padding as a percentage of the screen width
  },
  logo: {
    // marginBottom: 20, 
    // // borderWidth:2,
    // // borderColor:'red',
    // width:'100%',
    // alignContent:'center',
    // alignItems:'center',
    // marginTop:80
   
   // Adjust top margin as a percentage of the screen height
   marginBottom: windowHeight * 0.02, // Adjust margin as a percentage of the screen height
   width: '80%', // Set width as a percentage of the parent container
   alignSelf: 'center', // Align the logo to the center horizontally
   marginTop: windowHeight * 0.01, // Adjust top margin as a percentage of the screen height
  },
  logoImage: {
    // width: 350, // Set width as needed
    // height: 200, // Set height as needed
    // resizeMode: 'contain', // Adjust the resizeMode as needed
    // // Add logo image styles here
    width: windowWidth * 0.8, // Set width as a percentage of the screen width
    height: windowHeight * 0.35, // Set height as a percentage of the screen height
    resizeMode: 'contain', // Adjust the resizeMode as needed
    alignSelf: 'center', // Align the logo image to the center horizontally
  },
  welcome: {
    // fontSize: 30, // Adjust the font size as needed
    // fontWeight: 'bold', // Add font weight as needed
    // marginBottom: 10, // Add margin or padding as needed
    // // borderWidth:2,
    // // borderColor:'red',
    // marginTop:40
    fontSize: windowHeight * 0.035, // Adjust the font size as a percentage of the screen height
    fontWeight: 'bold', // Add font weight as needed
    marginBottom: windowHeight * 0.01, // Adjust margin as a percentage of the screen height
    marginTop: windowHeight * 0.04, // Adjust top margin as a percentage of the screen height
  },
  welcome1: {
    fontSize: 16, // Adjust the font size as needed
    textAlign: 'center', // Align text as needed
    marginBottom: 30,
    opacity:0.8,
    color:'black' // Add margin or padding as needed
    // borderWidth:2,
    // borderColor:'red'
  },
  button: {
    // background: #EAFF00;
    // backgroundColor:'#EAFF00',
    // paddingVertical: 10, 
    // paddingHorizontal: 20, 
    // borderRadius: 8, 
    // width:'85%',
    backgroundColor: '#EAFF00',
    paddingVertical: 10, 
    paddingHorizontal: windowWidth * 0.1, // Set padding as a percentage of the screen width
    borderRadius: 8, 
    width: windowWidth * 0.85, // Set width as a percentage of the screen width
  },
  buttonText: {
    // color: 'black', // Customize the button text color
    // fontSize: 16, // Adjust the font size as needed
    // fontWeight: '400', // Add font weight as needed
    // textAlign: 'center', // Align text as needed
    color: 'black', // Customize the button text color
    fontSize: windowWidth * 0.04, // Adjust the font size as a percentage of the screen width
    fontWeight: '400', // Add font weight as needed
    textAlign: 'center', // Align text as needed
  },
  bottomTextRow: {
     flexDirection: 'row',
    justifyContent: 'space-between',
    // Add margin or padding as needed
    // borderWidth:2,
    // borderColor:'red',
    // marginTop:20,
    width:'100%',
    padding:"2%",
  },
  bottomLeftText: {
    color: 'gray', // Customize the left text color
    // Add styles for the left text here
  },
  bottomRightText: {
    color: 'gray', // Customize the right text color
    // Add styles for the right text here
  },
});

export default styles;

