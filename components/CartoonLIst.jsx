import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CartoonList = () => {
    const cartoons = [
        {
            uid: 1,
            name: 'Doraemon',
            channel: 'Disney',
            imageUrl: 'https://www.partysuppliesindia.com/cdn/shop/products/A1_33_261dffb8-1073-462d-b670-13e2d0b2616a.jpg?v=1635508143&width=1500'
        },
        {
            uid: 2,
            name: 'Pokemon',
            channel: 'Cartoon Network',
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BNDcwZDc2NTEtMzU0Ni00YTQyLWIyYTQtNTI3YjM0MzhmMmI4XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg'
        },
        {
            uid: 3,
            name: 'Chhota Bheem',
            channel: 'POGO',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/f/f9/Chhota_Bheem.jpg',
        },
        {
            uid: 4,
            name: 'Ben10',
            channel: 'Cartoon Network',
            imageUrl: 'https://static.wikia.nocookie.net/best-tv-shows/images/8/8d/Ben-10-ua.jpg/revision/latest/scale-to-width-down/1200?cb=20210715034155',
        },
        {
            uid: 5,
            name: 'Power Rangers Samurai',
            channel: 'Nickelodeon',
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTk1MDc4MjY0MV5BMl5BanBnXkFtZTcwNjExNzMzNw@@._V1_.jpg',
        },
        {
            uid: 6,
            name: 'Tom And Jerry',
            channel: 'Cartoon Network',
            imageUrl: 'https://w0.peakpx.com/wallpaper/857/797/HD-wallpaper-tom-and-jerry-tv-show-jerry-tom-and-jerry-tom-tom-and-jerry.jpg',
        }
    ]
    return (
        <View>
            <Text style={styles.HeadText}>Cartoon List</Text>
            <ScrollView
                style={styles.container}>
                {cartoons.map(({ uid, name, channel, imageUrl }) => (
                    <View key={uid} style={styles.cartoonCard}>
                        <Image
                            source={{
                                uri: imageUrl
                            }}
                            style={styles.cartoonImage}
                        />
                        <View>
                            <Text style={styles.cartoonName}>{name}</Text>
                            <Text style={styles.cartoonChannel}>{channel}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default CartoonList

const styles = StyleSheet.create({
    HeadText: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        paddingHorizontal: 16
    },
    cartoonCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#128c7e',
        padding: 8,
        borderRadius: 14
    },
    cartoonImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14
    },
    cartoonName: {
        fontSize: 14,
        fontWeight: '600',
        color : '#FFF'
    },
    cartoonChannel: {
        fontSize : 12,
    },
})