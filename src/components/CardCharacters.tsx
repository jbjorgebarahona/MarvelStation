import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {convertHttp} from '../helper/convertHttp';
import {Charactert} from '../models/Characters';
interface Props {
  charactert: Charactert;
}

export const CardCharactert = ({charactert}: Props) => {
  const {thumbnail} = charactert;
  const {width, height} = useWindowDimensions();
  const photo = convertHttp(thumbnail);
  const {navigate} = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigate('DetailCharacterScreen', charactert);
        }}>
        <Image
          source={{uri: photo}}
          style={{
            width: width * 0.6,
            height: height * 0.5,
            borderRadius: 32,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};
