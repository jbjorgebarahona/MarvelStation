import axios from 'axios';
import {apiKey, hash, ts, url} from '../constant/ApiMarvel';

const marvelDB = axios.create({
  baseURL: url,
  params: {
    ts: ts,
    apikey: apiKey,
    hash: hash,
  },
});

export default marvelDB;
