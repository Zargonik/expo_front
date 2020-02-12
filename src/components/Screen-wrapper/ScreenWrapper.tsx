import React from 'react';
import { View } from 'react-native';
import { backgrounds, layout } from '../../styles';

interface IScreenWrapper {
    children: any;
}

const ScreenWrapper: React.FC<IScreenWrapper> = ({children}) => {
    return (
        <View
        style={[backgrounds.mainTheme, layout]}
        >
            {children}
        </View>
    )
}

export default ScreenWrapper