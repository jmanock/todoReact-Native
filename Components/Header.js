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
    height:90,
    alignItems:'center',
    justifyContent:'center'
  },
  title:{
    color:'green',
    fontSize:28,
    marginTop:30,
    fontWeight:'900',
    textTransform:'uppercase',
  }
})
export default Header;
