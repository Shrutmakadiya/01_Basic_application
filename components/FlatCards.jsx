import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View>
         <Text style={styles.HeadText}>Flat Cards</Text>
         <View style={styles.container}>
            <View style={[styles.card ,styles.cardOne]}>
                <Text>Red</Text>
            </View>
            <View style={[styles.card ,styles.cardTwo]}>
                <Text>Green</Text>
            </View>
            <View style={[styles.card ,styles.cardThree]}>
                <Text>Yellow</Text>
            </View>
            <View style={[styles.card ,styles.cardFourth]}>
                <Text>Orange</Text>
            </View>
         </View>
    </View>
  )
}

export default FlatCards

const styles = StyleSheet.create({
    HeadText:{
        marginTop: 8,
        fontSize : 25,
        fontWeight : 'bold',
        paddingHorizontal: 8
    },
    container:{
        paddingHorizontal:8,
        flex:1,
        flexDirection:'row',
    },
    card:{
        width:100,
        padding:10,
        height:100,
        borderRadius:4,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        margin:8
    },
    cardOne:{
        backgroundColor: '#e74c3c'
    },
    cardTwo:{
        backgroundColor: '#229954'
    },
    cardThree:{
        backgroundColor: '#d4ac0d'
    },
    cardFourth:{
        backgroundColor: '#9b59b6'
    }
})