import React from 'react';
import {Dimensions, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {Characters} from '../models/Characters';
import {CardCharactert} from './CardCharacters';
interface Props {
  characterts: Characters[];
}
const {width: windowWidth} = Dimensions.get('window');
const CarouselCharacters = ({characterts}: Props) => {
  return (
    <View style={{height: 440}}>
      <Carousel
        data={characterts}
        renderItem={({item}: any) => <CardCharactert charactert={item} />}
        sliderWidth={windowWidth}
        itemWidth={300}
        inactiveSlideOpacity={0.9}
      />
    </View>
  );
};

export default CarouselCharacters;
