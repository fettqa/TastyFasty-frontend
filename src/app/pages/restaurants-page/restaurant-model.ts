import {Address} from './address-model';

export interface Restaurant {
  restaurantId: number;
  restaurantName: string;
  address: Address;
  rating: number;
  openTime: number;
  closeTime: number;
  tags: string;
}
