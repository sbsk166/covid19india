import React, {Component} from 'react';
import {View,Text} from 'react-native';

const Box=(prop)=>{
    
    return( <View>
         <Text style={{fontSize:15}}>{prop.data}</Text>
        </View>
)}

export default Box;