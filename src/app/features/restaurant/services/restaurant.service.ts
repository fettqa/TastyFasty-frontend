import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Restaurant} from '../models/restaurant-model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) {
  }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>('/api/restaurants');
  }

  getRestaurantsBySearch(search: string): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>('/api/restaurants?search=' + search);
  }
}
