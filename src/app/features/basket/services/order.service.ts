import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Order} from "../models/order-model";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {  }

  createBasket(userId: number, order: Order): Observable<Order> {
    return this.http.post<Order>(`/api/users/${userId}/orders`, order);
  }

}
