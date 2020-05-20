import React from 'react';
import {View,SafeAreaView,ScrollView} from 'react-native';
import State from './state';
import DistrictData from './districtwise'
const DistrictWise=({route,params})=>{
    var {data}=route.params;
    return( <SafeAreaView>
      <ScrollView>
        <View style={{flex:1,backgroundColor:'#000D1A'}}>
           <State style={{flex:9}} data={1}/>
           <DistrictData style={{flex:9}} city={data}/>
           
        </View>
     </ScrollView>
    </SafeAreaView>
     )
}

export default DistrictWise;