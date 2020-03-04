import React from 'react';
import { View, Text, TextInputProps } from 'react-native';

import { getStyles } from '../styles';

import DismissKeyboard from '../../../components/Dismiss-keyboard';
import Input from '../../../components/Fields/Input';
import WideButton from '../../../components/Buttons/Wide-button';
import Header from '../../../components/Header';

interface IUserName extends TextInputProps {
  navigation
};

const UserName: React.FC<IUserName> = ({navigation}) => {

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
              User Name
            </Text>
          </View>
          <View>
            <Input
              placeholder="Enter user name"
            />
          </View>
          <View>
            <WideButton
              onPress={() => navigation.navigate("EnterPassword")}
              title="Submit"
            />
          </View>
        </View>
      </View>
    </DismissKeyboard>
  )
}

export default UserName;