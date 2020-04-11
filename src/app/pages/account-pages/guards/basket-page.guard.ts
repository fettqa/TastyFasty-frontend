import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {CurrentUserService} from '../../../core/services/current-user.service';
import {Role} from '../../../core/models/current-user.model';
import {first, map} from 'rxjs/operators';
import {LoginPageComponent} from '../../auth-pages/pages/login-page/login-page.component';
import {MatDialog} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class BasketPageGuard implements CanActivate {

  constructor(private currentUser: CurrentUserService,
              private  router: Router, private dialogService: MatDialog) {
  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.currentUser.hasRole(Role.ADMIN, Role.USER).pipe(
      map(can => {
        if (can) {
          return true;
        }
        const dialog = this.dialogService.open(LoginPageComponent);
      })
    );
  }

}
