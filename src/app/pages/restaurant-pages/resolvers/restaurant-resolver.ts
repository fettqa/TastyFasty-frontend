import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Restaurant} from '../../../features/restaurant/models/restaurant-model';
import {Observable} from 'rxjs';

export class RestaurantResolver implements Resolve<Restaurant> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Restaurant> | Promise<Restaurant> | Restaurant {
    const id = route.paramMap.get('restaurantId');
    return null;
  }
}
