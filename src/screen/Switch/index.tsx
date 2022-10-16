import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from './SwitchStyle';
import {CustomSwitch, HeaderTitle} from '../../index';

export const SwitchScreen = () => {
  // const [textValue, setTextValue] = useState('');
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  return (
    <View style={styles.container}>
      <HeaderTitle title={'Switches'} />

      <View>
        <Text style={styles.switchText}>isActive</Text>
        <CustomSwitch
          isOn={false}
          onChange={(e) =>
            setState({
              ...state,
              isActive: e,
            })
          }
        />
      </View>

      <View>
        <Text style={styles.switchText}>isHungry</Text>
        <CustomSwitch
          isOn={false}
          onChange={(e) =>
            setState({
              ...state,
              isHungry: e,
            })
          }
        />
      </View>

      <View>
        <Text style={styles.switchText}>isHappy</Text>
        <CustomSwitch
          isOn={false}
          onChange={(e) =>
            setState({
              ...state,
              isHappy: e,
            })
          }
        />
      </View>

      <Text style={styles.switchText}>{JSON.stringify(state, null, 5)}</Text>
    </View>
  );
};
