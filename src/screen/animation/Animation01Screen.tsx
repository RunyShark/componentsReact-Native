import React, {useRef} from 'react';
import {Animated, Button, View, Easing} from 'react-native';
import {styles} from './AnimationStyle';

export const Animation01Screen = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const top = useRef(new Animated.Value(-100)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(top, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
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
          opacity,
          transform: [{translateY: top}],
        }}
      />
      <Button title="FadeIn" onPress={fadeIn} />
      <Button title="fadeOut" onPress={fadeOut} />
    </View>
  );
};
