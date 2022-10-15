import React from 'react';
import {Text, View} from 'react-native';
import {MenuItem} from '../../index';

interface PropsFlatList extends MenuItem {}

export const FlattListMenuItem = ({name, icon}: PropsFlatList) => {
  return (
    <View>
      <Text>
        {name} - {icon}
      </Text>
    </View>
  );
};
