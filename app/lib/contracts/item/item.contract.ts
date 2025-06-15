export interface IItemAvailable {
  id: string;
  price:number;
  name:string;
  stockQuantity:number;
  imageUrl?:string
}

export interface ICreateItem {
  name:string;
  price:number;
  stockQuantity:number;
  description:string;
}