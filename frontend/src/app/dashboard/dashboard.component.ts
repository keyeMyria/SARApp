import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/Services/api.service';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private _service : ApiService,
  ) { }
  ngOnInit() {
    this._service.getUserData().subscribe(
      data => this.handleResponse(data)
    );
  }

  toggle(): void {
    $('#wrapper').toggleClass('toggled');
  }

  public user = {
    name: null,
    email: null,
  }
  handleResponse(data){
    this.user.name = data.name;
  }
}
