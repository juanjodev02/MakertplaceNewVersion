export interface Product {
  id: string;
  storeId: string;
  categoryId: string;
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
