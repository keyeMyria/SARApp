import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../shared/Services/token.service';
import { AuthService } from '../../shared/Services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../shared/Services/user.service';
import { ApiService } from '../../shared/Services/api.service';

@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.css']
})
export class DashboardNavComponent implements OnInit {

  constructor(
    private Token : TokenService,
    private auth : AuthService,
    private router : Router,
    private _user : ApiService
  ) { }

  ngOnInit() {
    this._user.getUserData().subscribe(
      data => this.handleResponse(data)
    );
  }

  public name: string;
  
  logout(event: MouseEvent){

    event.preventDefault();
    this.Token.remove();
    this.auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
    
  }

  handleResponse(data) {
    this.name = data.data.name;
  }
}
