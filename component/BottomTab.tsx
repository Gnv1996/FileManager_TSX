import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Music from './Music';
import Video from './Video';
import Images from './Images';
import {Image} from 'react-native'




const Tab=createMaterialBottomTabNavigator();
function BottomTab(){
    return(
        <Tab.Navigator>
            <Tab.Screen name='Music' component={Music}  options={{
          tabBarLabel: 'Music',
          tabBarIcon: ({ color }) => (
            <Image style={{height:30,width:30}} source={require('../assest/music.png')}/>
          ),
        }}/>
            <Tab.Screen name='Video' component={Video} options={{
          tabBarLabel: 'Video',
          tabBarIcon: ({ color }) => (
            <Image style={{height:30,width:30}} source={require('../assest/video.png')}/>
          ),
        }}/>
            <Tab.Screen name='Images' component={Images} options={{
          tabBarLabel: 'Image',
          tabBarIcon: ({ color }) => (
            <Image style={{height:30,width:30}} source={require('../assest/images.png')}/>
          ),
        }}/>
        </Tab.Navigator>
    )
}
export default BottomTab;