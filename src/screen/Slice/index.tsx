import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HeaderTitle, items, Slide} from '../../index';
import {Dimensions, Text} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');
export const SliceScreen = () => {
  const renderItem = ({desc}: Slide) => <Text>{desc}</Text>;
  return (
    <SafeAreaView>
      <HeaderTitle title="Slice" />
      <Carousel
        data={items}
        renderItem={({item}: {item: Slide}) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
      />
    </SafeAreaView>
  );
};
