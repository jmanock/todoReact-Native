import React,{Component} from 'react';
import {StyleSheet, Text, Button, TouchableOpacity} from 'react-native';

export default class TodoItem extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const todoItem = this.props.todoItem;
    return(
      <TouchableOpacity style={styles.todoItem}>
        <Text style={(todoItem.done) ? {color:'#aaaaaa'} : {color:'#313131'}} onPress={ () => this.props.toggleDone()}>
          {todoItem.title}
        </Text>
        <Button title='Remove' color={(todoItem.done) ? 'rgba(200,0,0,0.5)' : 'rgba(255,0,0,1)'} onPress={() => this.props.removeTodo()}/>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  todoItem:{
    width:'100%',
    height:40,
    borderBottomColor:'#ddd',
    borderBottomWidth:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingLeft:15
  }
})
