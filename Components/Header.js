import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Header = props =>{
  return(
    <View style={styles.header}>
      <Text style={styles.title}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    backgroundColor:'yellow',
    height:60,
    alignItems:'center',
    justifyContent:'center'
  },
  title:{
    color:'green',
    fontSize:28,
    fontWeight:'900',
    textTransform:'uppercase',
  }
})
export default Header;
