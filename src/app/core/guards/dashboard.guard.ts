import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Role} from '../models/current-user.model';
import {CurrentUserService} from '../services/current-user.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate {
  constructor(private currentUser: CurrentUserService,  private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.currentUser.user$.pipe(
      map(user => {
        if (!user.authenticated) {
          return false;
        }
        if (user.info.role.includes(Role.USER)) {
          return this.router.createUrlTree(['dashboard', 'user']);
        }
        if (user.info.role.includes(Role.ADMIN)) {
          return this.router.createUrlTree(['dashboard', 'admin']);
        }
        return true;
      })
    );
  }

}
