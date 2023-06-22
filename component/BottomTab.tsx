import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Music from './Music';
import Video from './Video';
import Image from './Image';



const Tab=createMaterialBottomTabNavigator()

function BottomTab(){
    return(
        <Tab.Navigator>
            <Tab.Screen name='Music' component={Music}/>
            <Tab.Screen name='Video' component={Video}/>
            <Tab.Screen name='Image' component={Image}/>
        </Tab.Navigator>
    )
}
export default BottomTab;