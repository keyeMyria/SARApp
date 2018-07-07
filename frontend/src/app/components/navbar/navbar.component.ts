import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { TokenService } from '../../Services/token.service';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private loggedIn : boolean;
  constructor(
    private auth: AuthService,
    private Token: TokenService,
    private router: Router,
    private User: UserService
  ) { }
  public user = {
    name: null,
    email: null
  }

  ngOnInit() {
    this.auth.authStatus.subscribe(
      value => this.loggedIn = value
    );
    this.set();
  }

  logout(event: MouseEvent){

    event.preventDefault();
    this.Token.remove();
    this.User.remove();
    this.auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
    
  }

  set() {
    this.user.name = localStorage.getItem('user');
    this.user.email = localStorage.getItem('email');
  }
}
