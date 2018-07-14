import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public name: string;
  handle(user) {
    this.set(user); 
  }

  set(user){
    this.name = user;
  }

  get(){
    return this.name;
  }

  remove(){
    this.name = null;
  }

}
