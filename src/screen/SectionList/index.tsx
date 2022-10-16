import React from 'react';
import {SafeAreaView, SectionList, Text} from 'react-native';
import {styles} from './SectionListStyle';
import {DATA, HeaderTitle} from '../../index';

export const SectionListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <HeaderTitle title={item} />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
};
