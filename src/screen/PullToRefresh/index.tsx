import React, {useState} from 'react';
import {View, ScrollView, RefreshControl} from 'react-native';

import {HeaderTitle} from '../../index';

export const PullToRefreshScreen = () => {
  const [refreshing, setReFreshing] = useState(false);

  const onRefresh = () => {
    setReFreshing(true);

    setTimeout(() => {
      console.log('Finish');
      setReFreshing(false);
    }, 1500);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View>
        <HeaderTitle title="Pull to refresh" />
      </View>
    </ScrollView>
  );
};
