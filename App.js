import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import * as Location from "expo-location";


import Loading from "./Loading"

export default function App() {

  const [state, setState] = useState({
    isLoading:true,
  })

  const getLocation = async () => {
    try {
      await Location.requestPermissionsAsync()
      const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync()
      setState(prev=>({...prev, isLoading:false}))
      console.log(latitude, longitude)
    } catch (error) {
      Alert.alert("Cant't find you")
    }
  }

  useEffect(() => {
    getLocation()
  }, [])



  return (state.isLoading ? <Loading/> : null)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
