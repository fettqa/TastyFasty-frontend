import {OrderStatus} from "../../../core/models/current-order.model";
import {OrderInfo} from "../../basket/models/order-info-model";
import {Status} from '../../basket/models/status';

export interface Order {
  id: number;
  restaurantID: number;
  customerID: number;
  deliverymanID: number;
  orderInfo: OrderInfo;
  status: Status;
}
//
// export interface OrderBreakfasts {
//   orderBreakfastId: number;
//   orderId: number;
//   breakfastId: number;
// }
