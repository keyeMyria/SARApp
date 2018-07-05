import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private route : Router,
    private http : HttpClient
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

  private baseUrl = 'http://localhost:8000/api/auth';

  onSubmit() {

    return this.http.post(`${this.baseUrl}/signup`,this.form).subscribe(

      data => this.handleResponse(data),
      error => this.handleError(error)

    );

  }

  handleResponse(data) {

    this.route.navigateByUrl('login');

  }

  handleError(error) {

    this.error = error.error.errors;
    
  }


}
