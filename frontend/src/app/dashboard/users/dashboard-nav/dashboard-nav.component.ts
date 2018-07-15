import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../../shared/Services/token.service';
import { AuthService } from '../../../shared/Services/auth.service';
import { Router } from '@angular/router';
import { ApiService } from '../../../shared/Services/api.service';

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

  public name: string;
  public role: number;

  logout(event: MouseEvent){

    event.preventDefault();
    this.Token.remove();
    this.auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
    
  }

  handleResponse(data) {
    this.name = data.data.name;
    this.role = data.data.role_id;
  }

  handleError(error) {
    console.log(error.error.error);
  }
}
