import { StackScreenProps } from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {ActivityIndicator, View, ScrollView, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons'

import CarouselCharacters from '../components/CarouselCharacters';
import ListComic from '../components/ListComic';

import {useMarvelApi} from '../hooks/useMarvelApi';
import {RootStackParams} from '../routes/StackNavigation';

interface Props extends StackScreenProps<RootStackParams, 'HomeScreen'> {}
export const HomeScreen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Material
          name="home"
          color='white'
          size={30}
           onPress={() => navigation.navigate('IndexHome')}
        />
      ),
      headerRight: () => (
        <Icon
          name="search-outline"
          color='white'
          size={30}
          onPress={() => {
            navigation.navigate('SearchScreen', characters);
          }}
        />
      ),
      headerShown: true,
    });
  }, []);
  const {characters, comics, isLoading} = useMarvelApi();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size='large' />
      </View>
    );
  }

  return (
    <ScrollView style={{backgroundColor:'#3F3E3E'}}>
      <View style={{marginTop: top + 20}}>
        <CarouselCharacters characterts={characters} />
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            marginLeft: 8,
            color:'white'
          }}>
          Comics
        </Text>
        <ListComic comics={comics} />
      </View>
    </ScrollView>
  );
};
