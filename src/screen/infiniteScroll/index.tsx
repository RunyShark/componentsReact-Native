import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {HeaderTitle} from '../../index';
import {styles} from './infiniteStyle';

export const infiniteScrollScreen = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [numbers, setNumbers] = useState<number[]>([0, 1, 2, 3, 4, 5]);
  const renderItem = (item: number) => (
    <Text style={styles.textItem}>{item}</Text>
  );

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }
    setNumbers([...numbers, ...newArray]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={numbers}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={(item) => item.toString()}
        ListHeaderComponent={HeaderTitle({title: 'Infinite scroll'})}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};
