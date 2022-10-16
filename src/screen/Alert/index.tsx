import React from 'react';
import {View, Button} from 'react-native';
import {useAlert} from '../../index';
import {styles} from './AlertStyle';

export const AlertScreen = () => {
  const {createThreeButtonAlert, createTwoButtonAlert} = useAlert({});

  return (
    <View style={styles.container}>
      <Button title={'2-Button Alert'} onPress={createTwoButtonAlert} />
      <Button title={'3-Button Alert'} onPress={createThreeButtonAlert} />
    </View>
  );
};
