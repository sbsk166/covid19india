import React, {useState,Component} from 'react';
import {View,Text,StyleSheet, Dimensions} from 'react-native';

const RenderDistrict=(prop)=>{
  var city=prop.data
const [state_zone,setZone]=useState(0)
var zones_data=()=>{
  fetch('https://api.covid19india.org/zones.json')
    .then((data)=>{
      return data.json()
    })
    .then((data2)=>{
      var zoness=data2.zones
      var state_zone={}
    zoness.forEach((element)=>{
     
      var colour='#767480'  
      if(element.zone=="Red")
          colour='#b80000'
       else if(element.zone=="Orange")
          colour='#ff7f50'
        else if(element.zone=="Green")
          colour='#7fff00'
        else
         colour='#767480'   
       state_zone[element.district]=colour  
      
      
    
    })
  setZone(state_zone)
    });
  }
var list=zones_data()

 

city.sort(function(a,b){
  return b.confirmed-a.confirmed
})
var deltaconfirmed=(temp)=>{
  if(temp.delta.confirmed!=0)
    return  (   
                 <Text style={{fontSize:10,textAlign:"center",color:"red",paddingRight:3}}>+{temp.delta.confirmed}</Text>
      )
  }

  var deltarecovered=(temp)=>{
    if(temp.delta.recovered!=0)
      return  (      
                   <Text style={{fontSize:10,textAlign:"center",color:"green",paddingRight:3}}>+{temp.delta.recovered}</Text>
       )
    }  

var deltadeath=(temp)=>{
      if(temp.delta.deceased!=0)
        return  (      
                     <Text style={{fontSize:10,textAlign:"center",color:"grey",paddingRight:3}}>+{temp.delta.deceased}</Text>
        )
      }
var findColour=(element)=>{
  if(element in state_zone)
    return state_zone[element]
  else 
     return '#767480'  
}         
var list1 = () => {
  state_zone["Unknown"]='#767480' 
  return city.map(element => {
   
       return (
       <View style={{marginTop:5,margin:10,flexDirection:"row",width:Math.round(Dimensions.get('window').width),paddingBottom:6,borderBottomWidth:2}}>
         <View style={styles.View}><Text style={{color:findColour(element.district)}}>{element.district}</Text></View>
         
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
             <View style={styles.View}><Text style={styles.text}>{element.deceased}</Text></View>
         </View>
       
      </View>
     );
   });
 };
//if(this.state.states==={})
  // return <View>{list1()}</View>;
//else
   return <View>{list1()}</View>;
};

export default RenderDistrict;

const styles = StyleSheet.create({
    View:{
      flex:1
    },
   confirmed:{
    flex:1,
    flexDirection:"row"
    },
   text:{
    fontSize:13,
    color:'#767480'
  }
});


