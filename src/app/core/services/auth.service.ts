import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CurrentUser} from '../models/current-user.model';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {LoginData} from '../models/auth.model';
import {catchError} from 'rxjs/operators';
import {CurrentUserService} from './current-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  cu: Observable<CurrentUser>;

  constructor(private http: HttpClient) {
  }

  loadProfile(): Observable<CurrentUser> {
    if (this.cu === undefined) {
      return this.http.get<CurrentUser>('http://localhost:8080/restaurants');

    } else {
      return this.cu;
    }    /*
        return this.http.get<CurrentUser>('http://localhost:8080/restaurants');
    */
  }


  login(data: LoginData): Observable<void> {
    const params = new HttpParams({
      fromObject: {
        username: data.username,
        password: data.password
      }
    });

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    this.cu = this.http.post<CurrentUser>('http://localhost:8080/auth/login', params.toString(), {
      headers: headers
    });

    return this.http.post<void>('http://localhost:8080/auth/login', params.toString(), {
      headers: headers
    });
  }

  logout(): Observable<void> {
    this.cu = this.http.post<CurrentUser>('http://localhost:8080/auth/logout', null);

    return this.http.post<void>('http://localhost:8080/auth/logout', null);
/*        const params = new HttpParams({
          fromObject: {
            username: '0',
            password: '0'
          }
        });

        const headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        });

        return this.http.post<void>('http://localhost:8080/auth/login', params.toString(), {
          headers: headers
        });*/
  }
}
