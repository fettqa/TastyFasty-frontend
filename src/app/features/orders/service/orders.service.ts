import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {Order} from "../models/order-model";

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


}
