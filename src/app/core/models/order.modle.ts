import { Cart } from './cart.model';

export type orderStatus = 'pending' | 'waiting' | 'inProcess' | 'delivered';

export interface Order {
  id: number;
  cart: Cart;
  deliveryId?: number;
  status: orderStatus;
  userId: number;
  cardId?: number;
}
