import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  topmost: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    // borderWidth:2,
    // borderColor:'red'
  },
  hello: {
    fontSize: 54,
    fontWeight: "bold",
    color: "black",
    position: "absolute",
    top: 55,
    left: 20,
    fontWeight: 700,
    // color: "#666",
    fontFamily:"Inter-Regular",
    // borderWidth:2,
    // borderColor:'red'
  },
  hello1: {
    marginTop: 140,
    marginBottom: 5,
    width: 320,
    height: 74,
    fontSize: 24,
    lineHeight: 30,
    marginLeft: 10,
    textAlign: "left",
    fontWeight: 400,
    color: "#666",
    fontFamily:"Inter-Regular",
    // borderWidth:2,
    // borderColor:'red'
  },
  cardContainer: {
    marginTop: 0,
    width: "100%",
    flexDirection: "column",
    borderRadius: 10,
    // borderWidth:2,
    // borderColor:'green'
  },
  card: {
    width: 340,
    height: 350,
    // top: -5,
    justifyContent: "center",
    alignItems: "center",

    marginHorizontal: 0,
    marginVertical: 10,
    borderRadius: 10,

    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    // borderWidth:2,
    // borderColor:'green'
  },
  cardImage: {
    width: "100%",
    height: "60%",
    // resizeMode: 'cover',
    // borderWidth: 1,
    //  borderColor: 'red',
    top: -30,
    borderRadius: 10,
    
  },
  box1: {
    width: "85%",
    // borderWidth: 5,
    // borderColor: 'green',
    display: "flex",
    flexDirection: "column",
    gap:10,
    // top: -15,
  },
  cat1: {
    fontSize: 25,
    fontWeight: 700,
    lineHeight: 24.8,
    top: 0,
    textAlign: "left",
    width: "100%",
    fontWeight: 600,
    // color: "#666",
    fontFamily:"Inter-Regular",
    // borderWidth:2,
    // borderColor:'red'
  },
  

  catText: {
    fontSize: 15,
    fontWeight: 700,
    lineHeight: 21.8,
    // top:15,
    textAlign: "left",
    // marginLeft:3,
    // borderWidth: 2,
    // borderColor: 'red',
    width: "100%",
    fontWeight: 400,
    color: "#666",
    fontFamily:"Inter-Regular",
    
  },
  // catText1:{
  //   fontSize:14,
  //   fontWeight:700,
  //   lineHeight:21.8,
  //   top:10,
  //   left:10,
  //   borderWidth: 5,
  //   borderColor: 'red',
  // }
});

export default styles;
