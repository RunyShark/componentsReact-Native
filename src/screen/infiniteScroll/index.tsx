import React from 'react';
import {FlatList, View} from 'react-native';
import {FlattListMenuItem, Numbers, HeaderTitle} from '../../index';
import {styles} from './infiniteStyle';

export const infiniteScrollScreen = () => (
  <View>
    <FlatList
      data={Numbers}
      renderItem={({item}) => <FlattListMenuItem {...item} />}
      keyExtractor={(item) => item.name}
      ListHeaderComponent={HeaderTitle({title: 'Menu options'})}
      ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
    />
  </View>
);
