import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../shared/Services/token.service';
import { AuthService } from '../../shared/Services/auth.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NavService } from '../../shared/Services/nav.service';
import { ApiService } from '../../shared/Services/api.service';

declare var jquery:any;
declare var $ :any;
declare var demo : any;

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
    private nav : NavService,
    private _user : ApiService
  ) { }
  ngOnInit() {
    this.nav.hide();
    this.useJWTHelper();
    this.loadScript('./assets/js/light-bootstrap-dashboard.js');
    if(this.Token.getRole() == '2') {
      this._user.getUserData().subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );
    } else if(this.Token.getRole() == '3') {
      this._user.getEmployeeData().subscribe(
        data => this.handleResponse(data)
      );
    }
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  toggle(): void {
    // $('#wrapper').toggleClass('toggled');
    $('.navbar-toggler').toggleClass('nav-open');
  }

  logout(event: MouseEvent){

    event.preventDefault();
    this.Token.remove();
    this.auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }

  logoutAuto() {
    this.Token.remove();
    this.auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }

  useJWTHelper() {
    var token = sessionStorage.getItem('token');

    if(this.jwtHelper.isTokenExpired(token)){
      demo.showNotification('top','center', 'Your session has expired. Please login again.');
      this.logoutAuto();
    }
  }

  public name: string;
  public role: number;

  handleResponse(data) {
    this.name = data.data.name;
    this.role = data.data.role_id;
  }

  handleError(error) {
    console.log(error.error.error);
  }
}
