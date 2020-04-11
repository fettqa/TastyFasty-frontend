export enum OrderStatus {
  STARTED_MAKING = 1,
  WAITING_FOR_DELIVERYMAN = 2,
  TO_RESTAURANT = 3,
  GET_THE_ORDER = 4,
  ON_THE_WAY_TO_CUSTOMER = 5,
  WAITING_FOR_CUSTOMER = 6,
  READY = 7,
}

export interface CurrentOrder {
  orderId: number;
  status: OrderStatus;
}
