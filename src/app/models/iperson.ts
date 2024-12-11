export interface IPerson {
  _id: string;
  name: string;
  biography: string;
  birthday: Date;
  deathday: Date;
  place_of_birth: string;
  profile_path: string;
  known_for: string[];
  roles: string[];
  movie_credits: string[];
  tv_credits: string[];
}
