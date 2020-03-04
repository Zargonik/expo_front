import React, { useEffect } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Header from '../../../components/Header';

import { getStyles } from './styles';

interface IRegistrationType {navigation};

const RegistrationType: React.FC<IRegistrationType> = ({navigation}) => {

  const styles = getStyles();

  return (
    <View style={styles.container}>
      <View>
        <Header
          title="Registration"
          onPressLeft={navigation.goBack}
          // onPressRight={navigation.goBack}
        />
      </View>
      <View style={styles.contentWrapper}>
        <TouchableHighlight 
          style={styles.touchElement}
          onPress={() => navigation.navigate("Registration", { screen: "EnterPhoneNumber"})}
          >
          <Text style={styles.title}>
            With phone number
          </Text>
        </TouchableHighlight>
        <TouchableHighlight 
          style={styles.touchElement}
          onPress={() => navigation.navigate("Registration", { screen: "EnterEmail"})}
          >
          <Text style={styles.title}>
            With email
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}

export default RegistrationType;