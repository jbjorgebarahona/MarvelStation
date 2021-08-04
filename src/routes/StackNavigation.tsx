import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from '../screens/HomeScreen';
import IndexHome from '../screens/indexHome';
import {DetailComicScreen} from '../screens/DetailComicScreen';
import {Comic} from '../models/Comics';
import {Charactert} from '../models/Characters';
import {DetailCharacterScreen} from '../screens/DetailCharacterScreen';
import SearchScreen from '../screens/SearchScreen';

export type RootStackParams = {
  IndexHome: undefined;
  HomeScreen: undefined;
  DetailCharacterScreen: Charactert;
  DetailComicScreen: Comic;
  SearchScreen: Charactert[];
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='IndexHome'
      screenOptions={{
        headerShown: false,
        headerTitleAlign: 'center',
        title: 'Marvel Station',
        headerStyle: {backgroundColor: 'black'},
        headerTintColor: 'red',
        cardStyle: {backgroundColor: 'white'},
      }}>
        <Stack.Screen name="IndexHome" component={IndexHome} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
        name="DetailCharacterScreen"
        component={DetailCharacterScreen}
        />
        <Stack.Screen name="DetailComicScreen" component={DetailComicScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
};
