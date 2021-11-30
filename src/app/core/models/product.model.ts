export interface Product {
  id: number;
  storeId: number;
  categoryId: number;
  name: string;
  price: number;
  discount: number;
  stock: number;
  description: string;
  coverImageUrl: string;
  images: string[];
}
