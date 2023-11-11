import IGenre from "./genre";

export default interface IProduct {
  _id: string;
  name: string;
  price: number;
  tag: string;
  thumbnail: string;
  genre: IGenre;
  numberInStock: number;
  added: Date;
  qty?: number;
}
