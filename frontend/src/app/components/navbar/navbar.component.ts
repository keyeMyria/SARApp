import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/Services/auth.service';
import { TokenService } from '../../shared/Services/token.service';
import { UserService } from 'src/app/shared/Services/user.service';

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
    private UserService: UserService
  ) { }

  ngOnInit() {
    this.auth.authStatus.subscribe(
      value => this.loggedIn = value,
    );
  }

  logout(event: MouseEvent){

    event.preventDefault();
    this.Token.remove();
    this.UserService.remove();
    this.auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
    
  }

  

}
