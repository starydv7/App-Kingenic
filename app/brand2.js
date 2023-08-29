// import { StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//   topmost: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth:2,
//     borderColor:"red",
//     backgroundColor: '#f4f4f4', // Adding a background color for the page
//   },
 
//   hello1: {
//     marginTop: 70, // Using marginTop instead of top
//     width: 320,
//     height: 74,
//     fontSize: 13,
//     lineHeight: 30, // Correcting the property name to lineHeight
//     // textAlign: 'center', // Center aligning the text
//     marginLeft:50,
//     textAlign:"left",
//     borderWidth:5,
//     borderColor:"red",

//   },
//   card1:{
//     width:"100%",
//     height:201,
//     top:30,
//     backgroundColor: '#f0f0f0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     marginHorizontal: 5,
//     marginVertical: 15,
//     borderRadius:20,
//     marginBottom:10,
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   cardContainer: {
//     marginTop: 10,
//     width: "100%",
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     paddingHorizontal: 10,
//     paddingBottom:130,
//     borderWidth:2,
//     borderColor:"red",
    
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 16,
//   },
//   card: {
//     width:169,
//     height:203,
//     top:20,
//     backgroundColor: '#FFFFFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     marginHorizontal: 5,
//     marginVertical: 15,
//     borderRadius:12,
//     padding:24,
//     gap:16,
//     borderWidth:2,
//     borderColor:"red",
//   },
//   imgcard:{
// width:148,
// height:137,
// borderRadius:12,
// backgroundColor:"#DEDEDE",
// borderWidth:2,
//     borderColor:"red",
//   },
//   cardImage: {
//     width: 148,
//     height: 137,
//     resizeMode: 'cover',
//     marginBottom: 30,
//     borderWidth:2,
//     borderColor:"red",
//   },
//   picture:{
//     width:117,
//     height:98,
//     top:70,
//     left:10,
//     borderWidth:2,
//     borderColor:"red",
//   },
//   protext:{
//     width:90,
//     height:11,
//     fontWeight:500,
//     fontSize:9,
//     color:"#666666",
//     left:20,
//     borderWidth:2,
//     borderColor:"red",
//   },
//   cat1:{
//     fontSize:18,
//     fontWeight:700,
//     lineHeight:18.8,
//     top:-5,
//     textAlign:"left",
//     marginLeft:20,
//     borderWidth:2,
//     borderColor:"red",
//   },
//   catbrand:{
//     fontSize:14,
//     fontWeight:700,
//     lineHeight:18.8,
//     top:-5,
//     textAlign:"left",
//     marginLeft:20,
//     borderWidth:2,
//     borderColor:"red",
//   },
//   cat2:{
//     fontSize:24,
//     fontWeight:700,
//     lineHeight:21.8,
//     top:10,
//     marginLeft:-140,
//     borderWidth:2,
//     borderColor:"red",
//   },
//   cardImage2:{
//     width: '100%',
//     height: "100%",
//     resizeMode: 'cover',
//     marginBottom: 0,
//     borderWidth:2,
//     borderColor:"red",
//   },
//   catText:{
//     fontSize:12,
//     fontWeight:700,
//     lineHeight:21.8,
//     top:0,
//     textAlign:"left",
//     marginLeft:3,
//     borderWidth:2,
//     borderColor:"red",
//   },
//   catText1:{
//     fontSize:14,
//     fontWeight:700,
//     lineHeight:21.8,
//     top:10,
//     left:10,
//     borderWidth:2,
//     borderColor:"red",
//   },
//   searchContainer: {
//     width:"100%",
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: -10,
//     borderWidth:2,
//     borderColor:"red",
//   },
//   searchInput: {
//     width:"85%",
//     height: 60,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     paddingHorizontal: 10,
//     marginRight: 5,
//     borderRadius:35,
//     fontSize:17,
//     lineHeight:20.57,
//     opacity: 0.5,
//     textAlign:"center",
//   },
//   searchIcon:{
//     position: 'absolute', // Position the icon absolutely
//     left: 60, // Adjust left position to align the icon
//     zIndex: 1, // Ensure the icon is above the input field
//     width:18,
//     height:18,
//   },
//   roundrow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between', // Adjust as needed
//     alignItems: 'center', // Adjust as needed
//     marginTop: 20, // Adjust as needed
//     borderWidth:2,
//     borderColor:"red",
//   },

//   roundcard: {
//     width: '18%', // Adjust the width as needed to fit 5 cards in a row
//     borderRadius: 10, // Add borderRadius to make the card rounded
//     backgroundColor: 'transparent', // Adjust the background color as needed
//     padding: 10,
//     alignItems: 'center',
//     top:60,
//     borderWidth:2,
//     borderColor:"red",
//   },

//   roundimgcard: {
//     width: 80,
//     height: 80,
//     borderRadius: 40, // Add borderRadius to make the image inside rounded
//     backgroundColor: '#ccc', // Add a background color or image
//     marginBottom: 5,
//     borderWidth:2,
//     borderColor:"red",
//   },

//   roundcardTitle: {
//     fontSize: 14,
//     textAlign: 'center',
//     borderWidth:2,
//     borderColor:"red",
//   },
//   cardTitle:{
//     fontSize: 14,
//     fontWeight: 600,
//     color: "black",
//     fontFamily:"Inter-Regular",
//     borderWidth:2,
//     borderColor:"red",
//   },
//   brandedPortfolio: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 6,
//     top:40,
//   },
//   brandText: {
//     fontFamily: "Inter-Bold",
//     fontSize: 18,
//     fontWeight: 700,
//     color:"#000000",
//     textAlign:"center",
//     justifyContent:"center",
//     marginBottom: 26,
//     marginLeft:"18%",
    
//     // Add any other styles for your brand text
//     // For example: color: "#333"
//   },
//   backIcon: {
//     width: 20,
//     height: 20,
//     resizeMode: "contain",
//     left:12,
//     top:15,
//   },
//   backbutton:{
//     width:50,
//     height:50,
//     borderRadius:20,
//     // borderWidth:1,
//     // borderColor:"grey",
//     left:0,
//     top:-10,
    
//   },
//   wuneImage:{
   
//     width:117,
//     height:98,
//     top:30,

//   },
//   wuneImg:{
//     width:100,
//     height:50,
//     left:10,
//     top:10,
//   },
//   productsText:{
//     fontSize:9,
//     color:"#666666",
//     opacity:0.9,
//     top:20,
//     left:15,
//     fontFamily:"Inter-Regular",
//   }

// });

// export default styles;

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  topmost: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth:2,
    // borderColor:"red"
  },
  brandedPortfolio: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth:2,
    // borderColor:"red",
    marginTop:45,
    width:'100%'
   
  },
  backButton: {
    padding: 10,
    // borderWidth:2,
    // borderColor:"red",
    marginRight:40
  },
  backbutton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth:2,
    // borderColor:"red",
  },
  // backIcon: {
  //   width: 20,
  //   height: 20,
  //   // Add any additional styles for the icon image
  //   // borderWidth:2,
  //   // borderColor:"red",
  // },
  brandText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    // Add any additional styles for the brand text
    // borderWidth:2,
    // borderColor:"red",
  },
  hello1: {
    marginTop: 20,
    fontSize: 14.5,
    // borderWidth:2,
    // borderColor:"red",
    // marginTop: 50,
     marginBottom:15,    
      width: '100%',
    height: 40,
    
    lineHeight: 30,
   
     textAlign: 'center'
  },
  hello2: {
    marginTop: 10,
    fontSize: 15.5,
    // borderWidth:2,
    // borderColor:"red",
    // marginTop: 50,
     marginBottom:15,    
      width: '100%',
    height: 40,
    paddingLeft:10,
    lineHeight: 30,
   
     textAlign: 'left'
  },
  cardContainer: {
    marginTop: 10,
    
    // borderWidth:2,
    // borderColor:"blue",
    padding: 7,
    
  },
  card1: {
    // borderWidth:2,
    // borderColor:"red",
    // flex:1
   
    // Add any additional styles for the card1 container
  },
  cardImage1: {
    width: '100%',
    height: 200,
    // borderWidth:2,
    // borderColor:"blue"
  },
  wuneImage: {
    // borderWidth:2,
    // borderColor:"black",
    marginTop: 10,
    height:110,
    width:'100%'
    // Add any additional styles for the wuneImage container
  },
  wuneImg: {
    width: "40%",
    height: 65,
    // borderWidth:2,
    // borderColor:"red"
    
  },
  productsText: {
    fontSize: 14,
    // borderWidth:2,
    // borderColor:"green",
    marginTop: 10,
    marginLeft:14,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    // borderWidth:2,
    // borderColor:"green",
    
    height:200

  },
  card: {
    width:160,
    height:'auto',
    // top:20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    borderColor: '#ccc',
    // marginHorizontal: 5,
    // marginVertical: 15,
    borderRadius:12,
    padding:8,
    // gap:1,
    // borderWidth:2,
    // borderColor:"red",
    elevation: 5, // Add elevation for box shadow
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.2, // Shadow opacity
    shadowRadius: 4, 
  },
  imgcard: {
    width:'100%',
    height:137,
    borderRadius:12,
    backgroundColor:"#DEDEDE",
    // borderWidth:2,
    //     borderColor:"green",
  },
  cardTitle: {
    fontSize: 13,
        fontWeight: 600,
        color: "black",
        fontFamily:"Inter-Regular",
        // borderWidth:2,
        // borderColor:"green",
        marginTop:10
    // Add any additional styles for the card title
  },
  roundrow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
    // borderWidth:2,
    //     borderColor:"blue",
        width:'100%'
  },
  roundcard: {
    // width: '15%',
    // backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 5,
    // borderWidth:2,
    //     borderColor:"red",
  },
  roundimgcard: {
    width: 70,
    height: 70,
    borderRadius: 40, // Add borderRadius to make the image inside rounded
    backgroundColor: '#ccc', // Add a background color or image
    // marginBottom: 5,
    // borderWidth:2,
    // borderColor:"green",
  },
  // Add more styles as needed
});

export default styles;



