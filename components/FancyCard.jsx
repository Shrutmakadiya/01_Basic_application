import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const FancyCard = () => {
    return (
        <View>
            <Text style={styles.HeadText}>Trending Place</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={{
                        uri: 'https://www.namasteindiatrip.com/blog/wp-content/uploads/2019/04/lakshadweep-Islands.jpg',
                    }}

                    style={[styles.cardImage]}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Agatti Island</Text>
                    <Text style={styles.cardLabel}>LakshaDweep</Text>
                    <Text  style={styles.cardDescription}>It has a north-east, south-west trend with a long tail on the south. In Agatti coral growths and multicoloured coral fishes abound in its lagoons.</Text>
                    <Text style={styles.cardFooter}>12 min away</Text>
                </View>
            </View>
        </View>
    )
}

export default FancyCard

const styles = StyleSheet.create({
    HeadText: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width:350,
        height:370,
        borderRadius:8,
        marginHorizontal:18,
        marginVertical:16,
    },
    cardElevated: {
        backgroundColor:'#FFFFFF',
        elevation:4
    },
    cardImage: {
        height: 180,
        marginBottom:8,
        borderTopLeftRadius:8,
        borderTopRightRadius:8
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12
    },
    cardTitle:{
        color:'#000000',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:5
    },
    cardLabel:{
        marginBottom:3,
        color:'#000000',
        fontSize:19,
        fontWeight:'400'
    },
    cardDescription:{
        color:'#000000',
        fontSize:15,
        marginBottom:6
    },
    cardFooter:{
        color:'#000000',
        fontSize:15
    }

})