import {Injectable} from '@angular/core';
import {CurrentUser} from '../models/current-user.model';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {LoginData} from '../models/auth.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }


  loadProfile(): Observable<CurrentUser> {
    console.log(localStorage.getItem('currentUser'));
    if (localStorage.getItem('currentUser') == null) {
      localStorage.setItem('currentUser', '{"authenticated":false}');
    }
    return of<CurrentUser>(JSON.parse(localStorage.getItem('currentUser')) as CurrentUser);
  }


  login(data: LoginData): Observable<CurrentUser> {
    const params = new HttpParams({
      fromObject: {
        username: data.username,
        password: data.password
      }
    });

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post<CurrentUser>('/api/auth/login', params.toString(), {
      headers
    });
  }

  logout(): Observable<CurrentUser> {
    localStorage.setItem('currentUser', '{"authenticated":false}');
    return of<CurrentUser>(JSON.parse(localStorage.getItem('currentUser')) as CurrentUser);
  }
}
