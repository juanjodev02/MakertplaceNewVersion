export interface CartItem {
  id?: string;
  storeId: string;
  productId: string;
  quantity: number;
}

export interface Cart {
  id?: string;
  items: CartItem[];
}
