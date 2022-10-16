/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import {FlattListMenuItem, menuItemsTemplate, HeaderTitle} from '../../index';
import {styles} from './HomeStyle';

export const HomeScreen = () => {
  return (
    <View style={(styles.components, styles.globalMargin)}>
      <FlatList
        data={menuItemsTemplate}
        renderItem={({item}) => <FlattListMenuItem {...item} />}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={HeaderTitle({title: 'Menu options'})}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      />
    </View>
  );
};
