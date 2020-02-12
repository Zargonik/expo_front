import  React from 'react';
import { View, TextInput, Text, ReturnKeyTypeOptions, TextInputProps } from 'react-native';
import { getStyles } from './styles';

interface IInput extends TextInputProps {
    // type? : string,
    // placeholder?: string,
    // secureTextEntry? : boolean,
    // maxLength? : number,
    validationMessage? : string,
    validationColor? : string,
    // autoFocus? : boolean,
    // returnKeyType? : ReturnKeyTypeOptions,
};

const Input: React.FC<IInput> = ({
    placeholder,
    secureTextEntry,
    maxLength,
    validationMessage,
    validationColor,
    autoFocus,
    returnKeyType
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