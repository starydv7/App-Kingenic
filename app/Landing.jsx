import React from 'react';
import { View, Text, Button, ScrollView,Image ,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from "./landing";
import BottomNavigationBar from './BottomNavigationBar';
import { useFonts } from 'expo-font';
const Landing = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Return a loading indicator or fallback
  }
  // const navigation = useNavigation();
  const handleProduct = () => {
    // Handle the action when the "Get Started" button is pressed
    navigation.navigate('Product');
    console.log("Get Started button pressed");
  };
  // const handleNavigateBack = () => {
  //   navigation.goBack(); // Go back to the previous screen
  // };
  const handleCustomer=()=>{
    navigation.navigate("CustomerLogin");
  }


  return (
    <View style={styles.topmost}>
      <Text style={styles.hello}>Hello !</Text>
      <Text style={styles.hello1}>
      What would you like to {'\n'}explore today?

      </Text>
      <ScrollView contentContainerStyle={styles.cardContainer}>
        {/* Card 1 */}
        <TouchableOpacity onPress={handleProduct}>
        <View style={styles.card}>
        <Image
            source={require('../assets/images/product1.png')} 
            style={styles.cardImage}
          />
          <View style={styles.box1}>
          <Text style={styles.cat1}>Product Catalogue </Text>
          <Text style={styles.catText}>
            Explore our branded portfolio and private label offerings
          </Text>
          </View>
        </View>
        </TouchableOpacity>

        {/* Card 2 */}
        <TouchableOpacity onPress={handleCustomer}>
        <View style={styles.card}>
        <Image
            source={require('../assets/images/cat1.png')} 
            style={styles.cardImage}
          />
          <View style={styles.box1} >
          <Text style={styles.cat1}>Customer Portal </Text>
          <Text style={styles.catText}>
            Retrieve product documents and request support service
          </Text>
          </View>
          {/* <Text>Card 2</Text> */}
        </View>
        </TouchableOpacity>

        {/* Card 3 */}
        <View style={styles.card}>
        <Image
            source={require('../assets/images/cat2.png')} 
            style={styles.cardImage}
          />
          <View style={styles.box1}>
          <Text style={styles.cat1}>Learning Center </Text>
          <Text style={styles.catText}>
            Find out about the latest research, and how nutrition can help you stay healthy
          </Text>
          </View>
          {/* <Text>Card 3</Text> */}
        </View>
      </ScrollView>
     
        <BottomNavigationBar/>
      
    </View>
  );
};

export default Landing;
