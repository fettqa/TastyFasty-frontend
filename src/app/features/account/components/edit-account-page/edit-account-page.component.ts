import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../../shared/models/user-model';
import {Role} from '../../../../core/models/current-user.model';
import {FormBuilder} from '@angular/forms';
import {Address} from '../../../../shared/models/address-model';
import {UserService} from '../../../../shared/services/user.service';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {CurrentUserService} from '../../../../core/services/current-user.service';

interface CreateFirstForm {
  password?: string;
}

interface CreateSecondForm {
  firstName?: string;
  lastName?: string;
  middleName?: string;
}

interface CreateThirdForm {
  city?: string;
  street?: string;
  building?: number;
  phoneNumber?: number;
}


@Component({
  selector: 'app-edit-account-page',
  templateUrl: './edit-account-page.component.html',
  styleUrls: ['./edit-account-page.component.scss']
})
export class EditAccountPageComponent implements OnInit {

  user: User;

  password?: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  address?: Address;
  phoneNumber?: number;
  isLinear = true;
  Role = Role;


  constructor(private formBuilder: FormBuilder, private userService: UserService,
              private currentUserService: CurrentUserService) {
  }

  ngOnInit(): void {
    this.currentUserService.user$.pipe(map(user => {
      if (user.authenticated) {
        this.userService.getUserById(user.info.id).subscribe(user1 => {
          this.user = user1;
        });
      }
    })).subscribe();
  }

  handleFirstFormSubmit(value: CreateFirstForm) {
    this.password = value.password;
  }

  handleSecondFormSubmit(value: CreateSecondForm) {
    this.firstName = value.firstName;
    this.lastName = value.lastName;
    this.middleName = value.middleName;
  }

  handleThirdFormSubmit(value: CreateThirdForm) {
    this.phoneNumber = value.phoneNumber;
    this.address = {
      city: value.city,
      street: value.street,
      building: value.building
    };
  }

  handleHoleFormSubmit() {
    const userToPost: User = {
      id: this.user.id,
      username: this.user.username,
      password: this.password,
      role: this.user.role,
      personalInfo: {
        firstName: this.firstName,
        lastName: this.lastName,
        middleName: this.middleName,
        address: this.address,
        img: [123, 98, 41, 21, 33],
        phoneNumber: this.phoneNumber
      }
    };
    console.log(userToPost);
    console.log('user id to string' + this.user.id.toString());
    this.userService.updateUser(this.user.id.toString(), userToPost).subscribe(
      user => {
        console.log(user);
      }
    );
  }

}
