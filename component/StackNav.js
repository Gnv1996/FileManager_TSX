import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./BottomTab";
import FileOption from "./FileOption";



const StackTab=createStackNavigator();

function StackNav(){
    return(
      <StackTab.Navigator>
        <StackTab.Screen name='File Manager' component={FileOption} />
        <StackTab.Screen name='Folder' component={BottomTab}/>
      </StackTab.Navigator>
        
       
    )
}

export default StackNav;