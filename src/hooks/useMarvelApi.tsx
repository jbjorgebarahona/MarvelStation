import {useEffect, useState} from 'react';
import marvelDB from '../api/marvelDB';
import {Characters, Charactert} from '../models/Characters';
import {Comic, Comics} from '../models/Comics';

interface MarvelState {
  characters: Charactert[];
  comics: Comic[];
}

export const useMarvelApi = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [marvelState, setMarvelState] = useState<MarvelState>({
    characters: [],
    comics: [],
  });

  const getMarvel = async () => {
    const charactersPromise = marvelDB.get<Characters>('/characters');
    const comicsPromise = marvelDB.get<Comics>('/comics');

    const resps = await Promise.all([charactersPromise, comicsPromise]);

    setMarvelState({
      characters: resps[0].data.data.results,
      comics: resps[1].data.data.results,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getMarvel();
  }, []);

  return {
    ...marvelState,
    isLoading,
  };
};
