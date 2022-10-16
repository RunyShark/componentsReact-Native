import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from './SwitchStyle';
import {CustomSwitch, HeaderTitle} from '../../index';

interface PropState {
  isActive: boolean;
  isHungry: boolean;
  isHappy: boolean;
}

export const SwitchScreen = () => {
  // const [textValue, setTextValue] = useState('');
  const [state, setState] = useState<PropState>({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });
  const {isActive, isHungry, isHappy} = state;

  const handelChange = (value: boolean, field: keyof typeof state) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return (
    <View style={styles.container}>
      <HeaderTitle title={'Switches'} />

      <View>
        <Text style={styles.switchText}>isActive</Text>
        <CustomSwitch
          isOn={isActive}
          onChange={(value) => handelChange(value, 'isActive')}
        />
      </View>

      <View>
        <Text style={styles.switchText}>isHungry</Text>
        <CustomSwitch
          isOn={isHungry}
          onChange={(value) => handelChange(value, 'isHungry')}
        />
      </View>

      <View>
        <Text style={styles.switchText}>isHappy</Text>
        <CustomSwitch
          isOn={isHappy}
          onChange={(value) => handelChange(value, 'isHappy')}
        />
      </View>

      <Text style={styles.switchText}>{JSON.stringify(state, null, 5)}</Text>
    </View>
  );
};
