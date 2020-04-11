import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {User} from "../models/user-model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {  }

  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`/api/users/${userId}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>("/api/users", user);
  }
}
