import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { getStyles } from './styles';

interface ICrossButton {
  onPress : Function;
  color? : string;
};

const CrossButton: React.FC<ICrossButton> = ({ onPress, color }) => {

  const styles = getStyles();

  const myIcon = <Icon name="close" size={30} color="#900" />;

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => onPress()}>
        {myIcon}
      </TouchableWithoutFeedback>
    </View>
  )
}

export default CrossButton;