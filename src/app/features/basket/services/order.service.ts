import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Order} from "../../../shared/models/order-model";
import {Breakfast} from "../../breakfast/models/breakfast-model";
import {User} from "../../../shared/models/user-model";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {  }

  createOrder(userId: number, order: Order): Observable<Order> {
    return this.http.post<Order>(`/api/users/${userId}/orders`, order);
  }

  getUserOrders(userId: number): Observable<Order[]> {
    return this.http.get<Order[]>(`/api/users/${userId}/orders/byCustomer`);
  }


  getBreakfastsInOrderById(id: number): Observable<Breakfast[]> {
    return this.http.get<Breakfast[]>(`http://localhost:8080/api/orders/${id}`);
  }

  updateOrderByOrderId(id: number, orderToUpdate: Order) {
    return this.http.put<Order>(`http://localhost:8080/api/orders/${id}`, orderToUpdate);

  }

}
