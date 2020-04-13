import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Breakfast} from "../models/breakfast-model";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class BreakfastService {

  constructor(private http: HttpClient) {
  }

  getBreakfasts(restId: number): Observable<Breakfast[]> {
    return this.http.get<Breakfast[]>(`/api/restaurants/${restId}/breakfasts`);
  }

  getBreakfastById(restId: number, breakfastId: number): Observable<Breakfast> {
    return this.http.get<Breakfast>(`/api/restaurants/${restId}/breakfasts/${breakfastId}`);
  }
}
