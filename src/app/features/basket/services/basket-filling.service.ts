import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Breakfast} from "../../breakfast/models/breakfast-model";
import {BasketItem} from "../models/basket-item-model";

@Injectable({
  providedIn: 'root'
})
export class BasketFillingService {

  constructor(private http: HttpClient) {  }

  getBasketItems(basketId: number): Observable<BasketItem[]> {
    return this.http.get<BasketItem[]>(`/api/basket/${basketId}/asBasketItems`);
  }

  getBreakfastsInBasket(basketId: number): Observable<Breakfast[]> {
    return this.http.get<Breakfast[]>(`/api/basket/${basketId}`);
  }

  addToBasket(basketId: number, basketItem: BasketItem): Observable<BasketItem> {
    return this.http.post<BasketItem>(`/api/basket/${basketId}`, basketItem);
  }

  updateBasketItem(basketId: number, basketItem: BasketItem): Observable<BasketItem> {
    return this.http.put<BasketItem>(`/api/basket/${basketId}/${basketItem.basketItemID}`, basketItem)
  }

  removeFromBasket(basketId: number, breakfastId: number): void {
    this.http.delete(`/api/basket/${basketId}/${breakfastId}`).subscribe();
  }

  removeAllFromBasket(basketId: number): void {
    this.http.delete(`/api/basket/${basketId}`).subscribe();
  }
}
