import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private iss = {
    login : 'http://localhost:8000/api/auth/login',
    register : 'http://localhost:8000/api/auth/register',
    employee : 'http://localhost:8000/api/auth/employee/login'
  }
  constructor() { }
  
  handle(token, id) {
    this.set(token, id); 
  }

  set(token, id){
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('id', id);
  }

  get(){
    return sessionStorage.getItem('token');
  }

  getRole() {
    return sessionStorage.getItem('id');
  }

  remove(){
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('id');
  }

  isValid(){
    const token = this.get();
    if(token){
      const payload = this.payload(token);
      if(payload){
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
  }

  payload(token){
    const payload = token.split('.')[1]
    return this.decode(payload);
  }

  decode(payload){
    return JSON.parse(atob(payload));
  }

  loggedIn(){
    return this.isValid();
  }
}
