/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Animated, View} from 'react-native';
import {useAnimate} from '../../index';
interface PropsFadeInImage {
  uri: string;
}

export const FadeInImage = ({uri}: PropsFadeInImage) => {
  const {opacity, fadeIn} = useAnimate();

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Animated.Image
        source={{uri}}
        onLoadEnd={fadeIn}
        style={{width: '100%', height: 400, opacity}}
      />
    </View>
  );
};
