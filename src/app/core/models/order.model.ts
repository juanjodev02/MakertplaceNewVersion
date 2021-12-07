import { Cart } from './cart.model';

export type orderStatus = 'pending' | 'waiting' | 'inProcess' | 'delivered';

/**
 * When the order is created, the product are sorted by the store they belong to.
 */
export interface OrderDetail {
  id?: string;
  storeId?: string;
  productsIds?: string[];
}

export interface Order {
  id?: string;
  orderDetails: OrderDetail[];
  deliveryId?: number;
  status: orderStatus;
  userId: number;
  cardId?: number;
  total: number;
  subtotal: number;
  shippingCost: number;
  tax: number;
}
