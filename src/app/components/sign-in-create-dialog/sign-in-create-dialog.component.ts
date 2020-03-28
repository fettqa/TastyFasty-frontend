import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sign-in-create-dialog',
  templateUrl: './sign-in-create-dialog.component.html',
  styleUrls: ['./sign-in-create-dialog.component.scss']
})
export class SignInCreateDialogComponent implements OnInit {

  Login?: string;
  Password?: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
