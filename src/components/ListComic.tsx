import React from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Comics} from '../models/Comics';
import {CardComic} from './CardComic';
interface Props {
  comics: Comics[];
}
const ListComic = ({comics}: Props) => {
  return (
    <FlatList
      horizontal
      data={comics}
      renderItem={({item}) => <CardComic comic={item} />}
    />
  );
};

export default ListComic;
