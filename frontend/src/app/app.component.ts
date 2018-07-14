import { Component } from '@angular/core';
import { AuthService } from './shared/Services/auth.service';
import { NgProgress } from '@ngx-progressbar/core'; 


@Component({
  selector: 'app-root',
  template: `
              <ng-progress></ng-progress>
              <app-navbar></app-navbar>
              
              <main>
                  <router-outlet></router-outlet>
              </main>
            `,
  styles: [],
})
export class AppComponent {

  public loggedIn : boolean;

  constructor(

    private auth: AuthService,
    private progress: NgProgress,

  ){}


  public user = {
    name: null,
    email: null
  }

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
