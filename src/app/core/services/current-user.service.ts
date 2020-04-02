import {APP_INITIALIZER, Injectable, Provider} from '@angular/core';
import {ReplaySubject} from 'rxjs';
import {CurrentUser} from '../models/current-user.model';
import {AuthService} from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  readonly user$ = new ReplaySubject<CurrentUser>(1);
}

export function loadCurrentUser(currentUserService: CurrentUserService,
                                authService: AuthService): () => Promise<void> {
  return () => {
    return new Promise<void>((resolve => {
      authService.loadProfile().subscribe(profile => {
        currentUserService.user$.next(profile);
        resolve();
      });
    }));
  };
}

export const LOAD_CURRENT_USER_INITIALIZER: Provider = {
  provide: APP_INITIALIZER,
  useFactory: loadCurrentUser,
  multi: true,
  deps: [CurrentUserService, AuthService]
};


