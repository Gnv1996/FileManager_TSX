import React from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNav from './component/StackNav';




function App():JSX.Element{
  return(
    <NavigationContainer>
      <StackNav/>
    </NavigationContainer>
      
  )
}
export default App;