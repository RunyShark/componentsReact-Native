/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {HeaderTitle, FadeInImage} from '../../index';
import {styles} from './infiniteStyle';

export const infiniteScrollScreen = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [numbers, setNumbers] = useState<number[]>([0, 1, 2, 3, 4, 5]);
  const renderItem = (item: number) => (
    <FadeInImage uri={`https://picsum.photos/id/${item}/500/400`} />
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
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={40} color="#5856D6" />
          </View>
        )}
      />
    </View>
  );
};
