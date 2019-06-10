import React,{Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList} from 'react-native';
import Header from './Components/Header';
import InputBar from './Components/InputBar';
import TodoItem from './Components/TodoItem';

export default class App extends Component{
  constructor(){
    super();

    this.state = {
      todoInput:'',
      todos:[
        {id:0, title:'Food', done:false},
        {id:1, title:'Trash', done:false},
        {id:2, title:'Meeting', done:false}
      ]
    }
  }
  addNewTodo(){
    let todos = this.state.todos;
    todos.unshift({
      id:todos.length + 1,
      title:this.state.todoInput,
      done:false
    });
    this.setState({
      todos,
      todoInput:''
    });
  }

  toggleDone(item){
    let todos = this.state.todos;
    todos = todos.map((todo) =>{
      if(todo.id == item.id){
        todo.done = !todo.done;
      }
      return todo;
    })
    this.setState({todos});
  }

  removeTodo(item){
    let todos = this.state.todos;
    todos = todos.filter((todo) => todo.id !== item.id);
    this.setState({todos});
  }
  render(){
    const statusbar = (Platform.OS == 'ios') ? <Text>Apple</Text> : <Text>Not Apple</Text>;

    return(
      <View style={{marginTop:0}}>
        <Header text='TODO APP' />
        <InputBar textChange={todoInput => this.setState({todoInput})} addNewTodo={() => this.addNewTodo()} todoInput={this.state.todoInput}/>
        <FlatList extraData={this.state} data={this.state.todos} keyExtractor={(item, index) => index.toString()} renderItem={({item,index}) =>{
            return(
              <TodoItem todoItem={item} toggleDone={() => this.toggleDone(item)} removeTodo={() => this.removeTodo(item)}/>
            )
          }} />
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
