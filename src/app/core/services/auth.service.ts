import {Injectable} from '@angular/core';
import {interval, Observable} from 'rxjs';
import {CurrentUser, Role} from '../models/current-user.model';
import {first, mapTo} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  loadProfile(): Observable<CurrentUser> {
    return interval(500).pipe(
      first(),
      mapTo(
        {
          id: '1',
          login: 'sdfghjkl',
          role: Role.ADMIN
        }
      )
    );
  }
}
