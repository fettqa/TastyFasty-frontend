import {OrderInfo} from "./order-info-model";
import {Status} from "./status";

export interface Order {
  orderID?: number;
  orderInfo: OrderInfo;
  status: Status;
  restaurantID: number;
  customerID: number;
  deliverymanID?: number;
}
