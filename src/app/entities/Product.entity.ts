interface IProductEntityInput {
  id: number;
  price: number;
  name: string;
  rating: number;
  manufacturer: string;
  image?: string;
  description?: string;
  countryOfOrigin?: string;
}
export default class ProductEntity {
  id: number;
  price: number;
  name: string;
  rating: number;
  manufacturer: string;
  image?: string;
  description?: string;
  countryOfOrigin?: string;
  constructor(data: IProductEntityInput) {
    this.price = data.price;
    this.name = data.name;
    this.id = data.id;
    this.rating = data.rating;
    this.manufacturer = data.manufacturer;
    this.image = data.image;
    this.description = data.description;
    this.countryOfOrigin = data.countryOfOrigin;
  }
}
