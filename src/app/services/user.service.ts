import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../pages/registration/user-model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>('/users', user); /*нужно будет указать правильный путь*/
  }
}
