import React from 'react';
import {View,Text} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
const theme = {
  roundness: 2,
  colors: {
    
    primary: '#3498db',
    accent: '#f1c40f',
  },
};
const Controller=(prop)=>{ 
      return( 
     <PaperProvider theme={theme}>   
        
      <View style={{paddingTop:30,paddingLeft:30,flex:1,flexDirection:"row",backgroundColor:'#000000'}}>
        <View style={{flex:1,width:50,height:50}}>
          <Text style={{color:"red",fontSize:17}}>Confirmed</Text>
          <Text style={{color:"red",fontSize:13}}>+{prop.data.deltaconfirmed}</Text>
          <Text style={{color:"red"}}>{prop.data.totalConfirmed}</Text>
      </View>

        <View style={{flex:1,width:120,height:50}}>
          <Text style={{color:'#3144ca',fontSize:17}}>Active</Text>
          <Text style={{color:'#3144ca'}}>{prop.data.active}</Text>
        </View>
        
        <View style={{flex:1,width:120,height:50}}>
           <Text style={{color:"green",fontSize:17}}>Recovered</Text>
           <Text style={{color:"green",fontSize:13}}>+{prop.data.deltarecovered}</Text>
           <Text style={{color:"green"}}>{prop.data.recovered}</Text>   
        </View>  

        <View style={{flex:1,width:80,height:80}}>
           <Text style={{color:"grey",fontSize:17}}>Deceased</Text>
           <Text style={{color:"grey",fontSize:13}}>+{prop.data.deltadeaths}</Text>
           <Text style={{color:"grey"}}>{prop.data.deaths}</Text>   
        </View>          
     </View>
     </PaperProvider>
      );    
}
export default Controller;
