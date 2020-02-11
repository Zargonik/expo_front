import  React from 'react';
import { View, TextInput, Text } from 'react-native';
import { getStyles } from './styles';

interface IInput {
    type? : string,
    placeholder?: string,
    secureTextEntry? : boolean,
    maxLength? : number,
    validationMessage? : string,
    validationColor? : string,
};

const Input: React.FC<IInput> = ({
    placeholder,
    secureTextEntry,
    maxLength,
    validationMessage,
    validationColor
}) => {

    const styles = getStyles()

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder && placeholder}
                placeholderTextColor={"gray"}
                maxLength={maxLength}
            />
            {validationMessage && 
            <Text style={{color: validationColor}}>
                {validationMessage}
            </Text>
            }
        </View>
    )
}

export default Input;