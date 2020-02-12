import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { getStyles } from './styles';

interface ISmallButton {
  title : string,
  // onPress : Function,
  onPress(): void,
  buttonColor? : string,
  buttonBackground? : string,
};

const SmallButton: React.FC<ISmallButton> = ({
  title,
  onPress,
  buttonColor,
  buttonBackground
}) => {

  const styles = getStyles(buttonColor, buttonBackground);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
      <Text
        style={styles.title}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default SmallButton;