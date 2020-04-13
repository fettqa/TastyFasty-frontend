import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../shared/services/user.service";
import {User} from "../../../../shared/models/user-model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-account',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss'],
  providers: [UserService]
})
export class AccountPageComponent implements OnInit {

  user?: User;

  constructor(private userService: UserService, private route: ActivatedRoute) {  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const userId = Number(params.get('userId'));
        this.userService.getUserById(userId).subscribe(user => {
          this.user = user;
          console.log(this.user);
        });
      }
    );
  }

}
