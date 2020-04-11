import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Basket} from "../models/basket-model";

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor(private http: HttpClient) {  }

  getBasketByUserId(userId: number): Observable<Basket> {
    return this.http.get<Basket>(`/api/users/${userId}/basket`);
  }

  createBasket(userId: number, basket: Basket): Observable<Basket> {
    return this.http.post<Basket>(`/api/users/${userId}/basket`, basket);
  }

  removeBasketByUserId(): void {
  }
}
