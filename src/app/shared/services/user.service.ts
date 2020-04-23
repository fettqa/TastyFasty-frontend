import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models/user-model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`/api/users/${userId}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>('/api/users', user);
  }

  updateUser(id: string, userToUpdate: User): Observable<User> {
    return this.http.put<User>(`/api/users/${id}`, userToUpdate);
  }
}
