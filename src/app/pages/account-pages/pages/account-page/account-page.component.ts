import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../shared/services/user.service";
import {User} from "../../../../shared/models/user-model";
import {CurrentUserService} from "../../../../core/services/current-user.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-account',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {

  user?: User;

  constructor(private userService: UserService, private currentUserService: CurrentUserService) {  }

  ngOnInit(): void {
    this.currentUserService.user$.pipe(map(currUser => {
      if (currUser.authenticated) {
        this.userService.getUserById(currUser.info.id).subscribe(user => {
          this.user = user;
        });
      }
    })).subscribe();
  }

}
