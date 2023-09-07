
import { StyleSheet, Dimensions } from 'react-native';



 const windowWidth = Dimensions.get('window').width;
 const windowHeight = Dimensions.get('window').height;

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
  // nav:{
  //   //   borderWidth:2,
  //   // borderColor:'red',
  //   width:"95%",
  //   height:40,
  //   justifyContent:'space-between',
  //   alignItems:'center',
  //   marginTop:60,
  //   flexDirection:'row',
  //   borderBottomWidth:1,
  //   borderColor:'black',
  //   marginLeft:10
  // },
  nav: {
    width: '95%',
    height: windowHeight * 0.06,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: windowHeight * 0.05,
    flexDirection: 'row',
    borderBottomWidth: 1,
    marginLeft: windowWidth * 0.05,
  },
  
  
  navlogo:{
    // height:52,
    // width:150,
    // // borderWidth:2,
    // // borderColor:'red',
    // marginRight:90
    // height: windowHeight * 0.08,
    // width: windowWidth * 0.35,
    // marginRight: windowWidth * 0.3,
    flex: 1, // Add flex property to center content
  justifyContent: 'center', // Center vertically
  alignItems: 'center', // Center horizontally
  height: windowHeight * 0.08,
  width: windowWidth * 0.35,
  marginRight: windowWidth * 0.1,
  },
  navimage:{
    // borderWidth:2,
    // borderColor:'red',
    // height:52,
    // width:150,
    height: windowHeight * 0.07,
    width: windowWidth * 0.35,
  },
  boxslider:{
    // borderWidth:2,
    // borderColor:"red",
    height: windowHeight * 0.5,
    width: windowWidth * 0.9,
    // height:375,
    // width:350,
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
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent:'space-between',
    // // paddingHorizontal: 20,
    // marginTop:60,
    // // borderWidth:2,
    // borderColor:'black',
    // width:'90%',
    // height:40,
    // // marginBottom:30,
    // borderBottomWidth:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth * 0.03, // Adjust padding based on window width
    marginTop: windowHeight * 0.05,
    borderColor: 'black',
    width: '90%',
    height: windowHeight * 0.04, // Adjust height based on window height
    borderBottomWidth: 1,
    alignSelf: 'center', // Center horizontally within its container
    
  },
  
  backIcon: {
    // width: 20,
    // height: 20,
    // resizeMode: "contain",
    width: windowWidth * 0.03, // Adjust width based on window width
    height: windowWidth * 0.03, // Adjust height based on window width (for a square icon)
    resizeMode: "contain",
  },
  cardImage1: {
    // width: 200,
    // height: 52,
    // // marginLeft:20,
    // // borderWidth:2,
    // // borderColor:'blue',\
    // marginRight:58
    width: windowWidth * 0.35, // Adjust width based on window width
    height: windowHeight * 0.08, // Adjust height based on window height
    marginRight: windowWidth * 0.1, // Adjust margin right based on window width
  },
  Container: {
    // padding: 20,
    // // borderWidth:2,
    // // borderColor:'red',
    // // flex:1,
    // alignItems:'center'
    padding: windowWidth * 0.05, // Adjust padding based on window width
    alignItems: 'center',
  },

  Cbox:{
    // borderWidth:2,
    // borderColor:'green',
    // width:'95%',
    // height:200,
    // marginBottom:10,
    borderWidth: 2,
    borderColor: 'green',
    width: '95%', // Adjust width based on the container's width
    height: windowHeight * 0.2, // Adjust height based on window height
    marginBottom: windowHeight * 0.02, // Adjust margin based on window height
  },
  cardbox: {
    // marginBottom: 20,
    // marginBottom: windowHeight * 0.02,
    // // borderWidth:2,
    // // borderColor:'green',
    // padding:10,
    // width:'100%'
    marginBottom: windowHeight * 0.02, // Adjust margin based on window height
  padding: windowWidth * 0.03, // Adjust padding based on window width
  width: '100%', // Make it take up 100% of the container's width
  },
  card: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: windowHeight * 0.015, // Adjust margin based on window height
    width: windowWidth * 0.85, // Adjust width based on window width
    height: windowHeight * 0.3, // Adjust height based on window height
    backgroundColor: 'white',
    overflow: 'hidden',
    borderRadius: 10,
  },
  // card: {
  //   flex:1,
  //   flexDirection: 'column',
  //   marginBottom: windowHeight * 0.015,
  //   width: windowWidth * 0.85,
  //   height: windowHeight * 0.3,
  //   // marginBottom: 15,
  //   backgroundColor: 'white',
    
  //   overflow: "hidden",
   
  //   borderRadius: 10,
   
  //   // width:300,
  //   // height:200,
    
    
  // },
  cardImage: {
    width:"100%",
    height: '65%',
    marginRight: windowWidth * 0.02,
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
    marginTop: windowHeight * 0.01,
    width:'100%',
    // marginTop:10,
    backgroundColor:'transparent'
  },
  cat1: {
    //  fontSize: 15,
    //  fontSize: windowWidth * 0.3, 
    // fontWeight: 'bold',
    // marginBottom: 5,
    // fontSize: windowWidth * 0.03,
    // marginBottom: windowHeight * 0.005,
    // marginTop: windowHeight * 0.005,
    // // borderWidth:2,
    // // borderColor:'red',
    // marginLeft:20,
    // marginTop:5
    fontSize: windowWidth * 0.05, // Adjust font size based on window width
    fontWeight: 'bold',
    marginBottom: windowHeight * 0.005, // Adjust margin bottom based on window height
    marginTop: windowHeight * 0.005, // Adjust margin top based on window height
    marginLeft: windowWidth * 0.05, // Adjust margin left based on window width
  },
  catText: {
    //  fontSize: 10,
    // color: '#333',
    // fontSize: windowWidth * 0.02,
    // // borderWidth:2,
    // // borderColor:'red',

    // marginLeft:20
    fontSize: windowWidth * 0.025, // Adjust font size based on window width
    color: '#333',
    marginLeft: windowWidth * 0.05, // Adjust margin left based on window width
    opacity: 0.7,
  },
});

export default styles;


