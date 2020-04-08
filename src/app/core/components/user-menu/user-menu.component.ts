import {Component, OnInit} from '@angular/core';
import {CurrentUserService} from '../../services/current-user.service';
import {AuthService} from '../../services/auth.service';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

  readonly user$ = this.currentUser.user$;
  constructor(private currentUser: CurrentUserService, private authService: AuthService,
              private activeRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    console.log(this.user$);
  }

  handleLogoutClick() {
    this.authService.logout().pipe(
      switchMap(() => this.authService.loadProfile())
    ).subscribe(user => {
      this.currentUser.user$.next(user);
      this.router.navigate([''], {
        relativeTo: this.activeRoute
      });
    });

  }
}
