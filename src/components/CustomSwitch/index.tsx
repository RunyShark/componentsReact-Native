import React, {useState} from 'react';
import {Switch} from 'react-native';

interface SwitchProps {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

export const CustomSwitch = ({isOn, onChange}: SwitchProps) => {
  const [isEnabled, setIsEnabled] = useState(isOn);

  return (
    <Switch
      trackColor={{false: '#D9D9DB', true: '#5856D6'}}
      thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={() => {
        setIsEnabled(!isEnabled);
        onChange(!isEnabled);
      }}
      value={isEnabled}
    />
  );
};
