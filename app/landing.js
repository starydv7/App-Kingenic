
 import { StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
  
//   topmost: {
//     flex: 1,
//     // backgroundColor: 'teal',
//     paddingHorizontal: 10,
//     paddingTop: 40,
//     borderWidth: 2,
//       borderColor: 'red',
//       justifyContent: "center",
//            alignItems: "center",
//   },
//   carasol:{
//     height:300,
//     width:'80%',
//     borderWidth: 2,
//       borderColor: 'red',
//   },
//   carouselItem: {
//     borderRadius: 5,
//     backgroundColor: 'lightgray',
//     overflow: 'hidden',
//     borderWidth:2,
//     borderColor:'green',
//     marginTop:10,
//     width: '80%',
//   },
//   carouselImage: {
//     width: '100%',
//     height: '100%',
//   },
//   paginationContainer:{
//     // borderWidth:2,
//     // borderColor:'green',
//     // width:100,
    
//   },
//   paginationDot:{
//     // borderWidth:2,
//     // borderColor:'red',
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: 'rgba(0, 0, 0, 0.92)',
//   },
//   top:{
//     width:'100%',
//     height:50,
//     // borderWidth: 2,
//     borderBottomWidth:1,
//     justifyContent: 'space-between',
//            alignItems: "center",
//         flexDirection:'row' ,  
//     // /
//     padding:10
//   },
 
//   cardImage1:{
//     width:200,
//     height:52,
//     //  borderWidth: 2,
//     //  borderColor: 'red',
//      marginRight:65
//  },
//  backButton :{
//   width:24,
//   height:24,
//   opacity:0.8
  
//  },
//   cardContainer: {
//     // marginTop: 5,
//     borderWidth: 4,
//     borderColor: 'green',
//     // width:'100%'
//     // padding:15,
//     justifyContent:'center',
//     // alignItems:'center'
   
//   },
//   card: {
//     backgroundColor: 'white',
//     borderRadius: 10,
//     padding: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 15,
//     borderWidth: 2,
//     borderColor: 'red',
//     flexDirection: "column",
//     shadowColor: "black",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 5,
    
//   },
  
//   cardImage: {
//     width: '100%',
//     height: 200,
//     // marginRight: 15,
//     // borderWidth: 2,
//     // borderColor: 'red',
//   },
//   box1: {
//     flex: 1,
//     // borderWidth: 2,
//     // borderColor: 'red',
//     width:'100%',
//     padding:10
//   },
//   cat1: {
//     fontFamily: 'Inter-Medium',
//     fontSize: 18,
//     color: '#333',
//     // borderWidth: 2,
//     // borderColor: 'red',
//   },
//   catText: {
//     fontFamily: 'Inter-Regular',
//     fontSize: 14,
//     color: '#666',
//     marginTop: 5,
//     // borderWidth: 2,
//     // borderColor: 'red',
//   },
//   shadowContainer: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     height: 100, // Adjust this value as needed
//     backgroundColor: "rgba(238, 223, 210,0.3)", // Adjust the color and opacity as needed
//     zIndex: -1,
//   },
// });

// export default styles;
// const styles = StyleSheet.create({
//   topmost: {
//     flex: 1,
//     backgroundColor: "#ffffff",
//     borderWidth:2,
//     borderColor:'red',
//     justifyContent:'center',
//     alignItems:'center'
//   },
//   top: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 5,
//     // paddingTop: 50,
//     backgroundColor: "#fff",
//     // borderWidth:2,
//     // borderColor:'red',
//     marginTop:60,
//     borderBottomWidth:1,
//     width:'90%'
//   },
//   backButton: {
//     width: 40,
//     height: 40,
//     justifyContent: "center",
//     alignItems: "center",
//     // borderWidth:2,
//     // borderColor:'red'
//   },
//   // backbutton: {
//   //   // backgroundColor: "#F1F3F6",
//   //   borderRadius: 50,
//   //   width: 20,
//   //   height: 20,
//   //   justifyContent: "center",
//   //   alignItems: "center",
//   // },
//   backIcon: {
//     width: 10,
//     height: 20,
//     tintColor: "#000",
//   },
//   cardImage1: {
//     width: 180,
//     height: 52,
//     // borderWidth:2,
//     // borderColor:'red',
//     marginRight:80,
//   },
//   cardContainer: {
//     backgroundColor: "#ffffff",
//     paddingBottom: 20,
//       borderWidth:2,
//      borderColor:'blue',
//      marginTop:40,
//     //  flex:1,
//     //  justifyContent:'center',
//     //  alignItems:'center',
//      width:'80%',
//      padding:20
//   },
//   carasol: {
//     paddingHorizontal: 20,
//     paddingTop: 10,
//      borderWidth:2,
//     borderColor:'red',
//     width:'80%'
//   },
//   carouselItem: {
//     backgroundColor: "#ffffff",
//     borderRadius: 10,
//     overflow: "hidden",
//     shadowColor: "black",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 5,
//     width: "80%",
//   },
//   carouselImage: {
//     width: "80%",
//     height: 200,
//   },
//   paginationContainer: {
//     paddingTop: 10,
//     paddingBottom: 10,
//     alignItems: "center",
//   },
//   paginationDot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     marginHorizontal: 8,
//     backgroundColor: "#000",
//   },
//   paginationInactiveDot: {
//     backgroundColor: "#ccc",
//   },
//   card: {
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     overflow: "hidden",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.23,
//     shadowRadius: 2.62,
//     elevation: 4,
//     marginBottom: 20,
//   },
//   cardImage: {
//     width: "100%",
//     height: 150,
//   },
//   box1: {
//     padding: 15,
//   },
//   cat1: {
//     fontFamily: "Inter-Bold",
//     fontSize: 16,
//     color: "#333",
//     marginBottom: 5,
//   },
//   catText: {
//     fontFamily: "Inter-Regular",
//     fontSize: 14,
//     color: "#666",
//   },
// });

// export default styles;


const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain', // Change resizeMode to 'contain'
    justifyContent: 'center',
    // borderWidth: 2,
    // borderColor: 'red',
    // width:"70%"
    height:"100%",
   opacity:1
  },
  topmost: {
    flex: 1,
    // backgroundColor: '#fff',
    justifyContent:'center',
    // alignItems:'center',
    //  borderWidth: 2,
    // borderColor: 'red',
  },
  nav:{
    //   borderWidth:2,
    // borderColor:'red',
    width:"95%",
    height:40,
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:60,
    flexDirection:'row',
    borderBottomWidth:1,
    borderColor:'black',
    marginLeft:10
  },
  
  
  navlogo:{
    height:52,
    width:150,
    // borderWidth:2,
    // borderColor:'red',
    marginRight:90
  },
  navimage:{
    // borderWidth:2,
    // borderColor:'red',
    height:52,
    width:150,
  },
  boxslider:{
    // borderWidth:2,
    // borderColor:"red",
    height:375,
    width:350,
    borderRadius:10,
    // backgroundColor:'yellow'
    // marginTop:15,
    // marginBottom:20,
    padding:10
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius:10
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal:2
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    // paddingHorizontal: 20,
    marginTop:60,
    // borderWidth:2,
    borderColor:'black',
    width:'90%',
    height:40,
    // marginBottom:30,
    borderBottomWidth:1,
    
  },
  
  backIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  cardImage1: {
    width: 200,
    height: 52,
    // marginLeft:20,
    // borderWidth:2,
    // borderColor:'blue',\
    marginRight:58
  },
  Container: {
    padding: 20,
    // borderWidth:2,
    // borderColor:'red',
    // flex:1,
    alignItems:'center'
    
  },

  Cbox:{
    borderWidth:2,
    borderColor:'green',
    width:'95%',
    height:200,
    marginBottom:10,
    
  },
  cardbox: {
    marginBottom: 20,
    // borderWidth:2,
    // borderColor:'green',
    padding:10,
    width:'100%'
  },
  
  card: {
    flex:1,
    flexDirection: 'column',
    
    marginBottom: 15,
    backgroundColor: 'white',
    
    overflow: "hidden",
   
    borderRadius: 10,
   
    width:300,
    height:200,
    
    
  },
  cardImage: {
    width:"100%",
    height: '65%',
    marginRight: 15,
    resizeMode: 'contain',
    // borderWidth:2,
    // borderColor:'green',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    opacity:1
  },
  box1: {
    flex: 1,
    // borderWidth:4,
    // borderColor:'green',
    width:'100%',
    marginTop:10,
    backgroundColor:'transparent'
  },
  cat1: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 5,
    // borderWidth:2,
    // borderColor:'red',
    marginLeft:20,
    marginTop:5
  },
  catText: {
    fontSize: 10,
    color: '#333',
    // borderWidth:2,
    // borderColor:'red',

    marginLeft:20
  },
});

export default styles;


