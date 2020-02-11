import React, { useState } from 'react';
import { 
    View, 
    ImageBackground, 
    KeyboardAvoidingView
} from 'react-native';

import {getStyles} from './styles';

import DismissKeyboard from '../../components/DismissKeyboard';
import LoginLogo from './components/Login-logo';
import Input from '../../components/Fields/Input';

const LoginPageBgc = require('../../images/Login-bgc.png')

interface ILogin {};

const Login: React.FC<ILogin> = ({}) => {

    const styles = getStyles()

    const [isLogin, setIsLogin] = useState(true)

    const renderLoginForm = () => {
        return (
            <View style={styles.LoginForm}>
                <Input
                    placeholder="Enter login"
                />
                <Input
                    placeholder="Enter password"
                    secureTextEntry
                    maxLength={16}
                />
            </View>
        )
    }

    const renderStartBtn = () => {
        return (
            <View>

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
                <KeyboardAvoidingView 
                    behavior="position"
                >
                    <View
                        style={styles.container}
                    >
                        {isLogin ? renderLoginForm(): renderStartBtn()}
                    </View>
                </KeyboardAvoidingView>
           </ImageBackground>
        </DismissKeyboard>
           
    )
}

export default Login;