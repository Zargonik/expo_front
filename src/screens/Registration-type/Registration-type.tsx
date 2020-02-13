import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import { getStyles } from './styles';

interface IRegistrationType {};

const RegistrationType: React.FC<IRegistrationType> = ({}) => {

  const styles = getStyles();

  return (
    <View>
      <TouchableHighlight>
        <Text>
          With phone number
        </Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text>
          With email
        </Text>
      </TouchableHighlight>

    </View>
  )
}

export default RegistrationType;