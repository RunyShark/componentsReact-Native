/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {MenuItem} from '../../index';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './FlattListMenuItemStyle';
import {useNavigation} from '@react-navigation/native';

interface PropsFlatList extends MenuItem {}

export const FlattListMenuItem = ({component, name, icon}: PropsFlatList) => {
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => navigate(component)}>
      <View style={styles.container}>
        <Icon name={icon} color="gray" size={23} />
        <Text style={styles.itemText}>{name}</Text>
        <View style={{flex: 1}} />
        <Icon name="chevron-forward-outline" color="gray" size={23} />
      </View>
    </TouchableOpacity>
  );
};
