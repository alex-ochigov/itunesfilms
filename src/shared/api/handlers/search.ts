import {client} from '../client';

const URL = 'https://itunes.apple.com/search';

const fetchMovies = (searchText: string, offset: number = 0) =>
  client.get(URL, {
    params: {
      media: 'movie',
      term: searchText,
      limit: 60,
      offset,
    },
  });

export {fetchMovies};
