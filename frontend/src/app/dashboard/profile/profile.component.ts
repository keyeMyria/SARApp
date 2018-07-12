import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/Services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private _service : ApiService,
  ) { }
  public name = null;
  ngOnInit() {
    this._service.getUserData().subscribe(
      data => this.handleResponse(data)
    );
  }

  handleResponse(data){
    this.name = data.name;
  }

}
