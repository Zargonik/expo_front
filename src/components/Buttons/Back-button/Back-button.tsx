import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { getStyles } from './styles';

interface IBackButton {
  onPress : Function;
  color? : string;
};

const BackButton: React.FC<IBackButton> = ({ onPress, color }) => {

  const styles = getStyles();

  const myIcon = <Icon name="md-arrow-back" size={40} color="#900" />;

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => onPress()}>
        {myIcon}
      </TouchableWithoutFeedback>
    </View>
  )
}

export default BackButton;