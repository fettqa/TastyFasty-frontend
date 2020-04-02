import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Restaurant} from '../models/restaurant-model';
import {ListValue} from '../models/api-model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) {
  }

  getRestaurants(): Observable<ListValue<Restaurant>> {
    return this.http.get<ListValue<Restaurant>>('/restaurants'); /*нужно будет указать правильный путь*/
  }
}
