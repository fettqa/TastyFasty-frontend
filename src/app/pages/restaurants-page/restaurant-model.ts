import {Address} from './address-model';
import {RestaurantInfo} from './restaurant-info-model';

export interface Restaurant {
  restaurantId: number;
  restaurantInfo: RestaurantInfo;
}
