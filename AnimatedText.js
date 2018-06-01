import React from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'
import { withSelfMeasure } from './utils/selfMeasureBehavior'
import { compose } from 'recompose'
import buildTransform from './utils/buildTransform'

const AnimatedText = ({
  animationRange,
  onLayoutSetMeasurements,
  elementX,
  elementY,
  elementHeight,
  elementWidth
}) => {
  const animateText = buildTransform(
    animationRange,
    elementX,
    elementY,
    elementHeight,
    elementWidth,
    20,
    70,
    0.7
  )
  const animateOpacity = {
    opacity: animationRange.interpolate({
      inputRange: [0, 0.9, 1],
      outputRange: [1, 0, 1]
    })
  }

  const otherOpacityText = {
    opacity: animationRange.interpolate({
      inputRange: [0, 0.9, 1],
      outputRange: [1, 0, 0]
    })
  }
  return (
    <Animated.Text
      numOfLines={1}
      style={[styles.text, animateText, animateOpacity]}
      onLayout={event => onLayoutSetMeasurements(event)}
    >
      Abdelhalim Ahmed halim
    </Animated.Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    maxWidth: '90%',
    color: '#fff',
    fontWeight: 'bold',
    margin: 15,
    textAlign: 'left',
    // backgroundColor: 'red',
  }
})

const enhance = compose(withSelfMeasure)

export default enhance(AnimatedText)
