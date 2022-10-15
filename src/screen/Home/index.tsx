import React from 'react';
import {Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {FlattListMenuItem, MenuItem} from '../../index';
import {styles} from './HomeStyle';

const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation101Screen',
  },
];

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  const renderListHeader = () => (
    <View style={{marginTop: top + 20, marginBottom: 20}}>
      <Text style={styles.title}>Options menu</Text>
    </View>
  );

  const itemSeparator = () => <View style={styles.itemSeparator} />;

  return (
    <View style={(styles.componente, styles.globalMargin)}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlattListMenuItem {...item} />}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={renderListHeader}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};
