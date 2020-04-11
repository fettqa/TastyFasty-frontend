import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CurrentUserService} from './core/services/current-user.service';
import {Role} from './core/models/current-user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'TastyFasty';
  Role = Role;
  check: boolean;

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
}
