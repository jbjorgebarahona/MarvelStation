import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import MyBotton from '../drawer/MyBotton';

export default function HomeScreen(props) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:20}}>HomeScreen</Text>
        <MyBotton props={props}/>
      </View>
    );
}


