import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.HeadText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card , styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
          <Text>me</Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
          <Text>to</Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
          <Text>more...</Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
          <Text>😃</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default ElevatedCards;

const styles = StyleSheet.create({
  HeadText: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container:{
    padding : 8
  },
  card:{
    width:100,
    height:100,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    border:'black',
    borderRadius:10,
    margin:8
  },
  cardElevated:{
    backgroundColor:'#1abc9c',
    elevation:4,
    shadowColor:'red',
    shadowColor:{
      width:1,
      height:1
    },

  }
});
