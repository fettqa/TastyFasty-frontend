import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SignInDialogComponent} from './components/sign-in-dialog/sign-in-dialog.component';
import {RegistrationPageComponent} from './pages/registration/registration-page.component';
import {CurrentUserService} from './core/services/current-user.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'TastyFasty';
  isLoggedIn: boolean = true;

  user$ = this.currentUser.user$.pipe();

  constructor(private dialogService: MatDialog, private currentUser: CurrentUserService) {
  }

  handleSignIn() {
    const dialog = this.dialogService.open(SignInDialogComponent);
  }

  handleRegistration() {
    const dialog = this.dialogService.open(RegistrationPageComponent);
  }
}
