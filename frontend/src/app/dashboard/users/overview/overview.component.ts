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
  public role:number;
  public employees;
  constructor(

    private auth : AuthService,

  ) { }

  ngOnInit() {

     // a service that observes any changes with the users data
    this.auth.currentData.subscribe(data => this.handleResponse(data));

  }

  /**
   * handles assigning value to role
   */
  handleResponse(data) {
    console.log(data);
    this.role = data.data.role_id;
    this.employees = data.data.employees;
  }
}
