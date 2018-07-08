import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../shared/Services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private route : Router,
    private __apiService : ApiService
  ) { }

  ngOnInit() {
  }

  public form = {

    email: null,
    name: null,
    password: null,
    password_confirmation: null

  };

  public error = [];

  onSubmit() {

    return this.__apiService.register(this.form).subscribe(

      data => this.handleResponse(data),
      error => this.handleError(error)

    );

  }

  handleResponse(data) {
    console.log(data);
    this.route.navigateByUrl('login');

  }

  handleError(error) {
    console.log(error);
    this.error = error.error.errors;
    
  }


}
