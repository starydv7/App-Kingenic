
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  topmost: {
    flex: 1,
    backgroundColor: "#fff",
    // padding: 16,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth:2,
    // borderColor:'red'
  },
  hello1: {
    fontFamily: 'Inter-Regular',
    marginTop: 50,
    marginBottom: 20,
    width: '100%',
    height: 50,
    fontSize: 13,
    lineHeight: 20,
    fontWeight: 600,
    // marginLeft: 10,
    textAlign: "center",
    padding:5,
    // borderWidth:2,
    // borderColor:'red'
  },
  searchContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth:2,
    // borderColor:'red'
  },
  searchIcon: {
    position: "absolute",
    left: 50,
    zIndex: 1,
    width: 25,
    height: 25,
  },
  searchInput: {
    width: "90%",
    height: 45,
    borderWidth: 1,
    borderColor: "#ccc",
    // paddingHorizontal: 10,
    // marginRight: 5,
    borderRadius: 30,
    fontSize: 17,
    lineHeight: 20.57,
    opacity: 0.5,
    textAlign: "center",
    fontFamily: 'Inter-Regular',
    // borderWidth:2,
    // borderColor:'red'
  },
  cardContainer: {
    paddingBottom: 24,

    marginTop: 20,
    width: "100%",
    padding: 10,
    //  borderWidth:2,
    //  borderColor:'red'
  },
  card1: {
    marginBottom: 16,
    overflow: "hidden",
  },
  cardImage1: {
    width: "100%",
    height: 180,
  },
  card: {
    borderRadius: 8,
    marginBottom: 16,
    // width:350,
     width:'100%',
   
    // left:-10,
    overflow: "hidden",
    padding: 5,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  cardImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  cat2: {
    fontSize: 24,
    fontWeight: 600,
    marginBottom: 8,
    fontFamily: 'Inter-Regular',
      // borderWidth:2,
      // borderColor:'red',
      marginLeft:12
  },
  catText: {
    fontSize: 15,
    fontWeight: 400,
    color: "#666",
    fontFamily: 'Inter-Regular',
      // borderWidth:2,
      // borderColor:'red',
      marginLeft:12
  },
  cat3: {
    fontSize: 24,
    fontWeight: 600,
    marginBottom: 8,
    fontFamily:"Inter-Regular",
    // borderWidth:2,
    // borderColor:'red',
    marginLeft:12
  },
  catText3: {
    fontSize: 14,
    fontWeight: 400,
    color: "#666",
    fontFamily:"Inter-Regular",
    // borderWidth:2,
    // borderColor:'red',
    marginLeft:12
  },
  seeMore: {
    color: "#007bff",
    marginTop: 5,
    marginBottom:5,
    fontFamily: 'Inter-Regular',
  },
  backIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    left:12,
    top:15,
  },
  backbutton:{
    width:50,
    height:50,
    borderRadius:20,
    // borderWidth:1,
    // borderColor:"grey",
    left:-170,
    top:48,
  }
});

export default styles;

