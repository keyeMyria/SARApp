import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  handle(user) {
    this.set(user); 
  }

  set(user){
    localStorage.setItem('user', user);
  }

  get(){
    return localStorage.getItem('user');
  }

  remove(){
    localStorage.removeItem('user');
  }

  loggedIn(){
    return this.get();
  }

}
