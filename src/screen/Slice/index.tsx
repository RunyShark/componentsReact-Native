/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {SafeAreaView} from 'react-native-safe-area-context';
import {items, Slide} from '../../index';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './SliceStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const {width: screenWidth} = Dimensions.get('window');
export const SliceScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const {navigate} = useNavigation();

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
        onSnapToItem={(index) => {
          setActiveIndex(index);
        }}
      />
      <View style={styles.paginationContainer}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={styles.paginationStyle}
        />
        <TouchableOpacity
          style={{
            ...styles.touchable,
            display: activeIndex === 2 ? 'flex' : 'none',
          }}
          onPress={() => navigate('HomeScreen')}
          activeOpacity={0.8}>
          <Text style={styles.textIcon}>Enter</Text>
          <Icon name="chevron-forward-outline" color="white" size={20} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
