import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome,Ionicons,Feather,FontAwesome5 ,Fontisto, Entypo,MaterialCommunityIcons} from '@expo/vector-icons'; 
import {LinearGradient} from "expo-linear-gradient"

export default function Weather({temp, condition}) {
    return (
        <LinearGradient
            colors={conditionType[condition].color}
            style={styles.container}
        >
            <View style={styles.halfContainer}>
                {conditionType[condition].icon}
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={styles.halfContainer}>
                <Text style={styles.title}>{conditionType[condition].title}</Text>
                <Text style={styles.text}>{conditionType[condition].text}</Text>
            </View>
        </LinearGradient>
    )
}


const conditionType = {
    Thunderstorm:{
        icon:<Ionicons name="thunderstorm" size={96} color="white" />,
        color:["#4c669f", "#3b5998", "#192f6a"],
        title:'우르르 쾅쾅',
        text:'집에들어가서 나오지 말자!!'
    },
    Drizzle:{   
        icon:<Feather name="cloud-drizzle" size={96} color="white" />,
        color:["#4c669f", "#3b5998", "#192f6a"],
        title:'우르르 쾅쾅',
        text:'집에들어가서 나오지 말자!!'
    },
    Rain:{
        icon:<FontAwesome5 name="cloud-rain" size={96} color="white" />,
        color:["#4c669f", "#3b5998", "#192f6a"],
        title:'우르르 쾅쾅',
        text:'집에들어가서 나오지 말자!!'
    },
    Snow:{
        icon:<FontAwesome name="snowflake-o" size={96} color="white" />,
        color:["#403B4A", "#E7E9BB"],
        title:'우르르 쾅쾅',
        text:'집에들어가서 나오지 말자!!'
    },
    Clear:{
        icon:<Fontisto name="night-clear" size={96} color="white" />,
        color:["#E55D87", "#5FC3E4"],
        title:'우르르 쾅쾅',
        text:'집에들어가서 나오지 말자!!'
    },
    Clouds:{
        icon:<Entypo name="cloud" size={96} color="white" />,
        color:["#003973", "#3b5998", "#192f6a"],
        title:'우르르 쾅쾅',
        text:'집에들어가서 나오지 말자!!'
    },
    Haze:{
        icon:<Fontisto name="day-haze" size={96} color="white" />,
        color:["#4c669f", "#E5E5BE"],
        title:'우르르 쾅쾅',
        text:'집에들어가서 나오지 말자!!'
    },
    Mist:{
        icon:<MaterialCommunityIcons name="weather-fog" size={96} color="white" />,
        color:["#CC95C0", "#DBD4B4", "##7AA1D2"],
        title:'우르르 쾅쾅',
        text:'집에들어가서 나오지 말자!!'
    },
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    temp:{
        fontSize:36,
        color:"white",
    },
    halfContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        color:'white',
        fontWeight:'600',
        fontSize:40
    },
    text:{
        color:'white',
        fontSize:30
    }

})
