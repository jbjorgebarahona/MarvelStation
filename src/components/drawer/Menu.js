import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import s from '../../utility/style';
import DrawerMenu from './drawerMenu';
import Material from 'react-native-vector-icons/MaterialCommunityIcons'

function Menu(props){
    return(
      <View style={s.container}>
        <View style={s.bgContainer}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Perfil')}>
            <View style={s.userContainer}>
              <Image style={s.userImagen} source={require('../../images/user.jpg')}/>
              <View style={s.camaraContainer}>
                <Image style={s.camaraIcon} source={require('../../images/photo-camera.png')}/>
              </View>
            </View>
            <View style={s.userNombre}>
              <Text style={s.userTitulo}>Osmar</Text>
              <Text style={s.userSubTitulo}>Ver Perfil</Text>
            </View>
          </TouchableOpacity>
        </View>
        <DrawerMenu iconName='home' titleName='Inicio' navigation={()=> props.navigation.navigate('Home')}/>
        <DrawerMenu iconName='puzzle-check' titleName='Soporte' navigation={()=> props.navigation.navigate('Support')}/>
        <DrawerMenu iconName='cog' titleName='Configuración' navigation={()=> props.navigation.navigate('Settings')}/>
        <TouchableOpacity onPress={() => props.navigation.navigate('Logout')}>
        	<View style={{borderBottomColor: '#F4F4F4', flexDirection: 'row', marginVertical: 15, borderRadius:8, marginLeft: 10, justifyContent: 'center'}}>
                <View style={s.iconoContainer}>
                    <Material 
                    	size={25}
                      name='exit-to-app'
                    />
                </View>
                <View style={s.tituloContainer}>
                    <Text style={s.tituloContainer}>Cerrar Sesion</Text>
                </View>
          </View>		
        </TouchableOpacity>
      </View>
    )
  } 

  export default Menu