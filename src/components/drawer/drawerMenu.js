import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Material from 'react-native-vector-icons/MaterialCommunityIcons'
import s from '../../utility/style';

function DrawerMenu(props){
    return(
        <TouchableOpacity onPress={props.navigation}>
            <View style={s.menuContainer}>
                <View style={s.iconoContainer}>
                    <Material 
                    	size={25}
                        name={props.iconName}
                    />
                </View>
                <View style={s.tituloContainer}>
                    <Text style={s.tituloContainer}>{props.titleName}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default DrawerMenu