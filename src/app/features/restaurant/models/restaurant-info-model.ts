import {Address} from './address-model';

export interface RestaurantInfo {
  tags: string;
  name: string;
  rating: number;
  open_time: number;
  close_time: number;
  address: Address;
  img: number[];
}
