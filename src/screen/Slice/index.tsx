/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {SafeAreaView} from 'react-native-safe-area-context';
import {items, Slide} from '../../index';
import {Dimensions, Image, Text, View} from 'react-native';
import {styles} from './SliceStyle';

const {width: screenWidth} = Dimensions.get('window');
export const SliceScreen = () => {
  const renderItem = ({desc, img, title}: Slide) => (
    <View
      style={{
        flex: 1,
        borderRadius: 5,
        backgroundColor: 'white',
        padding: 80,
      }}>
      <Image source={img} style={styles.imageStyle} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{desc}</Text>
    </View>
  );
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <Carousel
        data={items}
        renderItem={({item}: {item: Slide}) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
      />
    </SafeAreaView>
  );
};
