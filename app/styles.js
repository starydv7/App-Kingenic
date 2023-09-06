import { StyleSheet } from "react-native";

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



const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain', // Change resizeMode to 'contain'
    justifyContent: 'center',
    // borderWidth: 2,
    // borderColor: 'red',
    // width:"70%"
    height:"60%"
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20, 
    // borderWidth:2,
    // borderColor:'red'
  },
  logo: {
    marginBottom: 20, 
    // borderWidth:2,
    // borderColor:'red',
    width:'100%',
    alignContent:'center',
    alignItems:'center',
    marginTop:80
  },
  logoImage: {
    width: 350, // Set width as needed
    height: 200, // Set height as needed
    resizeMode: 'contain', // Adjust the resizeMode as needed
    // Add logo image styles here
  },
  welcome: {
    fontSize: 30, // Adjust the font size as needed
    fontWeight: 'bold', // Add font weight as needed
    marginBottom: 10, // Add margin or padding as needed
    // borderWidth:2,
    // borderColor:'red',
    marginTop:40
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
    backgroundColor:'#EAFF00',
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    borderRadius: 8, 
    width:'85%',
    

  },
  buttonText: {
    color: 'black', // Customize the button text color
    fontSize: 16, // Adjust the font size as needed
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
    padding:12
    
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

