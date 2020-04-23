import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Order} from '../../../shared/models/order-model';
import {ListValue} from '../../../shared/models/api-model';
import {Breakfast} from '../../breakfast/models/breakfast-model';
import {User} from '../../../shared/models/user-model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  restId?: number;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(
      params => {
        this.restId = Number(params.get('id'));
      }
    );
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`/api/orders`);
  }

  getOrderById(id: number): Observable<Order> {
    return this.http.get<Order>(`/api/orders/${id}`);
  }

  getOrdersByDeliveryManId(id: number): Observable<Order[]> {
    return this.http.get<Order[]>(`/api/orders/deliveryman?deliverymanId=` + id.toString());
  }
  updateOrder(id: string, orderToUpdate: Order): Observable<Order> {
    return this.http.put<Order>(`/api/orders/${id}`, orderToUpdate);
  }

}
