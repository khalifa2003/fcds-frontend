export interface IUser {
  _id: string;
  fname: string;
  lname: string;
  phone: string;
  image: string;
  email: string;
  password: string;
  passwordChangedAt?: Date;
  passwordResetCode?: string;
  passwordResetExpires?: Date;
  passwordResetVerified?: string;
  active: boolean;
  role: string;
  watchlist: string[];
  reviews: string[];
}
