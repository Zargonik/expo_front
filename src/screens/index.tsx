import React from 'react';
import { View, Text } from 'react-native';
import Login from './Login';

interface IHome {};

const Home: React.FC<IHome> = ({}) => {
    return (
        <View>
            <Login/>
        </View>
    )
}

export default Home;