import {Component, OnInit} from '@angular/core';
import {CurrentUserService} from '../../services/current-user.service';
import {AuthService} from '../../services/auth.service';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginPageComponent} from '../../../pages/auth-pages/pages/login-page/login-page.component';
import {MatDialog} from '@angular/material/dialog';

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
    private activeRoute: ActivatedRoute,
    private router: Router,
    private dialogService: MatDialog
  ) {
  }

  ngOnInit(): void {  }

  handleLogoutClick() {
    this.authService.logout().subscribe(user => {
      this.currentUserService.user$.next(user);
      this.router.navigate([''], {
        relativeTo: this.activeRoute
      });
    });

  }

  handleLoginDialogOpen() {
    this.dialogService.open(LoginPageComponent);
  }

}
