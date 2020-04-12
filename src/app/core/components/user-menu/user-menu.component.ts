import {Component, OnInit} from '@angular/core';
import {CurrentUserService} from '../../services/current-user.service';
import {AuthService} from '../../services/auth.service';
import {map, switchMap} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginPageComponent} from '../../../pages/auth-pages/pages/login-page/login-page.component';
import {MatDialog} from '@angular/material/dialog';
import {BasketService} from "../../../features/basket/services/basket.service";
import {Basket} from "../../../features/basket/models/basket-model";

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

  readonly user$ = this.currentUserService.user$;

  constructor(
    private currentUserService: CurrentUserService,
    private authService: AuthService,
    private basketService: BasketService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private dialogService: MatDialog
  ) {

  }

  ngOnInit(): void {
    console.log(this.user$);
  }

  handleLogoutClick() {
    this.authService.logout().pipe(
      switchMap(() => this.authService.loadProfile())
    ).subscribe(user => {
      this.currentUserService.user$.next(user);
      this.router.navigate([''], {
        relativeTo: this.activeRoute
      });
    });

  }

  handleLoginDialogOpen() {
    this.dialogService.open(LoginPageComponent);
  }

  handleBasketButton() {
    this.user$.pipe(
      map(user => {
        if (user.authenticated) {
          this.basketService.getBasketByUserId(user.info.id).subscribe(basket => {
            if (basket == undefined) {
              const newBasket: Basket = {
                userID: user.info.id,
                fullPrice: 0,
                numberOfPersons: 1
              };
              this.basketService.createBasket(user.info.id, newBasket).subscribe(createdBasket => {
                this.router.navigateByUrl(`/account/${user.info.id}/basket/${createdBasket.basketID}`)
              })
            } else {
              this.router.navigateByUrl(`/account/${user.info.id}/basket/${basket.basketID}`)
            }
          });
        }
      }
    )).subscribe();
  }
}
