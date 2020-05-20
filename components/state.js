import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import {Dimensions} from 'react-native';
const State=(prop)=>{
 var textToPut=()=>{
   if(prop.data==1)
      return(<Text style={[styles.text,{color:'#767480'}]}>District</Text>)
   else
      return(<Text style={[styles.text,{color:'#767480'}]}>State/UT</Text>)
}
    return( 
      <View style={{ margin:10,flexDirection:"row",width:Dimensions.get('window').width,borderBottomColor:"black",borderBottomWidth:4}}>
         
    <View style={styles.View}>{textToPut()}</View>
         <View style={styles.View}><Text style={[styles.text,{color:"red"}]}>Cnfrmd</Text></View>
         <View style={styles.View}><Text style={[styles.text,{color:"blue"}]}>Actv</Text></View>
         <View style={styles.View}><Text style={[styles.text,{color:"green"}]}>Rcvrd</Text></View>
         <View style={styles.View}><Text style={[styles.text,{color:"grey"}]}>Desd</Text></View>
    </View>
    )
  }
export default State;
const styles = StyleSheet.create({
   
  View:{
     flex:1,
     height:20
  },
  text:{
   fontSize:12
  }
 
});