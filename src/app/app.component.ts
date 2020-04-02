import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SignInCreateDialogComponent} from './components/sign-in-create-dialog/sign-in-create-dialog.component';
import {RegistrationPageComponent} from './pages/registration/registration-page.component';
import {CurrentUserService} from './core/services/current-user.service';
import {map} from 'rxjs/operators';
import {useAnimation} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  login$ = this.currentUser.user$.pipe(
    map(user => user.login)
  );

  constructor(private dialogService: MatDialog, private currentUser: CurrentUserService) {
  }

  handleSignIn() {
    const dialog = this.dialogService.open(SignInCreateDialogComponent);
  }

  handleRegistration() {
    const dialog = this.dialogService.open(RegistrationPageComponent);
  }
}
