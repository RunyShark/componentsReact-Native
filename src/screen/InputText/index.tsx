import React from 'react';
import {
  TextInput,
  KeyboardAvoidingView,
  Platform,
  View,
  Keyboard,
} from 'react-native';
import {styles} from './InputTextStyle';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {HeaderTitle, useForm} from '../../index';
interface stateProps {
  name: string;
  lastName: string;
  direction: string;
  phone: string;
}

export const InputTextScreen = () => {
  const {form, onChange} = useForm<stateProps>({
    name: '',
    lastName: '',
    direction: '',
    phone: '',
  });

  const {direction, lastName, name, phone} = form;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <HeaderTitle title={'Input Text'} />
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
