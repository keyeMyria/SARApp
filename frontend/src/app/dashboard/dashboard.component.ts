import { Component, OnInit } from '@angular/core';
import { TokenService } from '../shared/Services/token.service';
import { AuthService } from '../shared/Services/auth.service';
import { Router } from '../../../node_modules/@angular/router';
import { JwtHelperService } from '../../../node_modules/@auth0/angular-jwt';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  jwtHelper : JwtHelperService = new JwtHelperService();
  constructor(
    private Token : TokenService,
    private auth : AuthService,
    private router : Router,
  ) { }
  ngOnInit() {
    this.useJWTHelper();
  }

  toggle(): void {
    $('#wrapper').toggleClass('toggled');
  }

  handleResponse(data){

  }

  logout() {
    this.Token.remove();
    this.auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }

  useJWTHelper() {
    var token = sessionStorage.getItem('token');  
    if(this.jwtHelper.isTokenExpired(token)){
      this.logout();
    }
  }
}
