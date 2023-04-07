import {client} from '../client';

const URL =
  'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';

const fetchTopMovies = () => client.get(URL);

export {fetchTopMovies};
