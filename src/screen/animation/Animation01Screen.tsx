import React, {useRef} from 'react';
import {Animated, View} from 'react-native';
import {styles} from './AnimationStyle';

export const Animation01Screen = () => {
  const opacity = useRef(new Animated.Value(0.4)).current;

  return (
    <View style={styles.animationOneContainer}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity: opacity,
        }}
      />
    </View>
  );
};
