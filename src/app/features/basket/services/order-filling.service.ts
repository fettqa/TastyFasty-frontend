import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Breakfast} from "../../breakfast/models/breakfast-model";

@Injectable({
  providedIn: 'root'
})
export class OrderFillingService {

  constructor(private http: HttpClient) {

  }

  getOrderItems(orderId: number): Observable<Breakfast[]> {
    return this.http.get<Breakfast[]>(`/api/order/${orderId}`);
  }

  addToOrder(orderId: number, breakfast: Breakfast): Observable<Breakfast> {
    return this.http.post<Breakfast>(`/api/order/${orderId}`, breakfast);
  }

  removeFromOrder(orderId: number, breakfastId: number): void {
    this.http.delete(`/api/order/${orderId}/${breakfastId}`).subscribe();
  }
}
