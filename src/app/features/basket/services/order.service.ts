import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Order} from "../../../shared/models/order-model";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {  }

  createOrder(userId: number, order: Order): Observable<Order> {
    return this.http.post<Order>(`/api/users/${userId}/orders`, order);
  }

  getUserOrders(userId: number): Observable<Order[]> {
    return this.http.get<Order[]>(`/api/users/${userId}/orders/byCustomer`)
  }

}
