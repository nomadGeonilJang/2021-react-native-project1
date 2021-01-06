import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome,Ionicons,Feather,FontAwesome5 ,Fontisto, Entypo,MaterialCommunityIcons} from '@expo/vector-icons'; 

export default function Weather({temp, condition}) {
    return (
        <View style={styles.container}>
            <View style={styles.halfContainer}>
                {conditionType[condition]}
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={styles.halfContainer}>
                {conditionType[condition]}
                <Text>{temp}</Text>
            </View>
        </View>
    )
}


const conditionType = {
    Thunderstorm:<Ionicons name="thunderstorm" size={96} color="black" />,
    Drizzle:<Feather name="cloud-drizzle" size={96} color="black" />,
    Rain:<FontAwesome5 name="cloud-rain" size={96} color="black" />,
    Snow:<FontAwesome name="snowflake-o" size={96} color="black" />,
    Clear:<Fontisto name="night-clear" size={96} color="black" />,
    Clouds:<Entypo name="cloud" size={96} color="black" />,
    Haze:<Fontisto name="day-haze" size={96} color="black" />,
    Mist:<MaterialCommunityIcons name="weather-fog" size={96} color="black" />,
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    temp:{
        fontSize:36
    },
    halfContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
