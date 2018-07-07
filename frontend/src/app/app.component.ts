import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public loggedIn : boolean;
  constructor(
    private auth: AuthService,
  ){}

  ngOnInit() {
    this.auth.authStatus.subscribe(
      value => this.loggedIn = value
    );
  }

}
