import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MatchCard = ({ match }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{match.title}</Text>
            <Text style={styles.description}>{match.description}</Text>
            <Text style={styles.details}>Budget: {match.budget}</Text>
            <Text style={styles.details}>Location: {match.location}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        marginVertical: 4,
    },
    details: {
        fontSize: 12,
        color: '#555',
    },
});

export default MatchCard;