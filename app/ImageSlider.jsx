import React from 'react';
import { Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { StyleSheet } from 'react-native';
const ImageSlider = () => {
  return (
    <Swiper
      style={styles.sliderContainer} // Use the style property
      showsPagination={true}
      autoplay={true}
      loop={true}
    >
      <Image
        source={require('../assets/images/product1.png')}
        style={styles.sliderImage}
      />
      <Image
        source={require('../assets/images/cat1.png')}
        style={styles.sliderImage}
      />
      <Image
        source={require('../assets/images/cat2.png')}
        style={styles.sliderImage}
      />
    </Swiper>
  );
};
const styles = StyleSheet.create({
    sliderContainer: {
      height: 200, 
      
      // borderWidth:2,
      // borderColor:'red',
      // Adjust the height of the slider container
      backgroundColor:"white",
      // borderRadius:40,
    },
    sliderImage: {
      width: '100%',
      height: '100%',
    //   resizeMode: 'cover',
      // borderWidth:0.5,
      // borderColor:'grey',
    // borderRadius:40,
    
   
    },
  });

export default ImageSlider;
