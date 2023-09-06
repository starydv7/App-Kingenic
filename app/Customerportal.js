
import { StyleSheet } from 'react-native';




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
    marginLeft:9
    
  },
  navtext:{
    //  borderWidth:2,
    // borderColor:'red',
    fontSize:16,
    marginRight:75,
    fontWeight:600,
    color:'black',
    // width:143,
    // height:16
  
  },
 
  
  // backButton: {
  //   padding: 10,
  //   // borderWidth:2,
  //   // borderColor:'blue',
  // },
  backIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
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
 
  cardImage1: {
    width: 200,
    height: 52,
    // marginLeft:20,
    // borderWidth:2,
    // borderColor:'blue',\
    marginRight:58
  },
  Container: {
    padding: 10,
    // borderWidth:2,
    // borderColor:'red',
    // flex:1,
    alignItems:'center'
    
  },

 
  cardbox: {
    marginBottom: 10,
    marginTop:20,
    // borderWidth:2,
    // borderColor:'green',
    // padding:10,
    // width:'100%'
    alignItems:'center',
    // justifyContent:'center'
   
  //  flex:1,
   height:32,
   width:302,
  },
  
  cardbox1:{
    // borderWidth:2,
    // borderColor:'red',
    fontSize:15,
    fontWeight:600,
    
  //  alignItems:'center',
  lineHeight:24,
  textAlign:'center'
    
  },
  
  cardbox2:{
    // borderWidth:2,
    // borderColor:'green',
    height:48,
    width:345,
    alignItems:"center",
   
  },
  cardbox3:{
    // borderWidth:2,
    // borderColor:'green',
    fontSize:12,
    fontWeight:400,
    lineHeight:24,
    textAlign:'center'
  },
  button:{
    //   borderWidth:2,
    // borderColor:'green',
    marginTop:20,
    height:38,
    width:165,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#000000',
    borderRadius:8
  },
  buttonText:{
    fontSize:14,
    fontWeight:600,
    color:'white',
   
  },
});

export default styles;


