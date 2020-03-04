import React from 'react';
import { View, Text } from 'react-native';

import BackButton from '../Buttons/Back-button';
import CrossButton from '../Buttons/Cross-button';

import { getStyles } from './styles';

export interface IHeader {
  title? : string,
  onPressLeft? : Function,
  onPressRight? : Function,
  background? : string,
  titleColor? : string,
};

const Header: React.FC<IHeader> = ({
  title,
  onPressLeft,
  onPressRight,
  background,
  titleColor,
}) => {

  const styles = getStyles({titleColor, background})

  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        {onPressLeft 
        ? <BackButton onPress={onPressLeft}/> 
        : null}
      </View>
      <Text style={styles.title}>
        {title ? title : ""}
      </Text>
      <View style={styles.buttonWrapper}>
        {onPressRight 
        ? <CrossButton onPress={onPressRight}/> 
        : null}
      </View>
    </View>
  )
}

export default Header;