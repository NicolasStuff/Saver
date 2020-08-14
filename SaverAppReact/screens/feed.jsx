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

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default function feed() {

    const [maptriplive, setMaptriplive] = useState([])

    useEffect(() => {
        async function askPermissions() {
          var { status } = await Permissions.askAsync(Permissions.LOCATION);
          if (status === 'granted') {
            Location.watchPositionAsync({distanceInterval: 2},
              (location) => {
                console.log('ma position',location)
                setMaptriplive([...maptriplive, {latitude: location.coords.latitude, longitude: location.coords.longitude}])
              }
            );
          }
        }
        askPermissions();
      }, []);

      sendPosition = () => {
        
      }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Je suis en danger</Text>
            <TouchableOpacity onPress={() => { sendPosition() }}>
                <Text style={styles.DangerInTheStreet}>J'ai besoins d'aide dans la rue ! Appuyer pour partager ma position</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { sendPosition() }}>
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