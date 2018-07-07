import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  handle(user, email) {
    this.set(user, email);
  }

  set(user, email){
    localStorage.setItem('user', user);
    localStorage.setItem('email', email);
  }

  remove() {
    localStorage.removeItem('user');
    localStorage.removeItem('email');
  }
}
