import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  handle(data) {
    this.set(data);
  }

  set(data) {
    sessionStorage.setItem('current_user', JSON.stringify(data));
  }

  get() {
    return sessionStorage.getItem('current_user');
  }

  remove() {
    sessionStorage.removeItem('current_user');
  }
}
