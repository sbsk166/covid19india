import React from 'react';
import {View,Text,StyleSheet, Dimensions} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const StateWise=(prop)=>{  

const navigation = useNavigation();
var stateList=prop.data.slice(1,38)

stateList.sort(function(a,b){
  return b.confirmed-a.confirmed
})

const Stack = createStackNavigator();


var deltaconfirmed=(temp)=>{
  if(temp.deltaconfirmed!=0)
    return  (   
                 <Text style={{fontSize:11,textAlign:"center",color:"red",paddingRight:3}}>+{temp.deltaconfirmed}</Text>
             
    )
  }

  var deltarecovered=(temp)=>{
    if(temp.deltarecovered!=0)
      return  (      
                   <Text style={{fontSize:11,textAlign:"center",color:"green",paddingRight:3}}>+{temp.deltarecovered}</Text>
            
      )
    }  

var deltadeath=(temp)=>{
      if(temp.deltarecovered!=0)
        return  (      
                     <Text style={{fontSize:11,textAlign:"center",color:"grey",paddingRight:3}}>+{temp.deltadeaths}</Text>
              
        )
      }  
var list1 = () => {
   return stateList.map(element => {
    
  if(element.confirmed!=0)
     return (
      
       <View style={{ marginTop:1,flex:1,margin: 10,flexDirection:"row",width:Math.round(Dimensions.get('window').width),paddingBottom:1,borderBottomWidth:2}}>
         <View style={styles.View}><Text style={styles.text} onPress={()=>navigation.navigate('DistrictWise',{data:element.state})}>{element.state}</Text></View>
         <View style={styles.confirmed}>
              <View>{deltaconfirmed(element)}</View>
              <Text style={styles.text}>{element.confirmed}</Text>
         </View>

         <View style={styles.View}><Text style={styles.text}>{element.active}</Text></View>
         
         <View style={styles.confirmed}>
             <View>{deltarecovered(element)}</View>
             <View style={styles.View}><Text style={styles.text}>{element.recovered}</Text></View>
         </View>
         
         <View style={styles.confirmed}>
             <View>{deltadeath(element)}</View>
             <View style={styles.View}><Text style={styles.text}>{element.deaths}</Text></View>
         </View>
       
      </View>
     );
   });
 };
 
   return <View>{list1()}</View>;
 }

export default StateWise;

const styles = StyleSheet.create({
   
   View:{
      flex:1,
      
   },
   confirmed:{
    flex:1,
    height:28,
    flexDirection:"row"
   },
   text:{
    
     fontSize:14,
     color:'#767480'
   }
 });


