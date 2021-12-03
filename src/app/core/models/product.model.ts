export interface Product {
  id: number;
  storeId: number;
  categoryId: number;
  name: string;
  featured: boolean;
  stars: number;
  price: number;
  discount: number;
  stock: number;
  description: string;
  coverImageUrl: string;
  images: string[];
}
