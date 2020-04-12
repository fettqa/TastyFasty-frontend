import {Injectable} from "@angular/core";
import {ReplaySubject} from "rxjs";
import {CurrentOrder} from "../models/current-order.model";

@Injectable({
  providedIn: 'root',
})
export class CurrentOrderService {
  readonly order$ = new ReplaySubject<CurrentOrder>(1);
}
