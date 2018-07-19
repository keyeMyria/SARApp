import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../shared/Services/token.service';
import { AuthService } from '../../shared/Services/auth.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NavService } from '../../shared/Services/nav.service';
import { UserService } from '../../shared/Services/user.service';

// to be able to use jquery $
declare var $ :any; 
// to be able to use demo.js
declare var demo : any; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  /**
   * Instantiate JWTHelperService to use its function
   * for checking if the user token has expired then 
   * the user needs to re-login
   */
  jwtHelper : JwtHelperService = new JwtHelperService();

  public name: string;
  public role: number;

  constructor(

    private Token : TokenService,
    private auth : AuthService,
    private router : Router,
    private nav : NavService,
    private _user : UserService,

  ) { }

  ngOnInit() {

    // hide the home page navbar component
    this.nav.hide();
    // check if the token has expired
    this.useJWTHelper();
    // loads the script
    this.loadScript('./assets/js/light-bootstrap-dashboard.js');
    // a service that observes any changes with the users data
    this.auth.currentData.subscribe(data => this.handleResponse(data));

  }

  /**
   * Load scripts needed for a specific page
   * The called script is appended at the bottom
   * of the body
   */
  public loadScript(url: string) {

    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);

  }
  /**
   * instead of using jquery selector we use the
   * (click) function of angular that triggers
   * the toggle function
   */
  toggle(): void {

    $('.navbar-toggler').toggleClass('nav-open');

  }

  /** 
   * @param event
   */
  logout(event: MouseEvent){

    event.preventDefault();
    this.Token.remove();
    this._user.remove();
    this.auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');

  }

  /**
   * triggers when the user's token has already expired
   */
  logoutAuto() {

    this.Token.remove();
    this._user.remove();
    this.auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');

  }

  /**
   * check if the token has expired
   */
  useJWTHelper() {

    var token = sessionStorage.getItem('token');
    if(this.jwtHelper.isTokenExpired(token)){

      demo.showNotification('top','center', 'Your session has expired. Please login again.');
      this.logoutAuto();

    }

  }

  /**
   * handles assigning value to variables 
   */
  handleResponse(data) {

    this.name = data.data.name;
    this.role = data.data.role_id;

  }

  /**
   * display a notification about the error
   */
  handleError(error) {

    demo.showNotification('bottom', 'center', error.error.error);
    
  }
}
