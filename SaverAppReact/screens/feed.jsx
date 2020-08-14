import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    Dimensions,
    ScrollView,
    Image,
    ImageBackground,
    View,
    TouchableOpacity,
    Text }
from 'react-native';

export default function feed() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Je suis en danger</Text>
            <TouchableOpacity>
                <Text style={styles.DangerInTheStreet}>J'ai besoins d'aide dans la rue ! Appuyer pour partager ma position</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.DangerInTheHouse}> J'ai besoins d'aide chez moi ! Appuyer pour partager ma position</Text>
            </TouchableOpacity>
        </View>
      );
}

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 40,
    },
    DangerInTheStreet: {
        fontSize: 16,
        backgroundColor: 'red',
        paddingLeft: 45,
        paddingRight: 45,
        paddingTop: '30%',
        paddingBottom: '30%',
        color: 'white',
    },
    DangerInTheHouse: {
        fontSize: 16,
        paddingRight: 45,
        backgroundColor: 'blue',
        paddingLeft: 45,
        paddingTop: '30%',
        paddingBottom: '30%',
        color: 'white',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    }
})