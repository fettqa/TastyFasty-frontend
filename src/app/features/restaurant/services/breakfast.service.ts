import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Breakfast} from "../models/breakfast-model";
import {Injectable, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class BreakfastService {

  restId?: number;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(
      params => {
        this.restId = Number(params.get('id'));
      }
    );
  }

  getBreakfasts(): Observable<Breakfast[]> {
    return this.http.get<Breakfast[]>(`http://localhost:8080/restaurants/${this.restId}/breakfasts`);
  }
}
