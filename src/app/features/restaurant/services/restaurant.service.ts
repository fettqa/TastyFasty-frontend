import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Restaurant} from '../models/restaurant-model';
import {User} from '../../../shared/models/user-model';

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

  getRestaurantById(id: number): Observable<Restaurant> {
    return this.http.get<Restaurant>(`/api/restaurants/${id}`);
  }
}
