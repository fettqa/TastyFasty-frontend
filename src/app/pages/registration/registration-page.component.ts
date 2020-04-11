import {Component, OnInit} from '@angular/core';
import {Address} from '../../shared/models/address-model';
import {FormBuilder} from '@angular/forms';
import {User} from '../../shared/models/user-model';
import {UserService} from "../../shared/services/user.service";
import {Role} from "../../core/models/current-user.model";


interface CreateFirstForm {
  username?: string;
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
  isLinear = true;


  constructor(private formBuilder: FormBuilder, private userService: UserService) {
  }

  ngOnInit() {
  }

  handleFirstFormSubmit(value: CreateFirstForm) {
    this.username = value.username;
    this.password = value.password;
    console.log(this.username, this.password);
  }


  handleSecondFormSubmit(value: CreateSecondForm) {
    this.firstName = value.firstName;
    this.lastName = value.lastName;
    this.middleName = value.middleName;
    console.log(this.firstName, this.lastName, this.middleName);

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
      personalInfo: {
        firstName: this.firstName,
        lastName: this.lastName,
        middleName: this.middleName,
        address: this.address,
        phoneNumber: this.phoneNumber,
        img: [123, 98, 41, 21, 201]
      },
      username: this.username,
      password: this.password,
      role: Role.USER
    };
    console.log(userToPost);
    console.log(this.username, this.password);
    this.userService.createUser(userToPost).subscribe(
      user => {
        console.log(user);
      }
    );
  }
}


