import {client} from '../client';

const URL =
  'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topTvSeasons/json';

const fetchTopTvSeasons = () => client.get(URL);

export {fetchTopTvSeasons};
