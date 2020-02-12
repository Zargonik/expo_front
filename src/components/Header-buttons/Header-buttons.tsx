import React, { useState, useEffect } from 'react';
import { View, Animated } from 'react-native';

import { getStyles } from './styles';

import SmallButton from '../Buttons/Small-button';

interface IHeaderButtons {
  titleLeftButton : string,
  titleRightButton : string,
  // onPressLeft : Function,
  onPressLeft(): void
  // onPressRight : Function,
  onPressRight(): void
  buttonColor? : string,
  buttonBackground? : string,
};

const HeaderButtons: React.FC<IHeaderButtons> = ({
  titleLeftButton,
  titleRightButton,
  onPressLeft,
  onPressRight,
  buttonColor,
  buttonBackground
}) => {

  const [fadeAnim] = useState(new Animated.Value(0))

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2000,
      }
    ).start();
  }, [])

  const styles = getStyles();
  
  return (
    <Animated.View
      style={[styles.container, {opacity: fadeAnim}]}
    >
      <SmallButton
        title={titleLeftButton}
        onPress={onPressLeft}
        buttonColor={buttonColor}
        buttonBackground={buttonBackground}
      />
      <SmallButton
        title={titleRightButton}
        onPress={onPressRight}
        buttonColor={buttonColor}
        buttonBackground={buttonBackground}
      />
    </Animated.View>
  )
}

export default HeaderButtons;