import React from 'react';
import Main from './src/screens';

import { NavigationContainer } from '@react-navigation/native';


interface IApp {}

const App: React.FC<IApp> = ({}) => {
  return (
    <NavigationContainer>
      <Main/>
    </NavigationContainer>
  )
}

export default App;