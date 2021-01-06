import React, { useState,useEffect } from 'react';
import { StyleSheet, Alert } from 'react-native';
import * as Location from "expo-location";

import Loading from "./Loading"
import Weather from "./Weather"

const API_KEY ='216d8d9964c3f40a90769929f02f3bc1'

export default function App() {

  const [state, setState] = useState({
    isLoading:true,
    temp:0
  })

  const getWeather = async ({latitude,longitude}) =>{
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid={key}&units=metric`
    .replace("{key}", API_KEY)
    return fetch(url).then(response=>response.json())
  }

  const getLocation = async () => {
    try {
      await Location.requestPermissionsAsync()
      const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync()
      const response = await getWeather({longitude, latitude})
      setState(prev=>({
        ...prev,
         isLoading:false,
         temp:response.main.temp,
         condition:response.weather[0].main
        }))
      
      console.log(response)
     
      
    } catch (error) {
      Alert.alert("Cant't find you")
    }
  }

  useEffect(() => {
    getLocation()
  }, [])



  return (state.isLoading ? <Loading/> : <Weather temp={Math.round(state.temp)} condition={state.condition}/>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
