import React from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'
import { withSelfMeasure } from './utils/selfMeasureBehavior'
import { compose } from 'recompose'
import buildTransform from './utils/buildTransform'

const AnimatedImage = ({animationRange, onLayoutSetMeasurements, elementX, elementY, elementHeight, elementWidth}) => {
  const animateImage = buildTransform( animationRange, elementX, elementY, elementHeight, elementWidth, 20, 40, 0.3)
  return (
    <Animated.Image
      source={require('./img/test.jpg')}
      style={[styles.image, animateImage]}
      onLayout={event => onLayoutSetMeasurements(event)}
    />
  )
}

const styles = StyleSheet.create({
  image: {
    marginTop: 20,
    width: 100,
    borderRadius: 50,
    height: 100,
    // backgroundColor: 'red',
    marginHorizontal: 20
  }
})

const enhance = compose(withSelfMeasure)

export default enhance(AnimatedImage)
