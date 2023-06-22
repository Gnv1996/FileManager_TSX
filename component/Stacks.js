import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './BottomTab';



const StackTab=createStackNavigator()

function Stacks(){
    <StackTab.Navigator>
         
        <StackTab.Screen name='FOlder' component={BottomTab}/>
    </StackTab.Navigator>

}
export default Stacks;