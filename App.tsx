import React from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Stacks from './component/Stacks';



function App():JSX.Element{
  return(
    <NavigationContainer>
      <Stacks/>
     
    </NavigationContainer>
      
  )
}
export default App;