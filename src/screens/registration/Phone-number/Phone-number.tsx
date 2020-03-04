import React, { useState } from 'react';
import { View, Text, TextInputProps } from 'react-native';

import { getStyles } from '../styles';

import DismissKeyboard from '../../../components/Dismiss-keyboard';
import Input from '../../../components/Fields/Input';
import WideButton from '../../../components/Buttons/Wide-button';
import Header from '../../../components/Header';

interface IPhoneNumber extends TextInputProps {
  navigation
};

const PhoneNumber: React.FC<IPhoneNumber> = ({navigation}) => {

  const styles = getStyles();

  const [phoneValue, setPhoneValue] = useState("")
  const [errorText, setErrorText] = useState("")

  const onSubmit = () => {

  }

  return (
    <DismissKeyboard>
      <View style={styles.container}>
          <View>
            <Header 
              title="Registration"
              onPressLeft={navigation.goBack}
              onPressRight={() => navigation.navigate("Login")}
            />
          </View>
          <View>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>
                Phone Number
              </Text>
            </View>
            <View>
              <Input
                value={phoneValue}
                onChangeText={text => setPhoneValue(text)}
                placeholder="Enter phone number"
                keyboardType="phone-pad"
              />
            </View>
            <View>
              <WideButton
                onPress={() => navigation.navigate("EnterUserName")}
                title="Submit"
              />
            </View>
        </View>
      </View>
    </DismissKeyboard>
  )
}

export default PhoneNumber;