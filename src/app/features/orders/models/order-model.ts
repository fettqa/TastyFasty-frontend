import {OrderStatus} from "../../../core/models/current-order.model";

export interface Order {
  orderId: number;
  restaurantId: number;
  status: OrderStatus;
  name: string;
  tag: string;
  customerId: number;
  deliverymanId: number
   price: number;
}

export interface OrderBreakfasts {
  orderBreakfastId: number;
  orderId: number;
  breakfastId: number;
}
