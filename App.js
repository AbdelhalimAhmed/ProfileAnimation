import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Animated } from 'react-native';
import {LinearGradient} from 'expo'
HEADER_MAX_HEIGHT = 250
HEADER_MIN_HEIGHT = 70
PROFILE_IMAGE_MAX_HEIGHT = 80
PROFILE_IMAGE_MIN_HEIGHT = 40

export default class App extends React.Component {

  constructor(props) {
    super(props)
      this.state = {
        scrollY: new Animated.Value(0)
      }
    
  }
  render() {

    const headerHeight = this.state.scrollY.interpolate({
      inputRange:[0, HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp'
    })
    const profileImageHeight = this.state.scrollY.interpolate({
      inputRange:[0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT],
      extrapolate: 'clamp'
    })
    const profileImageMarginTop = this.state.scrollY.interpolate({
      inputRange:[0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT, HEADER_MAX_HEIGHT],
      extrapolate: 'clamp'
    })
    const profileImageZIndex = this.state.scrollY.interpolate({
      inputRange:[0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [0,1],
      extrapolate: 'clamp'
    })
    // const headerTitleBottom = this.state.scrollY.interpolate({
    //   inputRange:[0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    //   outputRange: [-20,1],
    //   extrapolate: 'clamp'
    // })

    const holderTextOpacity = this.state.scrollY.interpolate({
      inputRange: [
        0, 
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT, 
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT  + PROFILE_IMAGE_MIN_HEIGHT,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + PROFILE_IMAGE_MIN_HEIGHT + 20
      ],
        
      outputRange: [0,0,0,1]
    })
    const headerOpacity = this.state.scrollY.interpolate({
      inputRange: [
        0, 
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT, 
      ],
        
      outputRange: [0,1]
    })
    return (
      <View style={styles.container}>
        <Animated.View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: HEADER_MIN_HEIGHT,
          backgroundColor: 'lightskyblue',
          opacity: headerOpacity,
          zIndex: 1,
          alignItems: 'center'
        }}>
          <LinearGradient colors={['#935CAE','#5871B5']} style={styles.linearGradient}/>
          {/* <Animated.View style={{position: 'absolute', bottom: 0}}> */}
            <Animated.Text style={{fontSize: 14, fontWeight: 'bold', position: 'absolute', top: HEADER_MIN_HEIGHT /2,  opacity: holderTextOpacity}}>Abdelhalim Ahmed</Animated.Text>
          {/* </Animated.View> */}
        </Animated.View>
        <LinearGradient colors={['#5871B5', '#935CAE']} style={styles.linearGradient}>
          <ScrollView 
            scrollEventThrottle={16}
            style={[styles.container,]}
            contentContainerStyle={{flexDirection: 'row', alignContent: 'center'}}
            onScroll={Animated.event([{nativeEvent: {contentOffset: { y: this.state.scrollY }}}])}
            >
            
            <Animated.View style={{
              height: profileImageHeight,
              width: profileImageHeight,
              borderRadius: PROFILE_IMAGE_MAX_HEIGHT/2,
              borderColor: 'white',
              borderWidth: 3,
              overflow: 'hidden',
              marginTop: profileImageMarginTop,
              marginHorizontal: 10,
            }}>
              <Image source={require('./assets/test.jpg')} style={styles.imageStyle}/>
            </Animated.View> 

            <Animated.View style={{marginTop: profileImageMarginTop}}>
              <Text style={styles.textStyle}>Abdelhalim Ahmed</Text>
              <Text style={styles.jobTextStyle}>React-Native Developer</Text>
            </Animated.View>
            <View style={{height: 1000}}/>
          </ScrollView>
          </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  linearGradient: {
    flex: 1,
    width: '100%'
  },
  imageStyle: {
    flex: 1,
    width: null,
    height: null
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 10,
  },
  jobTextStyle: {
    fontWeight: 'normal',
    fontSize: 18,
    paddingHorizontal: 10,
  }
});
