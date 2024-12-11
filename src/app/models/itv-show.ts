export interface ITvShow {
  _id: string;
  name: string;
  original_name: string;
  overview: string;
  first_air_date: Date;
  last_air_date: Date;
  status: string;
  language: string;
  poster_path: string;
  backdrop_path: string;
  genres: string[];
  networks: { name: string; logo_path: string; country: string }[];
  production_companies: string[];
  cast: string[];
  crew: string[];
  seasons: {
    season_number: number;
    episode_count: number;
    air_date: Date;
    poster_path: string;
    overview: string;
  }[];
  popularity: number;
}
