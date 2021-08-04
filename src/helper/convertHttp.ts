import {Thumbnail} from '../models/Characters';

export const convertHttp = ({extension, path}: Thumbnail) =>
  `${path.replace('http', 'https')}.${extension}`;
