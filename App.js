import { StatusBar } from 'expo-status-bar';
import React from 'react';
import './src/App.css'
import {  Text, View } from 'react-native';
import Navbar from './src/components/Navbar';
import Product from './src/components/Product';

export default function App() {
  return (
   
       <View>
      <Navbar/>
      <Product/>
      </View>
    
  );
}
