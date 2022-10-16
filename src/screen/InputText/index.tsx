import React, {useState} from 'react';
import {TextInput, KeyboardAvoidingView, Platform, View} from 'react-native';
import {styles} from './InputTextStyle';
import {HeaderTitle} from '../../index';
import {ScrollView} from 'react-native-gesture-handler';

interface stateProps {
  name: string;
  lastName: string;
  direction: string;
  phone: string;
}

export const InputTextScreen = () => {
  const [text, onChangeText] = useState<stateProps>({
    name: '',
    lastName: '',
    direction: '',
    phone: '',
  });

  const {direction, lastName, name, phone} = text;

  const onChange = (value: string, field: keyof typeof text) => {
    onChangeText({...text, [field]: value});
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <HeaderTitle title={'Input Text'} />
      <ScrollView>
        <TextInput
          style={styles.input}
          onChangeText={(value) => onChange(value, 'name')}
          value={name}
          placeholder="Name"
          autoCorrect={false}
          autoCapitalize="words"
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => onChange(value, 'lastName')}
          value={lastName}
          placeholder="LastName"
          autoCorrect={false}
          autoCapitalize="words"
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => onChange(value, 'direction')}
          value={direction}
          placeholder="direction"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => onChange(value, 'phone')}
          value={phone}
          placeholder="Phone"
          autoCapitalize="none"
          keyboardType="phone-pad"
        />
        <View style={styles.viewStyle} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
