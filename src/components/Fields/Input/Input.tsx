import  React from 'react';
import { View, TextInput, Text, ReturnKeyTypeOptions, TextInputProps } from 'react-native';
import { getStyles } from './styles';

interface IInput extends TextInputProps {
    validationMessage? : string,
    validationColor? : string,
};

const Input: React.FC<IInput> = ({
    placeholder,
    secureTextEntry,
    maxLength,
    validationMessage,
    validationColor,
    autoFocus,
    returnKeyType,
    keyboardType,
    value,
    onChangeText
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
                autoFocus={autoFocus ? autoFocus : false}
                returnKeyType={returnKeyType}
                keyboardType={keyboardType}
                value={value}
                onChangeText={onChangeText}
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