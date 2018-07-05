import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  public userForm = {

    email: null,
    password: null

  };

  public employeeForm = {

    employeeID: null,
    password: null

  };

  public socialform = {

    name: null,
    email: null,
    password: null,
    action: null

  };

  ngOnInit() {

  }

  onSubmit() {

  }

  onEmpSubmit() {

  }

  facebook() {

  }

  google() {

  }

}
