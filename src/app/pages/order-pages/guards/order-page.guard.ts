import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Role} from '../../../core/models/current-user.model';
import {map} from 'rxjs/operators';
import {CurrentUserService} from '../../../core/services/current-user.service';

@Injectable({
  providedIn: 'root'
})
export class OrderPageGuard implements CanActivate {

  constructor(private currentUser: CurrentUserService,
              private  router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.currentUser.hasRole(Role.ADMIN, Role.DELIVERY).pipe(
      map(can => {
        if (can) {
          return true;
        }
        return this.router.createUrlTree(['/']);
      })
    );
  }

}
