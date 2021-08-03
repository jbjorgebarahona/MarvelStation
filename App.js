
import React, { useEffect,useState } from 'react';
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
import reducer, { initialState } from "./src/reducer";
import SignIn from './src/Singin';
import SignUp from './src/Singup';
import { auth } from './src/firebase/firebase';
import { StateProvider } from './src/StateProvider';
import { actionTypes } from './src/reducer';
import { useStateValue } from './src/StateProvider';
import firebase from 'firebase';

export default function App() {
  const dispatch= useStateValue();
  //const [dispatch,{user}] = useStateValue();
  const [user, setUser] = useState();
  
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        setUser({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      } else {
        setUser({
          type: actionTypes.SET_USER,
          user: null,
        });
      }
    });
  }, []);

 return (
   <StateProvider initialState={initialState} reducer={reducer}>
     <Router>
       <View style={{backgroundColor: "#3F3E3E"}}>
       <Navbar/>
       <Switch>
       <Route path="/product">
           
            <Products/>
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
             <SignIn />
         </Route>
       </Switch>
       </View>
     </Router>
   </StateProvider>
 );
}
