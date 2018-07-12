import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService as SocialAuth, FacebookLoginProvider, GoogleLoginProvider } from 'angular-6-social-login';
import { AuthService } from '../../shared/Services/auth.service';
import { TokenService } from '../../shared/Services/token.service';
import { ApiService } from '../../shared/Services/api.service';
import { UserService } from '../../shared/Services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router : Router,
    private Auth : AuthService,
    private SocialAuth : SocialAuth,
    private Token : TokenService,
    private __apiService : ApiService,
    private _user : UserService
  ) { }

  public form = {

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

  public error = null;

  ngOnInit() {
    
  }

  onSubmit() {

    this.__apiService.login(this.form).subscribe( 

      data => this.handleResponse(data),
      error => this.handleError(error)

    );

  }

  onEmpSubmit() {

  }

  facebook() {
    this.SocialAuth.signIn(FacebookLoginProvider.PROVIDER_ID).then(

      (userData) => {

        this.socialform.name = userData.name;
        this.socialform.email = userData.email;
        this.socialform.password = '123456';
        this.socialform.action = 'social';
        this.__apiService.login(this.socialform).subscribe( 

          data => this.handleResponse(data),
          error => this.handleError(error),

        ); 

      }

    );

  }

  google() {
    this.SocialAuth.signIn(GoogleLoginProvider.PROVIDER_ID).then(

      (userData) => {

        this.socialform.name = userData.name;
        this.socialform.email = userData.email;
        this.socialform.password = '123456';
        this.socialform.action = 'social';
        this.__apiService.login(this.socialform).subscribe( 

          data => this.handleResponse(data),
          error => this.handleError(error),

        ); 

      }

    );
  }

  handleResponse(data){
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/dashboard');
  }

  handleError(error){
    this.error = error.error.error;
  }
}
