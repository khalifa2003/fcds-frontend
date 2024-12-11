export interface IReview {
  _id: string;
  user: string;
  content: string;
  rating: number;
  movie: string;
  tvShow: string;
  createdAt: Date;
}
