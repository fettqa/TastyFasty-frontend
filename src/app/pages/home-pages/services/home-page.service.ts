import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Breakfast} from "../../../features/breakfast/models/breakfast-model";

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private http: HttpClient) {
  }

  getBreakfasts(): Observable<Breakfast[]> {
    return this.http.get<Breakfast[]>(`/api`);
  }

  getBreakfastsBySearch(search: String): Observable<Breakfast[]> {
    return this.http.get<Breakfast[]>(`/api?search=` + search);
  }
}
