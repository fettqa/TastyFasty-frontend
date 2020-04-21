import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {User} from '../../models/user-model';
import {UserService} from '../../services/user.service';
import {Role} from '../../../../core/models/current-user.model';
import {Address} from '../../../../shared/models/address-model';
import {switchMap} from 'rxjs/operators';
import {AuthService} from '../../../../core/services/auth.service';
import {CurrentUserService} from '../../../../core/services/current-user.service';
import {Router} from '@angular/router';


interface CreateFirstForm {
  username?: string;
  password?: string;
  role?: Role;
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
  selector: 'app-registration-dialog',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {
  firstName?: string;
  lastName?: string;
  middleName?: string;
  address?: Address;
  username?: string;
  password?: string;
  phoneNumber?: number;
  role?: Role;
  isLinear = true;
  Role = Role;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private userService: UserService,
              private router: Router,
              private currentUserService: CurrentUserService) {
  }

  ngOnInit() {
  }

  handleFirstFormSubmit(value: CreateFirstForm) {
    this.username = value.username;
    this.password = value.password;
    this.role = value.role;
    console.log(this.username, this.password, this.role);
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
      id : 89,
      username: this.username,
      password: this.password,
      role: this.role,
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
    this.userService.createUser(userToPost).subscribe(
      user => {
        this.authService.login({
          username: this.username,
          password: this.password
        }).subscribe(profile => {
          this.currentUserService.user$.next(profile);
          this.router.navigateByUrl('/');
        });
      }
    );

  }
}


