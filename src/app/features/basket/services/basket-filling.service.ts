import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Breakfast} from "../../breakfast/models/breakfast-model";

@Injectable({
  providedIn: 'root'
})
export class BasketFillingService {

  constructor(private http: HttpClient) {  }

  getBasketItems(basketId: number): Observable<Breakfast[]> {
    return this.http.get<Breakfast[]>(`/api/basket/${basketId}`);
  }

  addToBasket(basketId: number, breakfast: Breakfast): Observable<Breakfast> {
    return this.http.post<Breakfast>(`/api/basket/${basketId}`, breakfast);
  }

  removeFromBasket(basketId: number, breakfastId: number): void {
    let s = `http://localhost:8080/api/basket/${basketId}/${breakfastId}`;
    console.log(s);
    this.http.delete(s).subscribe();
  }

  removeAllFromBasket(basketId: number): void {
    this.http.delete(`/api/basket/${basketId}`).subscribe();
  }
}
