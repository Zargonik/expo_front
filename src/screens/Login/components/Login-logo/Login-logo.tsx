import React from 'react';
import { Image } from 'react-native';
import { getStyles } from './styles';

const aLetter = require('../../images/ui-logo.png')

interface ILoginLogo {}

const LoginLogo: React.FC<ILoginLogo> = ({}) => {

    const styles = getStyles({})
    return (
            <Image
                source={aLetter}
                style={styles.logo}
            />
    )
}

export default LoginLogo;