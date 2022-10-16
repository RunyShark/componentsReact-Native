import React from 'react';
import {Animated, View} from 'react-native';
import {useAnimate} from '../../index/index';
import {styles} from './AnimationStyle';

export const Animation02Screen = () => {
  const {panResponder, xy} = useAnimate();

  return (
    <View style={styles.animationContainer}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[xy.getLayout(), styles.blueBox]}
      />
    </View>
  );
};
