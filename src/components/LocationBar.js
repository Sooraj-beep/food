import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {Input} from 'react-native-elements';

const LocationBar = ({location, onLocationChange, onLocationSubmit}) => {
    return (
        <View>
            <Ionicons name="location-outline" style={styles.iconStyle}/>
             <Input
                placeholder= 'Location'
            />  
            
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#C6C6C6',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

export default LocationBar;