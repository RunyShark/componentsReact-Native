import React, {useRef} from 'react';
import {Animated, Button, View} from 'react-native';
import {styles} from './AnimationStyle';

export const Animation01Screen = () => {
  const opacity = useRef(new Animated.Value(0.4)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0.4,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.animationOneContainer}>
      <Animated.View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...styles.purpleBox,
          marginBottom: 20,
          opacity: opacity,
        }}
      />
      <Button title="FadeIn" onPress={fadeIn} />
      <Button title="fadeOut" onPress={fadeOut} />
    </View>
  );
};
