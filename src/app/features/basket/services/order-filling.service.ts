import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Breakfast} from "../../breakfast/models/breakfast-model";
import {OrderedBreakfast} from "../models/ordered-breakfast-model";

@Injectable({
  providedIn: 'root'
})
export class OrderFillingService {

  constructor(private http: HttpClient) {

  }

  getOrderItems(orderId: number): Observable<Breakfast[]> {
    return this.http.get<Breakfast[]>(`/api/order/${orderId}`);
  }

  addToOrder(orderId: number, orderItem: OrderedBreakfast): Observable<OrderedBreakfast> {
    return this.http.post<OrderedBreakfast>(`/api/order/${orderId}`, orderItem);
  }

  removeFromOrder(orderId: number, breakfastId: number): void {
    this.http.delete(`/api/order/${orderId}/${breakfastId}`).subscribe();
  }
}
