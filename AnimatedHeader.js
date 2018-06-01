import React from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'
import AnimatedText from './AnimatedText'
import AnimatedotherText from './AnimatedotherText'
import AnimatedImage from './AnimatedImage'
import { LinearGradient } from 'expo'

const HeaderBackground = ({ animationRange }) => {
  const animateHeader = {
    transform: [
      {
        translateY: animationRange.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -100]
        })
      }
    ]
  }

  return <Animated.View style={[styles.headerBackground, animateHeader]} >
  <LinearGradient colors={['#5871B5', '#935CAE']} style={{flex: 1, width: '100%'}}/>
  </Animated.View>
}

const AnimatedHeader = ({ animationRange }) => (
  <View style={styles.container} pointerEvents='none'>
    <HeaderBackground animationRange={animationRange} />
    <Animated.View style={styles.container} pointerEvents='none'>
      <View style={styles.containerText}>
      <AnimatedText animationRange={animationRange} />
      <AnimatedotherText animationRange={animationRange} />
      </View>
      <AnimatedImage animationRange={animationRange} />
    </Animated.View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 0,
    zIndex: 2,
    height: 200,
    width: '100%',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerText: {
    flex: 1,
    zIndex: 2,
    height: 200,
    width: '75%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  headerBackground: {
    position: 'absolute',
    flex: 0,
    height: 200,
    width: '100%',
    backgroundColor: 'transparent',
    zIndex: 2
  }
})

export default AnimatedHeader
