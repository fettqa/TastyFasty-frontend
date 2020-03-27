import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SignInCreateDialogComponent} from './components/sign-in-create-dialog/sign-in-create-dialog.component';
import {RegistrationPageComponent} from './pages/registration/registration-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  constructor(private dialogService: MatDialog) {
  }

  handleSignIn() {
    const dialog = this.dialogService.open(SignInCreateDialogComponent);
  }

  handleRegistration() {
    const dialog = this.dialogService.open(RegistrationPageComponent);
  }
}
