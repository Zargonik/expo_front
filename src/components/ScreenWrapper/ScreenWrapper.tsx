import React from 'react';
import { View } from 'react-native';
import { backgrounds, layout } from '../../styles';

interface IScreenWrapper {
    children: any;
}

export const ScreenWrapper: React.FC<IScreenWrapper> = ({children}) => <View
style={[backgrounds.mainTheme, layout]}
>{children}</View>
