
export class Book {

  id: number;
   name: string;
   price: number;
   language: string;

  constructor(id: number, name: string, price: number, language: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.language = language;
  }
}
