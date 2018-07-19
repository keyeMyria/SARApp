import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/Services/auth.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public employees;
  constructor(

    private auth : AuthService,

  ) { }

  ngOnInit() {
     // a service that observes any changes with the users data
     this.auth.currentData.subscribe(data => this.handleResponse(data));
  }

  handleResponse(data) {
    this.employees = data.data.employees;
  }

}
