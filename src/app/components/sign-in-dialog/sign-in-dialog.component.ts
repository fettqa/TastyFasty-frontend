import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sign-in-create-dialog',
  templateUrl: './sign-in-dialog.component.html',
  styleUrls: ['./sign-in-dialog.component.scss']
})
export class SignInDialogComponent implements OnInit {

  Login?: string;
  Password?: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
