import {Component, OnInit} from '@angular/core';
import {Address} from '../restaurants-page/address-model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from './user-model';
import {HttpClient} from '@angular/common/http';


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


  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) {
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
    const address: Address = {
      city: value.city,
      street: value.street,
      building: value.building
    };
    this.address = address;
  }

  handleHoleFormSubmit() {
    const userToPost: User = {
      firstName: this.firstName,
      lastName: this.lastName,
      middleName: this.middleName,
      address: this.address,
      phoneNumber: this.phoneNumber,
      username: this.username,
      password: this.password
    };
    console.log(userToPost);
    console.log(this.username, this.password);
    this.httpClient.post<User>('localhost8080', userToPost).subscribe(
      user => {
        console.log(user);
      }
    );
  }
}


