import React from 'react';
import { View, Button } from 'react-native';
import { getStyles } from './styles';

interface IWideButton {
    onPress: Function,
    title: string,
};

const WideButton: React.FC<IWideButton> = ({onPress, title}) => {

    const styles = getStyles()

    return (
        <View>
            <Button
                onPress={() => onPress}
                title={title}
            />
        </View>
    )
}

export default WideButton