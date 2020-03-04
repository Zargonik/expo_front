import React from 'react';
import { View, Text, TextInputProps } from 'react-native';

import { getStyles } from '../styles';

import DismissKeyboard from '../../../components/Dismiss-keyboard';
import Input from '../../../components/Fields/Input';
import WideButton from '../../../components/Buttons/Wide-button';
import Header from '../../../components/Header';

interface IPassword extends TextInputProps {
  navigation
};

const Password: React.FC<IPassword> = ({navigation}) => {

  const styles = getStyles();

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
              Password
            </Text>
          </View>
          <View>
            <Input
              placeholder="Enter password"
            />
            <Input
              placeholder="Repeat password"
            />
          </View>
          <View>
            <WideButton
              onPress={() => console.log("done")}
              title="Submit"
            />
          </View>
        </View>
      </View>
    </DismissKeyboard>
  )
}

export default Password;