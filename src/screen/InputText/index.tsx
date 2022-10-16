import React, {useState} from 'react';
import {SafeAreaView, TextInput} from 'react-native';
import {styles} from './InputTextStyle';
import {HeaderTitle} from '../../index';

export const InputTextScreen = () => {
  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] = useState(undefined);

  return (
    <SafeAreaView>
      <HeaderTitle title={'Input Text'} />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Useless Text"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};
