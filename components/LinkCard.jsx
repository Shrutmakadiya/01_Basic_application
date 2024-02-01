import { Linking, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';

const LinkCard = () => {
    function openWebsite(websiteLink) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.HeadText}>Blog Card</Text>
            <View style={[styles.card, styles.elevationCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>LakshaDweep with PM</Text>
                </View>
                <Image
                    source={{
                        uri: 'https://www.livemint.com/lm-img/img/2024/01/08/600x338/ANI-20240104306-0_1704720758656_1704720794639.jpg'
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3} style={styles.bodyText}> 
                        After Prime Minister Narendra Modi's visit, Lakshadweep topped the Google trends in India for two days. This sparked speculations that Indians might be looking at the country's smallest Union Territory as their next tourist destination.
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                    onPress={() => openWebsite('https://www.livemint.com/news/india/india-promoting-lakshadweep-beaches-for-tourism-how-attacks-on-pm-modi-are-backfiring-on-maldives-11704720053736.html')}>
                        <Text style={styles.linkText}>Read more</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default LinkCard;

const styles = StyleSheet.create({
    HeadText: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width:350,
        height:335,
        borderRadius:8,
        marginHorizontal:18,
        marginVertical:16
    },
    elevationCard: {
        backgroundColor:'#EEEEEE',
        elevation:4
    },
    headingContainer: {
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    headerText: {
        color:'black',
        fontWeight:'600',
        fontSize:16
    },
    cardImage: {
        height:170,
        marginBottom:8,
    },
    bodyContainer:{
        padding:10,
    },
    bodyText:{
        color:'black'
    },
    footerContainer: {
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    linkText:{
        color:'blue',
        textDecorationLine:'underline'
    }
});
