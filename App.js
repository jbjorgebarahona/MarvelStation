import { StatusBar } from 'expo-status-bar';
import React from 'react';
import './src/App.css'
import {  Text, View } from 'react-native';
import Navbar from './src/components/Navbar';
import Product from './src/components/Product';
import Products from './src/components/Products';
import { color } from 'react-native-reanimated';

export default function App() {
  return (
   
       <View style={{backgroundColor: "#3F3E3E"}}>
      <Navbar/>
      <Products />
      {/*<Product/>*/}
      </View>
    
  );
}

