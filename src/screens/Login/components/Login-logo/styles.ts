import { StyleSheet } from 'react-native';

interface IGetStyles {
    coefficient?: number;
}

export const getStyles = (props: IGetStyles) => StyleSheet.create({
    logo: {
        width: "50%",
        height: "15%",
        position: "absolute",
        top: "20%",
        alignSelf: "center"
    }
});