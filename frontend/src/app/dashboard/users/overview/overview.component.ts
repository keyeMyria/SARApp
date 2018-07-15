import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../../shared/Services/token.service';
import { AuthService } from '../../../shared/Services/auth.service';
import { Router } from '@angular/router';
import { ApiService } from '../../../shared/Services/api.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  constructor(
    private Token : TokenService,
    private auth : AuthService,
    private router : Router,
    private _user : ApiService
  ) { }
  public role: number;

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

  handleResponse(data) {
    this.role = data.data.role_id;
  }

  handleError(error) {
    console.log(error.error.error);
  }

}
