import {Address} from '../../../shared/models/address-model';

export interface RestaurantInfo {
  tags: string;
  name: string;
  rating: number;
  openTime: number;
  closeTime: number;
  address: Address;
  img: number[];
}
