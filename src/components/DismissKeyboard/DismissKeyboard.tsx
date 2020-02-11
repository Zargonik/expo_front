import React from 'react';
import { TouchableWithoutFeedback, View, TouchableOpacity, Keyboard } from 'react-native';
import { styles } from './styles';

interface IDismissKeyboard {
  children: any;
};

const DismissKeyboard: React.FC<IDismissKeyboard> = ({children}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() =>  {
        Keyboard.dismiss()
      }}
    >
      <View 
      >
        {children}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default DismissKeyboard;
