import React, { useState } from 'react';
import { 
    View, 
    ImageBackground, 
    KeyboardAvoidingView
} from 'react-native';

import {getStyles} from './styles';

import DismissKeyboard from '../../components/Dismiss-keyboard';
import LoginLogo from './components/Login-logo';
import Input from '../../components/Fields/Input';
import WideButton from '../../components/Buttons/Wide-button';
import HeaderButtons from '../../components/Header-buttons';

const LoginPageBgc = require('../../images/Login-bgc.png')

interface ILogin {
    navigation
};

const Login: React.FC<ILogin> = ({navigation}) => {

    const styles = getStyles()

    const [isLogin, setIsLogin] = useState(false);

    const renderHeader = () => {
        return (
            <HeaderButtons
                titleLeftButton="Cancel"
                titleRightButton="Done"
                onPressLeft={() => setIsLogin(false)}
                onPressRight={() => console.log("Done")}
            />
        )
    }

    const renderLoginForm = () => {
        return (
            <View>
                <Input
                    placeholder="Enter login"
                    autoFocus={true}
                    returnKeyType={"next"}
                />
                <Input
                    placeholder="Enter password"
                    secureTextEntry
                    maxLength={16}
                    returnKeyType={"done"}
                />
                <WideButton
                    onPress={() => console.log("submit")}
                    title="Submit"
                />
            </View>
        )
    }

    const renderStartBtn = () => {
        return (
            <View>
                <WideButton
                    onPress={() => setIsLogin(true)}
                    title="Login"
                />
                <WideButton
                    onPress={() => navigation.navigate("Registration")}
                    title="Registration"
                />
            </View>
        )
    }

    return (
        <DismissKeyboard>
            <ImageBackground 
                style={styles.background}
                source={LoginPageBgc}
            >
                <LoginLogo/>
                {isLogin ? renderHeader() : null}
                <KeyboardAvoidingView behavior="position">
                    <View style={styles.container}>
                        {isLogin ? renderLoginForm() : renderStartBtn()}
                    </View>
                </KeyboardAvoidingView>
           </ImageBackground>
        </DismissKeyboard>
           
    )
}

export default Login;