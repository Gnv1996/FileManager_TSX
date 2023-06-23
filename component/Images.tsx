import React from 'react';
import {View,Text,StyleSheet} from 'react-native';



function Images(){
    return(
        <View>
            <Text style={styles.title}>
                Welcome in Beautiful world of 3d --- Image </Text>
        </View>
    )
}
const styles=StyleSheet.create({
    title:{
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
        marginTop:300,
        fontWeight:'bold',
        fontSize:25,
        color:'black'
    }
})
export default Images;