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
   
  },
  topmost: {
    flex: 1,
    // backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth:2,
    // borderColor:"red"
  },
  nav:{
    //   borderWidth:2,
    // borderColor:'red',
    width:"90%",
    height:40,
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:60,
    flexDirection:'row',
    borderBottomWidth:1,
    borderColor:'black'
  },
  navtext:{
    //  borderWidth:2,
    // borderColor:'red',
    // fontSize:16,
    // marginRight:70,
    // fontWeight:700,
    // color:'black'
    fontSize: windowWidth * 0.04, // Adjust the font size as a percentage of the screen width
  marginRight: windowWidth * 0.235, // Adjust the margin as a percentage of the screen width
  fontWeight: '700', // Use string '700' for fontWeight
  color: 'black',
  },
  boxslider:{
    // borderWidth:2,
    // borderColor:"red",
    height:240,
    width:350,
    borderRadius:10,
    // backgroundColor:'yellow'
    marginTop:15,
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
    paddingHorizontal:10
  },
  
  
  backButton: {
    // padding: 10,
    // borderWidth:2,
    // borderColor:"red",
    // marginRight:40
  },
  backbutton: {
    // width: 30,
    // height: 30,
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderWidth:2,
    // borderColor:"red",
    width: windowWidth * 0.043, // Adjust the width as a percentage of the screen width
    height: windowWidth * 0.04, // Adjust the height as a percentage of the screen width
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  cardContainer: {
    
    justifyContent:'center',
    // alignItems:'center',
    // borderWidth:2,
    // borderColor:"blue",
     padding: 10,
    
  },
 
 
  
 
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 5,
    // borderWidth:2,
    // borderColor:"green",
    gap:20,
    height:170,
    // padding:16,
    flex:1,
    justifyContent:"center",
    alignItems:'center'
  },
  card: {
    
    backgroundColor:'white',
    // padding: 16,
    width:140,
    height:160,
    opacity:1,
    
    justifyContent: 'center',
    alignItems: 'center',
    
    borderRadius:12,
    // padding:10,
    // borderWidth:2,
    // borderColor:'blue',

     backgroundColor: 'white', // Set the background color to white
    shadowColor: 'rgba(0, 0, 0, 0.5)', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.8, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 2, // Elevation for Android
    padding: 16, // Adjust padding as needed
    
  },
  imgcard: {
    width:123,
    height:107.5,
    borderRadius:12,
    // backgroundColor:"#DEDEDE",
    // borderWidth:2,
    //     borderColor:"green",
        flex:1,
        // justifyContent:'center',
        alignItems:'center',
        
  },
  cardImage:{
     width:120,
     height:'100%',
    //  borderWidth:2,
    //  borderColor:"green",
     borderRadius:12,
  },
  cardTitle: {
    fontSize: 13,
        fontWeight: 600,
        color: "black",
        fontFamily:"Inter-Regular",
        // borderWidth:2,
        // borderColor:"green"
        // marginTop:5
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



