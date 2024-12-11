export interface IMovie {
  _id: string;
  title: string;
  original_title: string;
  tagline: string;
  overview: string;
  runtime: number;
  release_date: Date;
  status: string;
  language: string;
  budget: number;
  revenue: number;
  poster_path: string;
  backdrop_path: string;
  genres: string[];
  production_companies: string[];
  production_countries: string[];
  spoken_languages: string[];
  cast: string[];
  crew: string[];
  keywords: string[];
  movieCollection: string;
  vote_count: number;
  vote_average: number;
  popularity: number;
}
