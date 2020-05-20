import React, {Component} from 'react';
import {View} from 'react-native';
//import MapView from 'react-native-maps';
import RenderDistrict from './renderdistrict';
import Loading from './loading';
class DistrictData extends Component{
    constructor(prop){
        super(prop);
        this.state={
            city:[],
            district:prop.city
        }
    }
    componentDidMount(){
       fetch('https://api.covid19india.org/v2/state_district_wise.json')
    .then((data)=>{
          return data.json()
    })
    .then((data2)=>{
    var cityArray=[];
    for(var i=0;i<data2.length;++i){
        if(data2[i].state==this.state.district)
          {
          cityArray.push(data2[i].districtData)
          break;
         }
    }
    cityArray=cityArray[0]
    
    this.setState({
      city:cityArray
    })
    })
  
    

    }


render(){
if(this.state.city==[])
  return (
      <Loading/>
  )
else
 return(<View>
    <RenderDistrict data={this.state.city}/>
    

    
  </View>
 )
}

}
export default DistrictData;