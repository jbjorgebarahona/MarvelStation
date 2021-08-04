import { StackScreenProps } from '@react-navigation/stack';
import React, {useState} from 'react';
import {
  Image,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {convertHttp} from '../helper/convertHttp';
import {useMarvelApi} from '../hooks/useMarvelApi';
import {Charactert} from '../models/Characters';
import {RootStackParams} from '../routes/StackNavigation';
interface Props extends StackScreenProps<RootStackParams, 'SearchScreen'> {}

const SearchScreen = ({navigation}: Props) => {
  const {characters} = useMarvelApi();
  const [query, setQuery] = useState<string>('');
  const [data, setData] = useState<Charactert[]>([]);

  const handlerSearch = (search: string) => {
    const filteredData = characters.filter(e => contains(search, e));
    search.length > 0 ? setData(filteredData) : setData([]);
    setQuery(search);
  };
  const contains = (search: string, e: Charactert) =>
    e.name.toLowerCase().startsWith(search);

  const renderItem = (e: Charactert) => {
    const {thumbnail, name, comics} = e;
    const {available} = comics;
    const photo = convertHttp(thumbnail);

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('DetailCharacterScreen', e)}>
        <View
          style={{
            flexDirection: 'row',
            margin: 8,
          }}>
          <Image
            source={{uri: photo}}
            style={{
              width: 80,
              height: 80,
              borderRadius: 48,
              marginRight: 8,
            }}
          />
          <View>
            <Text style={{fontWeight: 'bold'}}>{name}</Text>
            <Text>Comics: {available}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
  
    <View style={{flex: 1, marginTop:25, backgroundColor:'#3F3E3E'}}>
      <View
        style={{
          backgroundColor: 'orange',
          margin: 10,
          flexDirection: 'row',
          borderRadius: 24,
        }}>
        <Icon
          name="arrow-back-outline"
          size={30}
          style={{
            margin: 8,
            color: 'black',
            backgroundColor: 'orange'
          }}
          onPress={navigation.goBack}
        />
        <TextInput
          onChangeText={handlerSearch}
          value={query}
          placeholder='buscar...'
          placeholderTextColor='white'
          style={{
            flex: 1,
            color: 'white',
            backgroundColor: 'orange'
          }}
        />
        <Icon
          name="search-outline"
          size={30}
          style={{
            margin: 8,
            color: 'black',
            backgroundColor: 'orange'
          }}
        />
      </View>
      {data.length > 0 ? (
        <FlatList
          data={data}
          renderItem={({item}: ListRenderItemInfo<Charactert>) =>
            renderItem(item)
          }
        />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: 'bold', color:'white'}}>
            ¡Busca tu personaje favorito!
          </Text>
        </View>
      )}
    </View>
  );
};
export default SearchScreen;
