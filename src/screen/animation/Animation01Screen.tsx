import React from 'react';
import {Animated, Button, View} from 'react-native';
import {useAnimate} from '../../index/index';
import {styles} from './AnimationStyle';

export const Animation01Screen = () => {
  const {fadeIn, fadeOut, opacity, startMoving, position} = useAnimate();

  return (
    <View style={styles.animationContainer}>
      <Animated.View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...styles.purpleBox,
          marginBottom: 20,
          opacity,
          transform: [{translateY: position}],
        }}
      />
      <Button
        title="FadeIn"
        onPress={() => {
          fadeIn();
          startMoving({initPosition: -100});
        }}
      />
      <Button title="fadeOut" onPress={fadeOut} />
    </View>
  );
};
