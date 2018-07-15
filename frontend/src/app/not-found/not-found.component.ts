import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="jumbotron text-center">
      <h1>404 Not Found</h1>
      <p>You may be lost. Click <a routerLink="/">here</a> to go back to SARApp.</p>
    </div>
  `
})
export class NotFoundComponent{}
