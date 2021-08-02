import { StatusBar } from 'expo-status-bar';
import React from 'react';
import './src/App.css'
import {  Text, View } from 'react-native';
import Navbar from './src/components/Navbar';
import Product from './src/components/Product';
import Products from './src/components/Products';
import { color } from 'react-native-reanimated';
import CheckoutPage from './src/components/CheckoutPage';
import CheckoutCard from './src/components/CheckoutCard';
import Typography from '@material-ui/core/Typography';
import { Switch,BrowserRouter as Router, Route } from 'react-router-dom';
import { StateProvider } from './src/StateProvider';
import reducer, { initialState } from "./src/reducer";
import SignIn from './src/Singin';
import SignUp from './src/Singup';
 
export default function App() {
 return (
   <StateProvider initialState={initialState} reducer={reducer}>
     <Router>
       <View style={{backgroundColor: "#3F3E3E"}}>
       <Navbar/>
       <Switch>
       <Route path="/singin">
           
            <SignIn/>
         </Route>
         <Route path="/singup">
           
            <SignUp/>
         </Route>
         <Route path="/checkout-page">
         <CheckoutPage/>
         </Route>
         <Route path="/">
           <Typography align='center' gutterBottom variant='h4'>
                   Marvel Station
             </Typography>
             <Products />
         </Route>
       </Switch>
       </View>
     </Router>
   </StateProvider>
 );
}
