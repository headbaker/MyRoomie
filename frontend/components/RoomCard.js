import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const RoomCard = ({ room }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: room.image }} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.title}>{room.title}</Text>
                <Text style={styles.description}>{room.description}</Text>
                <Text style={styles.price}>${room.price} / month</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 3,
        margin: 10,
        padding: 10,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 10,
    },
    details: {
        marginTop: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: '#666',
    },
    price: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
    },
});

export default RoomCard;