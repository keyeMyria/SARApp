import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/Services/api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _service : ApiService) { }

  ngOnInit() {
    this._service.getUserData().subscribe(
      data => console.log(data)
    )
  }
}
