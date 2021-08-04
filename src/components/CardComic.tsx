import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {convertHttp} from '../helper/convertHttp';
import {Comic} from '../models/Comics';
interface Props {
  comic: Comic;
}
export const CardComic = ({comic}: Props) => {
  const {thumbnail, title} = comic;
  const photo = convertHttp(thumbnail);
  const {width, height} = useWindowDimensions();
  const {navigate} = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigate('DetailComicScreen', comic);
        }}>
        <Image
          source={{uri: photo}}
          style={{
            width: width * 0.32,
            height: height * 0.24,
            borderRadius: 32,
            marginHorizontal: 8,
          }}
          
        />
        <Text
          style={{
            color:'white',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 12,
          }}>
          {title.length > 24 ? title.substring(0, 24) + '...' : title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
