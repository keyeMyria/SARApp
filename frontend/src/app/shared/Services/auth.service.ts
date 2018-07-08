import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.Token.loggedIn());
  private user = new BehaviorSubject<string>(this.User.loggedIn());
  
  authStatus = this.loggedIn.asObservable();
  userstatus = this.user.asObservable();

  changeUser(value: string) {
    this.user.next(value);
  }

  changeAuthStatus(value : boolean){
    this.loggedIn.next(value);
  }
  constructor(
    private Token: TokenService, 
    private User: UserService
  ) { }
}