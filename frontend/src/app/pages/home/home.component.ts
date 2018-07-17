import { Component, OnInit } from '@angular/core';
import { NavService } from '../../shared/Services/nav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "SARApp";
  constructor(private nav : NavService) { }

  ngOnInit() {
    this.nav.show();
    this.nav.hideHome();
  }

}
