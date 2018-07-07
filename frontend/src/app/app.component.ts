import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';
import { NgProgress } from '@ngx-progressbar/core'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public loggedIn : boolean;

  constructor(

    private auth: AuthService,
    private progress: NgProgress

  ){}


  ngOnInit() {
    this.progress.start();
    setTimeout(() => {
      /** progress ends after 2 seconds */
      this.progress.complete();
      }, 2000);
    this.auth.authStatus.subscribe(

      value => this.loggedIn = value
      
    );
  }

}
