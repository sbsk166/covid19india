import React, {Component} from 'react';
import {Text,View,StyleSheet,Button,SafeAreaView,ScrollView} from 'react-native';
import Controller from './components/controller';
import State from './components/state';
import StateWise from './components/statewise';
import Loading from './components/loading';

class Entry extends Component{
  constructor(){
  super();
  this.state={
    masterData:[],
    data:{
    totalConfirmed:0,
    active:0,
    recovered:0,
    deaths:0,
    deltaconfirmed:0,
    deltarecovered:0,
    deltadeaths:0
     }
  }
}

changeState(){
  fetch('https://api.covid19india.org/data.json')
  .then((data)=>{
    return data.json()
  })
  .then((data2)=>{
    
   this.setState({
    masterData:data2.statewise,
     data:{
      totalConfirmed:data2.statewise[0].confirmed,
      active:data2.statewise[0].active,
      recovered:data2.statewise[0].recovered,
      deaths:data2.statewise[0].deaths,
      deltaconfirmed:data2.statewise[0].deltaconfirmed,
      deltarecovered:data2.statewise[0].deltarecovered,
      deltadeaths:data2.statewise[0].deltadeaths
     }
  })
  })
}

componentDidMount(){
  setInterval(()=>this.changeState(),5000);
}
  

render(){
  var list=(this.state.masterData).map((key, i) => (
      key={i}
  ));
 if(this.state.data.totalConfirmed==0)
    return(
          <Loading/>
    );
 else   
  return(
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
     <View style={{flex:1,backgroundColor:'#000D1A'}}>
       <Controller data={this.state.data}/>
       <State />
       <StateWise data={this.state.masterData}/>      
     </View>
</ScrollView>
</SafeAreaView>
)
}
} 
export default Entry;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    color:"#fff0f5",
    backgroundColor:"#8b008b"
  }
});