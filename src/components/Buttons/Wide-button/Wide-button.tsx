import React from 'react';
import { View, Text, TouchableOpacity, ButtonProps } from 'react-native';
import { getStyles } from './styles';

interface IWideButton extends ButtonProps {
    title : string,
    color? : string
};

const WideButton: React.FC<IWideButton> = ({onPress, title, color}) => {

    const styles = getStyles()

    return (
        <View 
            style={styles.container}
        >
            <TouchableOpacity 
                style={styles.buttonWrapper}
                onPress={onPress}
            >
                <Text
                    style={color ? {color : color} : {color : "white"}}
                >
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default WideButton