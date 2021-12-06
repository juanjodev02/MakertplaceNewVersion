export interface CartItem {
  id: number;
  storeId: number;
  productsId: string[];
  quantity: number;
}

export interface Cart {
  id: number;
  items: CartItem[];
}
