import {useRef} from 'react';
import {Animated, Easing, PanResponder} from 'react-native';

interface startMovingProps {
  initPosition?: number;
  duration?: number;
  bounce?: boolean;
}

export const useAnimate = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;
  const xy = useRef(new Animated.ValueXY()).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const startMoving = ({
    initPosition = -100,
    duration = 300,
  }: startMovingProps) => {
    position.setValue(initPosition);

    Animated.timing(position, {
      toValue: 0,
      duration: duration,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: xy.x, // x,y are Animated.Value
        dy: xy.y,
      },
    ]),
    onPanResponderRelease: () => {
      Animated.spring(
        xy, // Auto-multiplexed
        {
          toValue: {x: 0, y: 0},
          useNativeDriver: false,
        }, // Back to zero
      ).start();
    },
  });

  return {
    fadeIn,
    fadeOut,
    opacity,
    xy,
    startMoving,
    position,
    panResponder,
  };
};
