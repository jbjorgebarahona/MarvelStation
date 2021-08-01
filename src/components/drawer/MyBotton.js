import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default function MyBotton({props}) {
    return(
        <TouchableOpacity style={{
            marginTop:20,
            width:200,
            height:50,
            backgroundColor:'orange',
            padding:10,
            alignItems: 'center',
            borderRadius:5
          }} 
              onPress={() => props.navigation.navigate('Perfil')}>
            <Text style={{fontSize:20, color:'white'}}>Perfil</Text>
        </TouchableOpacity>
    )
}
