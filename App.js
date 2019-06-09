import React,{Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Header from './Components/Header';
import InputBar from './Components/InputBar';

export default class App extends Component{
  constructor(){
    super();

    this.state = {
      todoInput:'',
      todos:[
        {id:0, title:'Food', done:false},
        {id:1, title:'Trash', done:false}
      ]
    }
  }

  render(){
    const statusbar = (Platform.OS == 'ios') ? <Text>Apple</Text> : <Text>Not Apple</Text>;

    return(
      <View>
        <Header text='hi' />
        <InputBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'pink'
  },
  apple:{
    flex:1,
    backgroundColor:'purple',
  }
});
