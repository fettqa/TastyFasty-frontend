import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CurrentUserService} from './core/services/current-user.service';
import {Role} from './core/models/current-user.model';
import {RegistrationPageComponent} from "./pages/user-pages/pages/registration-page/registration-page.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'TastyFasty';
  Role = Role;
  check: boolean;
  isLoggedIn: boolean = true;

  user$ = this.currentUser.user$.pipe();
  role: Role;

  constructor(private dialogService: MatDialog, private currentUser: CurrentUserService) {
    this.check = true;
    const rolesArr = [Role.DELIVERY];
    this.currentUser.hasRole(...rolesArr)
      .subscribe(has => {
        if (has) {
          this.check = false;
        }
      });
  }

  handleRegistration() {
    const dialog = this.dialogService.open(RegistrationPageComponent);
  }
}
